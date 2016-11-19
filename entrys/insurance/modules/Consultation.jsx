import React from 'react';
import {render} from 'react-dom';
import '../../../css/insurancems/components/Consultation.css';
import Carousel from './Carousel.jsx';
import ConsultationDetails from '../modules/ConsultationDetails.jsx';
import NewQuestion from '../modules/NewQuestion.jsx';
var ProxyQ = require('../../../components/proxy/ProxyQ');
import Calendar from './Calendar.jsx';
var Page = require('../../../components/page/Page');
import Navigator from './Navigator';
var info={};

var Consultation=React.createClass({

    Branch:function(branch){
        this.setState({nav: branch});
        this.initialData();
        this.render();
    },
    validate:function(){
        if(this.state.session!=true){

            var loginModal = this.refs['loginModal'];
            var username=$(loginModal).find("input[name='username']").val();
            var password=$(loginModal).find("input[name='password']").val();

            var url="/bsuims/bsMainFrameInit.do";
            var params={
                login_strLoginName: username,
                login_strPassword: password
            };

            ProxyQ.queryHandle(
                'post',
                url,
                params,
                null,
                function(res) {
                    var re = res.re;
                    if(re!==undefined && re!==null && (re ==1 || re =="1")){ //登陆成功
                        this.setState({session: true});
                        var loginModal = this.refs['loginModal'];
                        $(loginModal).modal('hide');
                        window.setTimeout(this.goToOthers('newQuestion'), 300);
                    }
                }.bind(this),
                function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            );
        }
    },


    paginationData:function (data,pageIndex) {
        let capacity=data.length;
        var slices=null;
        Page.getInitialDataIndex(capacity,pageIndex,function(ob){
                slices=data.slice(ob.begin,ob.end);
            }
        );
        return slices;
    },
    pageCb:function(index) {
        this.setState({pageIndex: index});
    },

    goToOthers:function(branch){
        if (this.state.session != true) {
            var loginModal = this.refs['loginModal'];
            $(loginModal).modal('show');
        } else {
            this.setState({
                nav: branch,
            });
        }
    },
    getInitialState: function() {
        return {

            checked: !!this.props.checked,
            current: 'carOrder',
            startData:null,
            endDate:null,
            pageIndex:0,
            value:null


        }
    },

    initialData:function(){

        window.setTimeout(function () {

            this.setState({
                data: info.data
            })
        }.bind(this), 300);

    },
    onSaveInput:function(event){

        this.setState({value: event.target.value});

    },
    onChildChanged: function (type,date) {
        switch (type){
            case 'startDate':
                this.setState({
                    startData: date
                });
                break;
            case 'endDate':
                this.setState({
                    endData: date
                });
                break;
        }
    },
    getQuestionContent:function(item,title){
        var url="/insurance/insuranceReactPageDataRequest.do";
        var params={
            reactPageName:'insurancePersonalCenterProblemPage',
            reactActionName:'getProblemContent',
            themeId:item
        };

        ProxyQ.queryHandle(
            'post',
            url,
            params,
            null,
            function(ob) {
                info=ob;
                this.state.nav='consultationDetails';
                this.initialData();

            }.bind(this),

            function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        );
        this.state.title=title;
    },
    getLimitQuestion:function(){
        var url="/insurance/insuranceReactPageDataRequest.do";
        var params={
            reactPageName:'insurancePersonalCenterProblemPage',
            reactActionName:'getLimitProblem',
            startDate:this.state.startData,
            endDate:this.state.endData,
            title:this.state.value
        };

        ProxyQ.queryHandle(
            'post',
            url,
            params,
            null,
            function(ob) {
                info=ob;
                this.state.nav=undefined;
                this.initialData();

            }.bind(this),

            function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        );
    },
    getAllQuestion:function(){
        var url="/insurance/insuranceReactPageDataRequest.do";
        var params={
            reactPageName:'insurancePersonalCenterProblemPage',
            reactActionName:'getProblemList'
        };
        ProxyQ.queryHandle(
            'post',
            url,
            params,
            null,
            function(ob) {
                info=ob;

            }.bind(this),

            function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        );
    },

    render:function(){
        var container=null;
        if(this.state.data!==undefined&&this.state.data!==null) {
            if(this.state.nav!='consultationDetails') {
                var test = this.state.data;
                var data = this.paginationData(test, this.state.pageIndex);
                var trs = [];
                var ref = this;
                data.map(function (item, i) {
                    trs.push(
                        <ul className="item-list" key={i}>
                            <li className="item clearfix">
                                <div className="what">
                                    <h3 className="theme"> {item.title}</h3>

                                </div>
                                <div className="who">
                                    {item.perName}
                                </div>
                                <div className="when">
                                    {item.createTime.month+1 + "月" + item.createTime.date + "日"
                                    + item.createTime.hours + ":" + item.createTime.minutes}
                                </div>
                                <div className="details"
                                     onClick={ref.getQuestionContent.bind(this,item.themeId,item.title)}>
                                    <a href="javascript:void(0)"> 详情 </a>
                                </div>
                            </li>
                        </ul>
                    )
                });
            }

            switch (this.state.nav) {
                case undefined:
                    container =
                        <div>
                            <div className="detail">
                                <ul className="masthead clearfix">
                                    <li className="what">主题/问题</li>
                                    <li className="who">提问者</li>
                                    <li className="when">日期</li>
                                    <li className="details">详情</li>
                                </ul>
                                <div>
                                    {trs}
                                </div>
                                <Navigator
                                    capacity={this.state.data.length}
                                    pageCb={this.pageCb}
                                    paginate={Page}
                                    />
                            </div>
                        </div>
                    break;
                case 'consultationDetails':
                    container = <ConsultationDetails data={info} title={this.state.title}/>;
                    break;
                case 'newQuestion':
                    container =<NewQuestion  Branch={this.Branch}/>
                    break;
            }
        }else{

            this.initialData();
        }
        let  navbar;
        if(this.state.nav!='newQuestion') {
            navbar =
                <div className='search-area-wrapper'>
                    <div className='search-area '>
                        <h3 className='search-header'>Have a Question?</h3>

                        <p className='search-tag-line'>
                            If you have any question you can ask below or enter what you are looking for!</p>

                        <form className='search-form clearfix' method="get" action="#">
                            <input className='search-term required' type="text"
                                   placeholder="Type your search terms here"
                                   title="* Please enter a search term!"
                                   onChange={this.onSaveInput.bind(this)}
                                />
                            <input className='search-btn' value="Search"
                                   onClick={this.getLimitQuestion}/>

                            <div id="search-error-container"></div>
                            <div style={{width:'150%'}}>
                                <div className='row-50'
                                     style={{width:'37%',float:'left',paddingTop:'25px',border:'1px'}}>
                                    <div className='row-50' style={{float:'left',border:'1px ',  width:'50%' }}>
                                        <p style={{float:'left',paddingLeft:'31% ' }}>
                                            时间：
                                        </p>
                                        <Calendar data={'2016-11-10'} ctrlName={'consultation'}
                                                  callbackParent={this.onChildChanged.bind(this,'startDate')}/>
                                    </div>
                                    <div className='row-50' style={{float:'left',border:'1px ',  width:'50%' }}>
                                        <p style={{float:'left', marginLeft: '-6%' }}>
                                            起——至
                                        </p>
                                        <Calendar data={'2016-11-10'} ctrlName={'consultation'}
                                                  callbackParent={this.onChildChanged.bind(this,'endDate')}/>
                                    </div>
                                </div>
                                <div>
                                    <input className='search-new' value="NEW Question"
                                           onClick={this.goToOthers.bind(this,'newQuestion')}
                                        />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>;
        }

        return (
            <div className='Consultation' ref='consultation'>
                <div className='container' style={{position:'static',background:'#fff'}}>
                    <div className='row' style={{padding:'10px 10px 0px 10px'}}>
                        {navbar}
                    </div>
                </div>
                <div onLoad={this.getAllQuestion()}>
                {container}
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
                                    <span className='icon-right' onClick={this.validate} ><i className='icon-chevron-right'></i>
                                    </span>
                                </div>
                                <div className="form-options clearfix">
                                    <a className="pull-right" href="#">忘记密码了？</a>

                                    <div className="text-left">
                                        <span>自动登录</span>
                                        <input type="checkbox"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>);

    }
});


module.exports=Consultation;