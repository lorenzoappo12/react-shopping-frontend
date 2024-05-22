import { ActionCreator, AnyAction } from 'redux';
import { ProductActionTypes, Product, FetchProductsSuccessAction, FetchProductsFailureAction } from '../types/productTypes';

export const fetchProducts: ActionCreator<AnyAction> = () => ({
  type: ProductActionTypes.FETCH_PRODUCTS,
});

export const fetchProductsSuccess: ActionCreator<FetchProductsSuccessAction> = (products: Product[]) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure: ActionCreator<FetchProductsFailureAction> = (error: string) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: error,
});
