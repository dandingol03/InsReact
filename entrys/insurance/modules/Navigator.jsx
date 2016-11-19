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

        let pageIndex=0;
        if(this.props.pageIndex!==undefined&&this.props.pageIndex!==null)
            pageIndex=this.props.pageIndex;
        let paginate=null;
        if(this.props.paginate!==undefined&&this.props.paginate!==null)
            paginate=this.props.paginate;

        let pageBegin=0;
        let pageEnd=0;
        let pageMax=0;

        //一次显示8个page按钮
        let pageCategory=8;
        if(this.props.pageCategory!==undefined&&this.props.pageCategory!==null)
            pageCategory=this.props.pageCategory;

        if(capacity!=null)
        {
            pageEnd=pageBegin;
            let pageIntegral=parseInt(capacity/paginate.threshold);
            let pageRemainder=capacity%paginate.threshold;
            if(pageRemainder==0)
                pageMax=pageIntegral-1;
            else
                pageMax=pageIntegral;
            for(let i=0;i<pageCategory;i++)
            {
                if(pageEnd>=pageMax)
                    break;
                pageEnd++;
            }
        }

        return ({capacity:capacity,pageCategory:pageCategory,pageIndex:pageIndex,
            pageBegin:pageBegin,pageEnd:pageEnd,pageMax:pageMax,paginate:paginate});

    },
    render:function(){

        let navigator=null;

        if(this.state.pageBegin!==undefined&&this.state.pageBegin!==null&&this.state.pageEnd!==undefined&&this.state.pageEnd!==null)
        {
            let lis=[];
            lis.push(<li key={-1}><a onClick={this.previousCb}>&laquo;</a></li>);
            for(let i=this.state.pageBegin;i<=this.state.pageEnd;i++)

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
