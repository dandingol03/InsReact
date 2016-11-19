import React from 'react';
import {render} from 'react-dom';
import '../../../css/insurancems/components/ConsultationDetails.css';

import Calendar from './Calendar.jsx';
var data=null;
var title=null;
var ConsultationDetails=React.createClass({
    getInitialState  : function () {
        data = this.props.data;
        title=this.props.title;
        return ({data: data,
            title:title
        });
    },
    render:function(){
        var contents=data.data;
        var trs=[];
        contents.map(function (item, i) {
            if(item.contentType==1){
                trs.push(
                    <dl className="faqs" key={i}>
                        <dt>{item.content}</dt>
                    </dl>
                )
            }else{
                trs.push(
                    <dl className="faqs" key={i}>
                        <dd>{item.content}
                        </dd>
                    </dl>
                )
            }

        });
        return(
    <div>
        <div className="page-container">
            <div className="container">
                <div className="row">
                    <div className="span8 page-content">

                        <ul className="breadcrumb">
                            <li><a href="#">Knowledge Base Theme</a><span className="divider">/</span></li>
                            <li><a href="#" title="View all posts in Server &amp; Database">Server &amp; Database</a>
                                <span className="divider">/</span>
                            </li>
                            <li className="active">Integrating WordPress with Your Website</li>
                        </ul>
                        <article className=" type-post format-standard hentry clearfix">

                            <h1 className="post-title"><a href="#">Integrating WordPress with Your Website</a></h1>

                            <div className="post-meta clearfix">
                                <span className="icon-calendar">25 Feb, 2013</span>
                                <span className="icon-tag">
                                    <a href="#" title="View all posts in Server &amp; Database">Server &amp; Database</a>
                                </span>
                                <span className="icon-comment">
                                    <a href="#" title="Comment on Integrating WordPress with Your Website">
                                        3 Comments
                                    </a>
                                </span>
                            </div>
                        </article>
                        <div>
                            <dl className="faqs" >
                                <dt>{this.state.title}</dt>
                            </dl>
                            {trs}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )


    },


});
module.exports=ConsultationDetails;