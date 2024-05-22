import { Reducer } from 'redux';
import {ProductState, ProductActionTypes } from '../types/productTypes';

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer: Reducer<ProductState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return { ...state, loading: true };
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload, error: null };
    case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
