import { combineReducers } from 'redux';
import { ProductReducer, SelectedProductReducer } from './product-reducer'

export const reducers = combineReducers({
        allProducts: ProductReducer,
        product: SelectedProductReducer
    })