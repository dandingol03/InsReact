/**
 * Created by dell on 2016/10/27.
 */
import React from 'react';
import {render} from 'react-dom';
import '../../../css/insurancems/components/Business.css';


var Business=React.createClass({
    initialData:function(){
        window.setTimeout(
            function(){
                let data={
                    title:'车险订单',
                    orders:[]
                };
                this.setState({data: data});
            }.bind(this)
            ,300);
    },
    getInitialState:function(){
        return ({current: 'carOrder',data:null});
    },
    render:function(){


        let mainContent=null;

        if(this.state.data!==undefined&&this.state.data!==null)
        {
            let data=this.state.data;
            mainContent=
                <div className='container' style={{position:'static'}}>
                    <div className='row' style={{padding:'10px'}}>
                        <div className='main-content'>
                            <div className="page-title">
                                <h1>
                                    {data.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row invoice">
                        <div className="col-md-6">
                            <div className="well">
                                <strong>我的信息</strong>
                                <h3>
                                    唐琬.
                                </h3>
                                <p>
                                    民主西路1899号10楼<br/>城关区<br/>甘肃省兰州市<br/>0931-1234567<br/>johnsmith@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="well">
                                <strong>卖家信息</strong>
                                <h3>
                                    苏雪林
                                </h3>
                                <p>
                                    科技二路副66号万汇企业B座2楼<br/>高新区<br/>陕西省西安市<br/>029-88196870<br/>sharpandnimble@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-lg-12">
                            <div className="widget-container fluid-height">
                                <div className="widget-content padded clearfix">
                                    <table className="table table-striped invoice-table">
                                        <thead>
                                        <tr>
                                            <th width="50">
                                                订单号
                                            </th>
                                            <th>
                                                产品
                                            </th>
                                            <th>
                                                时间
                                            </th>
                                            <th width="100">
                                                保费
                                            </th>
                                        </tr></thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                C201610260001
                                            </td>
                                            <td>
                                                第三者责任险
                                            </td>
                                            <td>
                                                2016-11-02
                                            </td>
                                            <td>
                                                ¥100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                C201610260002
                                            </td>
                                            <td>
                                               xxx险
                                            </td>
                                            <td>
                                                2016-11-03
                                            </td>
                                            <td>
                                                ¥100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                C201610260003
                                            </td>
                                            <td>
                                                xxx险
                                            </td>
                                            <td>
                                                2016-11-04
                                            </td>
                                            <td>
                                                ¥100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                C201610260004
                                            </td>
                                            <td>
                                                xxx险
                                            </td>
                                            <td>
                                                2016-11-06
                                            </td>
                                            <td>
                                                ¥100
                                            </td>
                                        </tr>
                                        </tbody>
                                        <tfoot>

                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{height:'60px'}}>
                        <div className="col-lg-12"></div>
                    </div>

                </div>;
        }else{
            //初始化内容详情
            this.initialData();
        }

        let navbar=
            <div className="nav-collapse">
                <ul className="nav">
                    <li className='dropdown'>
                        <a href='#' data-toggle="dropdown" className='current'>
                             <span aria-hidden="true" >
                                <i className='icon-home'></i>
                            </span>控制台<b className="caret"></b>
                        </a>

                        <ul className="dropdown-menu">
                            <li><a href="chat.html">
                                <span className="notifications label label-warning">新</span>
                                <p>
                                    聊天窗口
                                </p></a>
                            </li>
                            <li>
                                <a href="calendar.html">日历</a>
                            </li>
                            <li><a href="timeline.html">
                                <span className="notifications label label-warning">新</span>
                                <p>
                                    时间轴
                                </p></a>

                            </li>
                            <li><a href="login1.html">
                                <span className="notifications label label-warning">新</span>
                                <p>
                                    登录(1)
                                </p></a>

                            </li>
                            <li>
                                <a href="login2.html">登录(2)</a>
                            </li>
                            <li><a href="signup1.html">
                                <span className="notifications label label-warning">新</span>
                                <p>
                                    注册(1)
                                </p></a>

                            </li>
                            <li>
                                <a href="signup2.html">注册(2)</a>
                            </li>
                            <li><a className="current" href="invoice.html">
                                <span className="notifications label label-warning">新</span>
                                <p>
                                    订单
                                </p></a>

                            </li>
                            <li><a href="faq.html">
                                <span className="notifications label label-warning">新</span>
                                <p>
                                    FAQ
                                </p></a>

                            </li>
                            <li>
                                <a href="filters.html">筛选结果</a>
                            </li>
                            <li>
                                <a href="404-page.html">404页面</a>
                            </li>
                        </ul>

                    </li>

                    <li>
                        <a href="javascript:void(0)" className='current'>
                            <span aria-hidden="true" >
                                <i className='icon-credit-card'></i>
                            </span>积分
                        </a>
                    </li>

                    <li className="dropdown">
                        <a data-toggle="dropdown" href="#" className="current">
                            <span aria-hidden="true" >
                                <i className=' icon-github-alt'></i>
                            </span>车险<b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="javascript:void(0)" className="current">
                                    历史订单
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">购买车险</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">估价列表</a>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a data-toggle="dropdown" href="#">
                            <span aria-hidden="true" >
                                <i className='icon-coffee'></i>
                            </span>寿险<b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="javascript:void(0)">
                                    历史订单
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    购买寿险
                                </a>
                            </li>
                            <li>
                                <a href="javscript:void(0)">
                                    估价列表
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a data-toggle="dropdown" href="#">
                            <span aria-hidden="true" >
                                <i className='icon-list-ul'></i>
                            </span>服务<b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="buttons.html">按钮</a>
                            </li>
                            <li>
                                <a href="components.html">组件</a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>;


        return (
            <div className='Business' ref='business'>
                <div className='container' style={{position:'static',background:'#fff'}}>
                    <div className='row' style={{padding:'10px 10px 0px 10px'}}>
                        {navbar}
                    </div>
                </div>
                {mainContent}
            </div>);
    },
    componentDidMount:function(){

    }
});
module.exports=Business;
