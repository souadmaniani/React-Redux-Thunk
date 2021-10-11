import { ActionTypes } from '../constants/action-types'
import fakeStoreApi from '../../apis/fakeStoreApi'

export const FetchProducts = ()=> async (dispatch)=> {
        const response = await fakeStoreApi.get('/products');
        dispatch({type: ActionTypes.FETCH_PRODUCTS,  payload: response.data})
}
export const FetchProduct = (id)=> async (dispatch)=> {
        const response = await fakeStoreApi.get(`/products/${id}`);
        dispatch({type: ActionTypes.FETCH_PRODUCT,  payload: response.data})
}
export const SetProducts = (products)=>{
    return ({
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    })
}
export const SelectedProduct = (product)=>{
    return ({
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    })
}
export const RemoveSelectedProduct = ()=>{
    return ({
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    })
}