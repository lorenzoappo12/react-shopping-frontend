
export interface Product {
  id: number;
  name: string;
}


export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  submittedProduct: any;
  submittedLoading: boolean,
  submittedError:  string | null;
}


export enum ProductActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',

  CREATE_PRODUCT = 'CREATE_PRODUCT',
  CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE',
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

export interface CreateProductsAction {
  type: ProductActionTypes.CREATE_PRODUCT;
}

export interface CreateProductsSuccessAction {
  type: ProductActionTypes.CREATE_PRODUCT_SUCCESS;
  payload: Product[];
}

export interface CreateProductsFailureAction {
  type: ProductActionTypes.CREATE_PRODUCT_FAILURE;
  payload: string;
}


export type ProductAction =
  | FetchProductsAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | CreateProductsAction
  | CreateProductsSuccessAction
  | CreateProductsFailureAction;;
