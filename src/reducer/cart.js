import * as types from './../constance/ActionTypes';

var data = JSON.parse(localStorage.getItem("cart"));
var initState = data ? data : [];

const cart = (state = initState, action) => {
    var index = -1;
    var { product, quantity } = action;
    switch (action.type) {
        case types.ADD_TO_CART: {
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += 1;
            }
            else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        }
        case types.DELETE_CART: {
            var newCart = state.filter((item) => item.product.id !== product.product.id);
            state = newCart;
            localStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        }

        case types.UPDATE_PRODUCT: {
            index = findProductInCart(state, product);
                if (index !== -1) {
                    state[index].quantity = quantity;
                }
                if(state[index].quantity === 0){
                    state.splice(index,1);
                }
            localStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        }
        default: return [...state];
    }
}

const findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;