import { ActionTypes } from "../constants/action-types";

const initialeState = {
    products:[{}]
}

export const ProductReducer = (state = initialeState, action)=> {
    switch(action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.payload};
        case ActionTypes.FETCH_PRODUCTS:
            return {...state, products: action.payload};
        default: 
            return state;
    }
}

export const SelectedProductReducer = (state = {}, {type, payload})=> {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.FETCH_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default: 
            return state;
    }
}
