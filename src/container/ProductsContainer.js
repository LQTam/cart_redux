import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProductList from '../components/products/ProductList';
import PropTypes from 'prop-types';
import ProductItem from '../components/products/ProductItem';
import { addToCart, changeMessage } from '../actions/Actions';



class ProductsContainer extends Component {
    render() {
        var {products} = this.props;
        return <ProductList>
            {this.showProducts(products)}
        </ProductList>
    }

    showProducts = (product) => {
        var result = null;
        var {onAddToCart,onChangeMessage} = this.props;
        if(product.length > 0){
            result = product.map((value, key) => {
                return <ProductItem product = {value}
                 key = {key}
                  index = {key}
                  onAddToCart = {onAddToCart}
                  onChangeMessage = {onChangeMessage}
                  />
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                img : PropTypes.string.isRequired,
                desc: PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                inventory : PropTypes.number.isRequired,
                rate : PropTypes.number.isRequired,
        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        products : state.product
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddToCart : (product) => {
            dispatch(addToCart(product,1));
        },
        onChangeMessage : (message) => {
            dispatch(changeMessage(message));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)
