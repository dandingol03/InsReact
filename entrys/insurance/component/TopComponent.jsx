/**
 * Created by dell on 2016/10/27.
 */
import React from 'react';
import {render} from 'react-dom';
import '../../../css/insurancems/components/TopComponent.css';


var TopComponent=React.createClass({

    getInitialState:function(){
        return {isEnterMainPage:false}
    },
    onClick:function(ob){
        if(this.props.onMainPageEnter!==undefined&&this.props.onMainPageEnter!==null)
            this.props.onMainPageEnter();
        this.setState({isEnterMainPage:true});
    },

    render:function(){

            return(
                <div className="topAndCenter">
                    <div className="topMain" style={{position:'relative'}}>
                        <span style={{display:'inline-block'}}>
                             <h2>山东泓信信息股份有限公司</h2>
                        </span>
                        <div
                            className='enterHomePage'
                            style={{display: 'inline-block',height: '100%',position: 'absolute',right: '10%',top: '30%'}}>
                            <img src={App.getResourceDeployPrefix()+"/images/enterHomePage.png"} style={{maxHeight:'23px'}}/>
                            <span style={{fontSize:'1.4em',verticalAlign:'middle'}} onClick={this.onClick}>
                                进入首页
                            </span>
                        </div>
                    </div>
                    <div style={{width:'100%',minHeight:'400px',position:'relative'}}>
                        <div className='grid' style={{right: '10%',position: 'absolute',top: '70%'}}>
                            <ul style={{listStyle:'none'}}>
                                <li style={{float:'left',marginRight:'20px'}}>
                               <span style={{display:'block',marginBottom:'20px'}}>
                                   <img src={App.getResourceDeployPrefix()+"/images/iosQRCode.jpg"} />
                               </span>
                                    <div style={{textAlign:'center'}}>
                                        <a
                                            type="button"
                                            className=""
                                            href={App.getDownloadDeployDeployPrefix() + "/downloads/android-release-unaligned.apk"}
                                            style={{width:'100%',fontSize:'18px'}}
                                            >iPhone 下载
                                        </a>
                                    </div>
                                </li>

                                <li style={{float:'left'}}>
                                 <span style={{display:'block',marginBottom:'20px'}}>
                                     <img src={App.getResourceDeployPrefix()+"/images/androidQRCode.jpg" }/>
                                 </span>
                                    <div style={{textAlign:'center'}}>
                                        <a
                                            type="button"
                                            className=""
                                            href={App.getDownloadDeployDeployPrefix() + "/downloads/android-release-unaligned.apk"}
                                            style={{width:'100%',fontSize:'18px'}}
                                            > Android 下载
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            );

    }
});
module.exports=TopComponent;
