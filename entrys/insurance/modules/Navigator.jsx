/**
 * Created by dell on 2016/10/27.
 */
import React from 'react';
import {render} from 'react-dom';
import '../../../css/insurancems/components/Business.css';

var ProxyQ = require('../../../components/proxy/ProxyQ');

var Navigator=React.createClass({
    previousCb:function () {

    },
    nextCb:function(){

    },
    pageCb:function(index){
        //调用方提供的分页实现
        this.props.pageCb(index);
        this.setState({pageIndex: index});
    },
    getInitialState:function(){

        let capacity=null;
        if(this.props.capacity!==undefined&&this.props.capacity!==null)
            capacity=this.props.capacity;
        let threshold=8;
        if(this.props.threshold!==undefined&&this.props.threshold!==null)
            threshold=this.prosp.threshold;
        let pageIndex=0;
        if(this.props.pageIndex!==undefined&&this.props.pageIndex!==null)
            pageIndex=this.props.pageIndex;
        //TODO:calculate begin and end
        let begin=0;
        let end=0;
        //一次显示8个page按钮
        let pageCategory=8;
        if(this.props.pageCategory!==undefined&&this.props.pageCategory!==null)
            pageCategory=this.props.pageCategory;
        let pageEnd=null;
        if(capacity!=null)
        {
            let begin=pageIndex*threshold;
            let end=begin;
            for(let i=0;i<threshold;i++)
            {
                if(end>=capacity)
                    break;
                end++;
            }
            let pageIntegral=capacity/threshold;
            let pageRemainder=capacity%threshold;
            if(pageRemainder==0)
                pageEnd=pageIntegral-1;
            else
                pageEnd=pageIntegral;
        }

        return ({capacity:capacity,threshold:threshold,pageCategory:pageCategory,pageIndex:pageIndex,
            begin:begin,end:end,pageEnd:pageEnd});
    },
    render:function(){

        let navigator=null;
        if(this.state.begin!==undefined&&this.state.begin!==null&&this.state.end!==undefined&&this.state.end!==null)
        {
            let lis=[];
            lis.push(<li key={-1}><a onClick={this.previousCb}>&laquo;</a></li>);
            for(let i=this.state.pageIndex;i<=this.state.pageEnd;i++)
            {
                lis.push(<li key={i}><a onClick={this.pageCb.bind(this,i)}>{i+1}</a></li>);
            }
            lis.push(<li key={-2}><a onClick={this.nextCb}>&raquo;</a></li>);
           navigator=
               <ul className="pagination">
                   {lis}
               </ul>;
        }else{
        }


        return (
            <div className='Navigator' ref='navigator'>
                <div className='container' style={{position:'static',background:'#fff'}}>
                    <div className='row pagination' style={{padding:'10px 10px 0px 10px'}}>
                        {navigator}
                    </div>
                </div>
            </div>);
    },
    componentDidMount:function(){

    }
});
module.exports=Navigator;
