import React, { Component } from 'react';
import {MSG_ADD_TO_CART_SUCCESS} from './../../constance/Messages';
export default class ProductItem extends Component {
    
    render() {
        var {product} = this.props;
        return (
            <>
                <div className="col-lg-4 col-md-6 mb-r">
                    <div className="card text-center card-cascade narrower">
                        <div className="view overlay hm-white-slight z-depth-1">
                            <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72" className="img-fluid" alt="Image1" />
                            <a href='/'>
                                <div className="mask waves-light waves-effect waves-light" />
                            </a>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">
                                <strong>
                                    <a href='/'>{product.name}</a>
                                </strong>
                            </h4>
                            <ul className="rating">
                                <li>
                                    {this.showRating(product.rate)}
                                </li>
                            </ul>
                            <p className="card-text">
                                {product.desc}
                                    </p>
                            <div className="card-footer">
                                <span className="left">{product.price}$</span>
                                <span  className="right">
                                    <a href="/" 
                                    onClick = {(event) => this.onAddToCart(event,product)}
                                    className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="Add to cart" data-original-title="Add to Cart">
                                        <i className="fa fa-shopping-cart" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    onAddToCart = (event,product) => {
        event.preventDefault();
        this.props.onChangeMessage(MSG_ADD_TO_CART_SUCCESS);
        this.props.onAddToCart(product);
    }

    showRating = (rate) => {
        var result = [];
        for(var i = 0; i< rate; i++){
            result.push(<i key={i} className='fa fa-star'></i>)
        }
        for(var j = 0; j<(5-rate) ; j++){
            result.push(<i key={j+i} className='fa fa-star-o'></i>);
        }
        return result;
    }
}
