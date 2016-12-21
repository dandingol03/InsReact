import React from 'react';
import {render} from 'react-dom';

var ProxyQ = require('../../../components/proxy/ProxyQ');

var LifeInsuranceDetail=React.createClass({
    render:function(){

        return(
            <div className="basic" style={{width:'98%'}}>
                <div className="business">
                    <h2>产品介绍</h2>
                </div>
                <div className="value">
                    <p>推荐星级:</p>
                    <label className="check" style={{paddingLeft:'0px'}}>
                        <span className="glyphicon glyphicon-star" ></span>
                        <span className="glyphicon glyphicon-star" ></span>
                        <span className="glyphicon glyphicon-star" ></span>
                        <span className="glyphicon glyphicon-star" ></span>
                        <span className="glyphicon glyphicon-star" ></span>
                    </label>
                </div>
                <ul style={{height: 'auto'}}>

                </ul>
                <div className="buy-me">
                    <a href="#">return</a>
                </div>
            </div>
        );
    }

});
module.exports=LifeInsuranceDetail;