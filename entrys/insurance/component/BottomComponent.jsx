/**
 * Created by douxiaobin on 2016/10/27.
 */
import React from 'react';
import {render} from 'react-dom';
import '../../../css/homePage/homepage.css';

var BottOmComponent=React.createClass({
    onClick:function(ob){

    },
    render:function(){

        return(
            <div className="bottomMain"
                style={{background:'url('+App.getResourceDeployPrefix()+'/images/footer.png) no-repeat',backgroundSize:'100%'}}>
                <p className="bottom" style={{color:'#fff',marginTop:'20px'}}>
                    国际中医现代非药物疗法协会
                </p>
            </div>
        );
    }
});
module.exports=BottOmComponent;
/**
 * Created by douxiaobin on 2016/10/27.
 */
