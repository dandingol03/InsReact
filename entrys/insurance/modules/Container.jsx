/**
 * Created by dell on 2016/10/27.
 */
import React from 'react';
import {render} from 'react-dom';
import TopComponent from '../component/TopComponent.jsx';
import BottOmComponent from '../component/BottomComponent.jsx';
import MainPage from '../modules/MainPage.jsx';
import Business from '../modules/Business.jsx';


/**
 * 1.get into business part,should login first
 */


var Container=React.createClass({
    splitIntoBranch:function(branch){
        this.setState({nav: branch});
    },
    onMainPageEnter:function(){
        this.setState({nav: 'main'});
    },
    getInitialState:function(){
        return {nav: 'home'};
    },
    render:function(){

        var container=null;
        switch (this.state.nav) {
            case 'home':
                container=
                    <div className='container'>
                        <div className="container" >
                            <TopComponent onMainPageEnter={this.onMainPageEnter}/>
                        </div>
                        <div className="footer">
                            <BottOmComponent />
                        </div>
                    </div>;
                break;
            case 'main':
                container=<MainPage splitIntoBranch={this.splitIntoBranch}/>;
                break;
            case 'business':
                container=<Business/>;
                break;
            default :
                container=<div className='container'></div>;
                break;
        }

        return container;
    }
});
module.exports=Container;
