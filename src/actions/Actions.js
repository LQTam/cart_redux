import * as types from './../constance/ActionTypes';

export const listAll = () => {
    return {
        type : types.LIST_ALL,
    }
}

export const addToCart = (product,quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const deleteCart = (product) => {
    return {
        type : types.DELETE_CART,
        product
    }
}

export const updateProduct = (product,quantity) => {
    return {
        type: types.UPDATE_PRODUCT,
        product,
        quantity
    }
}

export const changeMessage = (message) =>{
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}