import React from 'react';
import {render} from 'react-dom';
import '../../../css/insurancems/components/ProductCenter.css';

var ProxyQ = require('../../../components/proxy/ProxyQ');

var info={};
var ProductCenter=React.createClass({
    getInitialState: function() {
        return {
        }
    },
    initialData:function(){

        window.setTimeout(function () {

            this.setState({
                data: info
            })
        }.bind(this), 300);

    },
    onSaveInput:function(event){

        this.setState({value: event.target.value});

    },
    getCompanies:function(){
        var url="/insurance/insuranceReactPageDataRequest.do";
        var params={
            reactPageName:'insuranceProductCenterPage',
            reactActionName:'getInsuranceCompany'
        };
        ProxyQ.queryHandle(
            'post',
            url,
            params,
            null,
            function(ob) {
                info=ob.data;
            }.bind(this),

            function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        );
    },
    render:function() {
        if(this.state.data!==undefined&&this.state.data!==null) {
            var trs = [];
            var data=this.state.data;
            data.map(function (item, i) {
                trs.push(
                    <option value="null" key={i}>{item.companyName}</option>

                )
            });
        }else{
            this.initialData();
        }
        return(
    <div>

        <div className="banner">
            <div className="container" onLoad={this.getCompanies()}>
            <div className="col-md-8 banner-right">
            <div className="sap_tabs">
                <div className="booking-info">
                    <h2>Book Domestic  International Flight Tickets</h2>
                </div>
                <div id="horizontalTab" >
                    <div className="contain">
                        <div className="tab-container">
                            <input type="radio" name="name" value="" id="tab-btn-1" className="tab-radio" />
                            <label htmlFor="tab-btn-1" className="tab-lable">车险</label>

                            <input type="radio" name="name" value="" id="tab-btn-2" className="tab-radio"/>
                            <label htmlFor="tab-btn-2" className="tab-lable">寿险</label>
                        </div>
                    </div>
                    <div className="resp-tabs-container">
                        <div className="tab-1 resp-tab-content" >
                            <div className="facts">
                                <div className="booking-form">

                                    <div className="online_reservation">
                                        <div className="b_room">
                                            <div className="booking_room">
                                                <div className="reservation">
                                                    <ul>
                                                        <li  className="span1_of_1 desti">
                                                            <h5>产品名:</h5>
                                                            <div className="book_date">
                                                                <form>
                                                                    <input type="text" onChange={this.onSaveInput.bind(this)} className="typeahead1 input-md form-control tt-input" required=""/>
                                                                </form>
                                                            </div>
                                                        </li>

                                                        <div className="clearfix"></div>
                                                    </ul>
                                                </div>

                                                <div className="reservation">
                                                    <ul>
                                                        <li className="span1_of_1 left ">
                                                            <h5>公司选择:</h5>
                                                            <div className="section_room" >
                                                                <select id="country" onChange="change_country(this.value)" className="frm-field required">
                                                                    {trs}
                                                                </select>
                                                            </div>
                                                        </li>
                                                        <li className="span1_of_1 right "  >
                                                            <h5>险种类型:</h5>
                                                            <div className="section_room">
                                                                <select id="country" onChange="change_country(this.value)" className="frm-field required">
                                                                    <option value="null">1</option>
                                                                    <option value="null">2</option>
                                                                    <option value="AX">3</option>
                                                                    <option value="AX">4</option>
                                                                    <option value="AX">5</option>
                                                                    <option value="AX">6</option>
                                                                </select>
                                                            </div>
                                                        </li>
                                                        <div className="clearfix"></div>
                                                    </ul>
                                                </div>
                                                <div className="reservation">
                                                    <ul>
                                                        <li className="span1_of_3">
                                                            <div className="date_btn">
                                                                <form>
                                                                    <input type="submit" value="Search" />
                                                                </form>
                                                            </div>
                                                        </li>
                                                        <div className="clearfix"></div>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    </div>
</div>
        </div>



        <div className="banner-bottom">
            <div className="container">
                <div className="faqs-top-grids">
                    <div className="product-grids">
                        <div className="col-md-3 product-left">
                            <div className="h-class">
                                <h5>Hotel Class</h5>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="checkbox"/>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="starTextLabel">5 Stars (18)</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="checkbox"  data-track="HOT:SR:StarRating:5Star"/>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="starTextLabel">4 Stars (30)</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="checkbox"/>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="starTextLabel">3 Stars (106)</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="checkbox"/>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="starTextLabel">2 Stars (78)</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="checkbox"/>
                                        <span className="glyphicon glyphicon-star" ></span>
                                        <span className="starTextLabel">1 Stars (10)</span>
                                    </label>
                                </div>
                            </div>
                            <div className="h-class p-day">
                                <h5>Price per day</h5>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="checkbox"  data-track="HOT:SR:StarRating:5Star"/>
                                        <span className="p-day-grid">Less than $100 (76)</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="checkbox"/>
                                        <span className="p-day-grid">$100 to $200 (132)</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="checkbox"/>
                                        <span className="p-day-grid">$300 to $300 (223)</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="checkbox"/>
                                        <span className="p-day-grid">$300 to $400 (84)</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="checkbox"/>
                                        <span className="p-day-grid">$500 to $600 (23)</span>
                                    </label>
                                </div>
                            </div>
                            <div className="h-class">
                                <h5>Area</h5>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="radio" name="hideRegionId" data-track="HOT:SR:Area"/>
                                        <span className="p-day-grid">London</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="radio" name="hideRegionId"  data-track="HOT:SR:Area"/>
                                        <span className="p-day-grid">Newyork</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="radio" name="hideRegionId"  data-track="HOT:SR:Area"/>
                                        <span className="p-day-grid">New Zealand</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="radio" name="hideRegionId"  data-track="HOT:SR:Area"/>
                                        <span className="p-day-grid">Los Angeles</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="radio" name="hideRegionId"  data-track="HOT:SR:Area"/>
                                        <span className="p-day-grid">Sydney</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="radio" name="hideRegionId"  data-track="HOT:SR:Area"/>
                                        <span className="p-day-grid">Agra</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="radio" name="hideRegionId"  data-track="HOT:SR:Area"/>
                                        <span className="p-day-grid">Greece</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="radio" name="hideRegionId"  data-track="HOT:SR:Area"/>
                                        <span className="p-day-grid">Singapore</span>
                                    </label>
                                </div>
                                <div className="hotel-price">
                                    <label className="check">
                                        <input type="radio" name="hideRegionId"  data-track="HOT:SR:Area"/>
                                        <span className="p-day-grid">Paris</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 product-right">

                            <div className="container">

                                <div className="basic">
                                    <div className="business">
                                        <h2>国华康运一生重大疾病保险</h2>
                                        <p>国华保险公司</p>
                                    </div>
                                    <div className="value">
                                        <p>19,99$</p>
                                    </div>
                                    <ul>
                                        <li><span>2-10年</span> 缴费期</li>
                                        <li><span>5-50万</span> 保险金</li>
                                        <li><span>5000</span> 推荐度</li>
                                    </ul>
                                    <div className="buy-me">
                                        <a href="#">了解</a>
                                    </div>
                                </div>
                                <div className="basic">
                                    <div className="business">
                                        <h2>Basic</h2>
                                        <p>Best for small business</p>
                                    </div>
                                    <div className="value">
                                        <p>19,99$</p>
                                    </div>
                                    <ul>
                                        <li><span>50</span> Projects</li>
                                        <li><span>20</span> Files</li>
                                        <li><span>Full</span> Support</li>
                                        <li className="gd"><span>24h</span> Ready</li>
                                    </ul>
                                    <div className="buy-me">
                                        <a href="#">Buy Me</a>
                                    </div>
                                </div>
                                <div className="basic">
                                    <div className="business">
                                        <h2>Basic</h2>
                                        <p>Best for small business</p>
                                    </div>
                                    <div className="value">
                                        <p>19,99$</p>
                                    </div>
                                    <ul>
                                        <li><span>50</span> Projects</li>
                                        <li><span>20</span> Files</li>
                                        <li><span>Full</span> Support</li>
                                        <li className="gd"><span>24h</span> Ready</li>
                                    </ul>
                                    <div className="buy-me">
                                        <a href="#">Buy Me</a>
                                    </div>
                                </div>
                                <div className="basic">
                                    <div className="business">
                                        <h2>Basic</h2>
                                        <p>Best for small business</p>
                                    </div>
                                    <div className="value">
                                        <p>19,99$</p>
                                    </div>
                                    <ul>
                                        <li><span>50</span> Projects</li>
                                        <li><span>20</span> Files</li>
                                        <li><span>Full</span> Support</li>
                                        <li className="gd"><span>24h</span> Ready</li>
                                    </ul>
                                    <div className="buy-me">
                                        <a href="#">Buy Me</a>
                                    </div>
                                </div>



                            </div>

                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>


            </div>
        </div>


    </div>
        );
    }
});
module.exports=ProductCenter;