import React, { Component } from 'react'
import {MSG_UPDATE_CART_SUCCESS, MSG_DELETE_PRODUCT_IN_CART_SUCCESS} from './../../constance/Messages';
export default class CartItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantity : 1
    }
  }

  render() {
    var {cartItem} = this.props;
    var {quantity} = cartItem.quantity > 0 ? cartItem : this.state;
    return (
      <>
        <tr>
          <th scope="row">
            <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72" alt="Image1" className="img-fluid z-depth-0" />
          </th>
          <td>
            <h5>
              <strong>{cartItem.product.name}</strong>
            </h5>
          </td>
          <td>{cartItem.product.price}$</td>
          <td className="center-on-small-only">
            <span className="qty">{quantity}</span>
            <div className="btn-group radio-group" data-toggle="buttons">
              <label onClick = {() => this.onUpdateQuantity(cartItem.product,cartItem.quantity - 1)} 
              className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light">
                <a href="/">—</a>
              </label>
              <label onClick = {() => this.onUpdateQuantity(cartItem.product,cartItem.quantity + 1)} 
              className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light">
                <a href="/">+</a>
              </label>
            </div>
          </td>
          <td>{cartItem.product.price * cartItem.quantity}$</td>
          <td>
            <button onClick = {() => this.onDeleteCart(cartItem)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="title1" data-original-title="Remove item">
              X
            </button>
          </td>
        </tr>
        
      </>
    )
  }

  onDeleteCart = (cart) => {
    this.props.onChangeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    this.props.onDeleteCart(cart);
  }

  onUpdateQuantity = (product,quantity) => {
    if(quantity > 0){
      this.setState({quantity : quantity});
    }
    this.props.onChangeMessage(MSG_UPDATE_CART_SUCCESS);
    this.props.onUpdateProductInCart(product,quantity);
  }
}
