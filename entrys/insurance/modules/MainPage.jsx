/**
 * Created by douxiaobin on 2016/10/29.
 */
import React from 'react';
import { render } from 'react-dom';
import Carousel from './Carousel.jsx';
import News from '../../../components/basic/News.js';

import '../../../css/insurancems/components/MainPage.css';
var ProxyQ = require('../../../components/proxy/ProxyQ');

var MainPage=React.createClass({

    validate:function(){
        if(this.state.session!=true){

            var url="/insurance/insuranceReactPageDataRequest.do";
            var params={
                reactPageName:'insurancePersonalCenterPage',
                reactActionName:'getInsurancePersonalCenter'
            };

            ProxyQ.queryHandle(
                'post',
                url,
                params,
                null,
                function(ob) {
                    var loginModal = this.refs['loginModal'];
                    $(loginModal).modal('hide');
                }.bind(this),

                function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            );
        }
    }
    ,
    splitIntoBranch:function(url) {


         //if (this.state.session != true) {
         //    var loginModal = this.refs['loginModal'];
         //    $(loginModal).modal('show');
         //}else{
             if(this.props.splitIntoBranch!==undefined&&this.props.splitIntoBranch!==null)
         {
             this.props.splitIntoBranch(url);
         }
         //}


    },
    onClick: function (ob) {
        var url="/bsuims/bsMainFrameInit.do";
        var params={
            login_strLoginName: "yw01",
            login_strPassword: "1"
        };

        ProxyQ.queryHandle(
            'post',
            url,
            params,
            null,
            function(ob) {

            }.bind(this),
            function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this));
    },
    getInitialState:function(){
        return ({session: false});
    },
    render:function(){
        return(

            <div className='MainPage'>
                <div className="header">

                    <div className='inline fleft' style={{padding:'5px 0 0 24px'}}>
                        <img src={App.getResourceDeployPrefix()+"/images/logo.png"} style={{}}/>
                    </div>

                    <div className='inline fright' style={{padding: '55px 0px 0px 10px'}}>
                        <ul>
                            <li><a href="current.html" className="active">首页</a></li>
                            <li className='product-center'onClick={this.splitIntoBranch.bind(this,'product')} >
                                <a href="javascript:void(0)"> 产品中心</a>
                            </li>
                            <li><a href="news.html">新闻资讯</a></li>
                            <li className='cursor' onClick={this.splitIntoBranch.bind(this,'business')}>
                                <a href="javascript:void(0)">个人中心</a>
                            </li>
                            <li className='cursor' onClick={this.splitIntoBranch.bind(this,'consultation')}>
                                <a href="javascript:void(0)">业务咨询</a>
                            </li>
                            <li onClick={this.splitIntoBranch.bind(this,'')}>
                                <a href="javascript:void(0)">关于我们</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{marginTop:'1px'}}>
                    <Carousel />
                </div>

                <div className='container' style={{position:'static'}}>
                    <div className='row'>
                        <div className="col-sm-4" style={{padding:'20px'}}>
                            <div style={{textAlign:'center',padding:'10px',background:'url('+App.getResourceDeployPrefix()+'/images/background_1.png) no-repeat',backgroundSize:'100%'}}>
                                <div style={{marginTop:'20px'}}>
                                    <h3>财产险</h3>
                                </div>
                                <div style={{marginTop:'20px'}}>
                                    <h4>企业    个人</h4>
                                </div>
                                <div style={{marginTop:'20px'}}>
                                    <h5>车险    意外伤害保险    其他</h5>
                                    <h5>家庭财产损失险</h5>
                                </div>
                                <div style={{marginTop:'60px'}}>
                                    <button type="button" className="btn btn-default">
                                        查看详情
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4" style={{padding:'20px'}}>
                            <div style={{textAlign:'center',padding:'10px',background: 'rgb(142, 246, 216)'}}>
                                <div style={{marginTop:'20px'}}>
                                    <h3>寿险</h3>
                                </div>
                                <div style={{marginTop:'20px'}}>
                                    <h4>企业    个人</h4>
                                </div>
                                <div style={{marginTop:'20px'}}>
                                    <h5>团体健康险    企业年金</h5>
                                    <h5>团体意外伤害保险</h5>
                                </div>
                                <div style={{marginTop:'60px'}}>
                                    <button type="button" className="btn btn-default">
                                        查看详情
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4" style={{padding:'20px'}}>
                            <div style={{padding:'10px',border:'1px solid '}}>
                                <div style={{marginTop:'20px',position:'relative'}}>
                                    <span style={{display:'inline-block',fontSize:'1.2em'}}>新闻资讯</span>
                                    <span style={{display:'inline-block',position:'absolute',right:'10%'}}>NEWS</span>
                                </div>
                                <div style={{marginTop:'20px'}}>
                                    <News
                                        data={[
                                        {text:'山东大学2016年自主招生初审',date:'2016-05'},
                                        {text:'关于自主招生初审延期公布',date:'2016-06'},
                                        {text:'山东大学2016年免试招收',date:'2016-07'},
                                        {text:'山东大学2016年音乐类专业考试',date:'2016-08'},
                                        {text:'[政策解读]2016年自主招生',date:'2016-09'}
                                        ]}
                                        />
                                </div>
                                <div style={{marginTop:'20px'}}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container' style={{position:'static',background:'#5e6d73',color: 'rgba(255, 255, 255, 0.7)'}}>
                    <div className='row' style={{padding:'10px',textAlign:'center',background:'url('+App.getResourceDeployPrefix()+'/images/problemBackground.png) no-repeat',backgroundSize:'100%'}}>
                        <div style={{marginTop:'30px'}}>
                            <h3>Contact us</h3>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <span>let us know your feedbacks and questions</span>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <input
                                style={{width:'38%',padding:'10px',background:'transparent',border:'1px solid'}}
                                type="text"
                                defaultValue="Name..."
                                name='name'
                                required=""/>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <input
                                style={{width:'38%',padding:'10px',background:'transparent',border:'1px solid'}}
                                type="text"
                                defaultValue="Email..."
                                name='email'
                                required=""/>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <textarea
                                style={{minHeight:'150px',width:'38%',padding:'10px',background:'transparent',border:'1px solid #fff'}}
                                name='message'
                                type="text"
                                defaultValue='Content...'
                                >
                            </textarea>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <button
                                type="button"
                                className="btn btn-danger"
                                style={{width:'18%'}}
                                >
                               <span>
                                   <i className="fa fa-paper-plane" aria-hidden="true"></i>
                               </span>
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                <div className='container' style={{position:'static',marginBottom:'80px'}}>
                    <div className='row' style={{padding:'10px',marginTop:'40px'}}>
                        <div className='fleft' style={{width:'60%',marginLeft:'10%'}}>
                            <div>http://www.topwellsoft.com</div>
                            <div>地址:....</div>
                            <div>电话:0531-88690770</div>
                            <div>E-mail:...</div>
                        </div>
                        <div className='fright' style={{width:'30%'}}>
                            <ul>
                                <li>
                                    <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                                </li>
                                <li>
                                    <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                                </li>
                                <li>
                                    <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                                </li>
                                <li>
                                    <span><i className="fa fa-tencent-weibo" aria-hidden="true"></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="modal fade bs-example-modal-sm login-container"
                     tabIndex="-1"
                     role="dialog"
                     aria-labelledby="myLargeModalLabel"
                     aria-hidden="true"
                     ref='loginModal'
                    >
                    <div className="modal-dialog modal-sm" style={{position:'absolute',top:'30%',width:'50%',marginLeft:'25%'}}>
                        <div className="modal-content" style={{position:'relative',width:'100%',padding:'40px'}}>

                            <div className="modal-body">

                                <div className="form-group">
                                    <input className="form-control" name="username" placeholder="用户名/手机号" type="text"/>
                                </div>
                                <div className="form-group" style={{position:'relative'}}>
                                    <input className="form-control" name="password" placeholder="密码" type="text"/>
                                </div>
                                <div className="form-options clearfix">
                                    <input className='search-new' value="登录"
                                           onClick={this.validate}
                                        />
                                    <a className="pull-right" href="#" style={{marginTop:'42px'}}>忘记密码了？</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});
module.exports=MainPage;
/**
 * Created by douxiaobin on 2016/10/27.
 */

