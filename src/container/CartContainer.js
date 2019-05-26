import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/cart/Cart';
import * as Messages from './../constance/Messages'
import CartItem from '../components/cart/CartItem';
import CartTotal from '../components/cart/CartTotal';
import { deleteCart, updateProduct, changeMessage } from '../actions/Actions';


class CartContainer extends Component {
    render() {
        var {cart} = this.props;
        return (
            <>
                <Cart >
                    {this.showCartItem(cart)}
                    {this.showTotalCart(cart)}
                </Cart>
            </>
        )
    }

    showCartItem = (cart) => {
        var {onUpdateProductInCart,onDeleteCart, onChangeMessage} = this.props;
        var result = 
            <tr>
                <td>{Messages.MSG_CART_EMPTY}</td>
            </tr>;
        if(cart.length > 0){
            result = cart.map((cart,index) => {
                return <CartItem key = {index}
                 cartItem = {cart} 
                 index = {index}
                 onUpdateProductInCart = {onUpdateProductInCart}
                 onDeleteCart = {onDeleteCart}
                 onChangeMessage = {onChangeMessage}
                 />
            })
        }
        return result;
    }

    showTotalCart = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartTotal cart = {cart} />
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        //state.(name of reducer)
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onDeleteCart : (cart) => {
            dispatch(deleteCart(cart));
        },
        onUpdateProductInCart : (product,quantity) => {
            dispatch(updateProduct(product,quantity));
        },
        onChangeMessage : (message) => {
            dispatch(changeMessage(message));
        }
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                img : PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
    onDeleteCart : PropTypes.func.isRequired,
    onUpdateProductInCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)

