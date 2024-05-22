
export interface Product {
    id: number;
    name: string;
  }
  

  export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
  }
  

  export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
  }
  

  export interface FetchProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTS;
  }
  
  export interface FetchProductsSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: Product[];
  }
  
  export interface FetchProductsFailureAction {
    type: ProductActionTypes.FETCH_PRODUCTS_FAILURE;
    payload: string;
  }
  

  export type ProductAction =
    | FetchProductsAction
    | FetchProductsSuccessAction
    | FetchProductsFailureAction;
  