import * as types from './../constance/ActionTypes'

var initState = [
    {
        id: 1,
        name:"iPhone X",
        img: "",
        desc:"San pham do apple san xuat",
        price: 500,
        inventory:4,
        rate: 5
    },
    {
        id: 2,
        name:"iPhone 7 Plus",
        img: "",
        desc:"San pham do apple san xuat",
        price: 400,
        inventory:10,
        rate: 3
    },
    {
        id: 3,
        name:"iPhone 5S",
        img: "",
        desc:"San pham do apple san xuat",
        price: 300,
        inventory:8,
        rate: 4
    },
]

const product = (state = initState, action) => {
    switch(action.type){
        case types.LIST_ALL:{
            return state;
        }
        default:    return state;
    }
}

export default product;