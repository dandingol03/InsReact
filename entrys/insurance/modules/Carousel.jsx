/**
 * Created by dell on 2016/10/27.
 */
import React from 'react';
import {render} from 'react-dom';
import '../../../css/insurancems/components/Carousel.css';


var Carousel=React.createClass({
    render:function(){

        return (
            <div className='carousel' ref='carousel'>
                <div className="nivoSlider theme-default">
                    <img src="images/carousel-1.jpg" alt="" data-transition="slideInLeft" />
                    <img src="images/carousel-2.jpg" alt="" data-transition="slideInLeft" />
                </div>
            </div>);
    },
    componentDidMount:function(){
        var carousel = this.refs['carousel'];

        $(carousel).find('.nivoSlider').nivoSlider(
            {
                controlNav:false
            }
        );
    }
});
module.exports=Carousel;
