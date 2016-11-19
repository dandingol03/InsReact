import React from 'react';
import {render} from 'react-dom';
import '../../../css/insurancems/components/NewQuestion.css';
import Consultation from '../modules/Consultation.jsx';
var ProxyQ = require('../../../components/proxy/ProxyQ');

var NewQuestion=React.createClass({

    getInitialState: function() {
        return {

           nav:'main'


        }
    },
    onSaveInput:function(event){

            this.setState({theme: event.target.value});

    },
    saveOrUpdateQuestion:function(){
        var url="/insurance/insuranceReactPageDataRequest.do";
        var params={
            reactPageName:'insurancePersonalCenterProblemPage',
            reactActionName:'saveOrUpdateInsuranceProblem',
            theme:this.state.theme
        };
        ProxyQ.queryHandle(
            'post',
            url,
            params,
            null,
            function(ob) {
                if(ob.data=='success'){
                    var successModal = this.refs['successModal'];
                    $(successModal).modal('show');
                }else{

                }

            }.bind(this),

            function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        );
    },
    setNav: function() {

            this.setState({nav: 'consultation'});

    },
    Branch:function(url) {

        //if (this.state.session != true) {
        //    var loginModal = this.refs['loginModal'];
        //    $(loginModal).modal('show');
        //} else {
        if(this.props.Branch!==undefined&&this.props.Branch!==null)
        {
            this.props.Branch(url);
        }
        //}

    },

    render:function() {
        var container=null;

                switch (this.state.nav) {
                    case 'main':
                        container=
                            <div>
                                <div className='search-area-wrapper'>
                                    <div className='search-area '>
                                        <h3 className='search-header'>Create a Question</h3>

                                        <p className='search-tag-line'>
                                            If you have any question you can write down and waiting for answer!
                                        </p>
                                    </div>
                                </div>
                                <div className="page-container">
                                    <div className="container">
                                        <div className="row">
                                            <div className="span8 page-content">
                                                <article className="type-page hentry clearfix">
                                                    <h1 className="post-title">
                                                        <a href="#">Contact</a>
                                                    </h1>
                                                    <hr></hr>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                                </article>
                                                <form  className="row"  method="post">
                                                    <div className="span2">
                                                        <label >问题/主题内容:<span>*</span> </label>
                                                    </div>
                                                    <div className="span6">
                                                        <textarea onChange={this.onSaveInput.bind(this)} name="message"  className="required span6" rows="6" title="* Please enter your message"></textarea>
                                                    </div>
                                                    <div className="span6 offset2 bm30">
                                                        <input onClick={this.saveOrUpdateQuestion}  value="Send Message" className="btn btn-inverse"/>
                                                    </div>
                                                    <div className="span6 offset2 error-container"></div>
                                                    <div className="span8 offset2" ></div>
                                                </form>
                                            </div>
                                            <aside className="span4 page-sidebar">
                                                <section className="widget">
                                                    <div className="support-widget">
                                                        <h3 className="title">Support</h3>
                                                        <p className="intro">Need more support? If you did not found an answer, contact us for further help.</p>
                                                    </div>
                                                </section>
                                            </aside>
                                        </div>
                                    </div>
                                </div>



                                <div className="modal fade bs-example-modal-sm login-container"
                                     tabIndex="-1"
                                     role="dialog"
                                     aria-labelledby="myLargeModalLabel"
                                     aria-hidden="true"
                                     ref='successModal'
                                    >
                                    <div className="modal-dialog modal-sm" style={{position:'absolute',top:'30%',width:'50%',marginLeft:'25%'}}>
                                        <div className="modal-content" style={{position:'relative',width:'100%',padding:'40px'}}>

                                            <div className="modal-body">
                                                <div className="form-group" style={{position:'relative'}}>
                                                    <div>{'问题已经提交，请耐心等待客服人员解答！'}</div>
                                    <span className='icon-right' onClick={this.Branch.bind(this,'consultation')} ><i className='icon-chevron-right'></i>
                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>;
                        break;
                    case'consultation':
                        break;
                    default :
                        break;
                }
        return container;

    }
});
module.exports=NewQuestion;