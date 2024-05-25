import { AxiosError } from 'axios';

export type Product = {
    id?: number;
    name: string;
    description: string;
    quantity: string;
    isPurchase?: boolean
};

export type ProductListItem = Product & {
  id: string;
};

export interface IFetchProductResponse {
  products?: ProductListItem[];
  error?: AxiosError | Error;
  isSuccessful?: boolean;
}

export interface IProductResponse {
  product: Product | undefined;
  error?: AxiosError | Error;
  isSuccessful?: boolean;
}

export interface IDeleteProductResponse {
  id: string;
  error?: AxiosError | Error;
  isSuccessful?: boolean;
}

export interface IProductState {
  deleteModalOpen: boolean;
  isLoading: boolean;
  isSaving: boolean;
  isDeleting: boolean;
  productListResponse?: IFetchProductResponse;
  selectedProducts: ProductListItem[];
  productSaveResponse?: IProductResponse;
  deleteProductResponse?: IDeleteProductResponse;
}
