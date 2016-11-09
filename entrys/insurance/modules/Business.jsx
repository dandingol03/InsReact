/**
 * Created by dell on 2016/10/27.
 */
import React from 'react';
import {render} from 'react-dom';
import '../../../css/insurancems/components/Business.css';


var ProxyQ = require('../../../components/proxy/ProxyQ');
var Page = require('../../../components/page/Page');
import Navigator from './Navigator';




var Business=React.createClass({
    paginationData:function (data,pageIndex) {
        let capacity=data.length;
        var slices=null;
        Page.getInitialDataIndex(capacity,pageIndex,function(ob){
             slices=data.slice(ob.begin,ob.end);
        });
        return slices;
    },
    pageCb:function(index){
        this.setState({pageIndex: index});
    },
    initialData:function(){


        //remote data
        // var url="/insurance/insuranceReactPageDataRequest.do";
        // var params={
        //     reactPageName:'insurancePersonalCenterCarOrderPage',
        //     reactActionName:'getInsuranceCarOrder'
        // };
        // ProxyQ.queryHandle(
        //     'post',
        //     url,
        //     params,
        //     null,
        //     function(ob) {
        //         var data=ob.data;
        //         this.setState({data: data});
        //     }.bind(this),
        //
        //     function(xhr, status, err) {
        //         console.error(this.props.url, status, err.toString());
        //     }.bind(this)
        // );

        //local data
        window.setTimeout(function () {
            this.setState({data:[
                {orderNum:1,applyTime:'2016-10-05',product:'xxx险',insuranceFee:'$100'},
                {orderNum:2,applyTime:'2016-10-06',product:'xxx险',insuranceFee:'$100'},
                {orderNum:3,applyTime:'2016-10-07',product:'xxx险',insuranceFee:'$100'},
                {orderNum:4,applyTime:'2016-10-08',product:'xxx险',insuranceFee:'$100'},
                {orderNum:5,applyTime:'2016-10-09',product:'xxx险',insuranceFee:'$100'},
                {orderNum:6,applyTime:'2016-10-10',product:'xxx险',insuranceFee:'$100'},
                {orderNum:7,applyTime:'2016-10-11',product:'xxx险',insuranceFee:'$100'},
                {orderNum:8,applyTime:'2016-10-12',product:'xxx险',insuranceFee:'$100'},
                {orderNum:9,applyTime:'2016-10-13',product:'xxx险',insuranceFee:'$100'},
                {orderNum:10,applyTime:'2016-10-14',product:'xxx险',insuranceFee:'$100'},
                {orderNum:11,applyTime:'2016-10-15',product:'xxx险',insuranceFee:'$100'},
                {orderNum:12,applyTime:'2016-10-16',product:'xxx险',insuranceFee:'$100'},
                {orderNum:13,applyTime:'2016-10-17',product:'xxx险',insuranceFee:'$100'},
                {orderNum:14,applyTime:'2016-10-18',product:'xxx险',insuranceFee:'$100'}
                ]})
        }.bind(this), 300);


    },
    getInitialState:function(){
        return ({current: 'carOrder',data:null,pageIndex:0});
    },
    render:function(){


        let mainContent=null;

        if(this.state.data!==undefined&&this.state.data!==null&&this.state.data.length>0)
        {
            var data=this.paginationData(this.state.data,this.state.pageIndex);


            let orders=[];
            let trs=[];
            data.map(function (order, i) {
                orders.push({orderNum: order.orderNum});
                trs.push(
                    <tr key={i}>
                        <td>
                            {order.orderNum}
                        </td>
                        <td>
                            {order.product}
                        </td>
                        <td>
                            {order.applyTime}
                        </td>
                        <td>
                            {order.insuranceFee}
                        </td>
                    </tr>
                );
            });





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
                                            <th width="100">
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
                                        {trs}
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan={4}>
                                                <Navigator
                                                    capacity={20}
                                                    pageCb={this.pageCb}
                                                    paginate={Page}
                                                />
                                            </td>
                                        </tr>

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
