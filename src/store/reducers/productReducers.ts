
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchAllProductsDoneAction,
  isDeletingAction,
  isLoadingAction,
  isSavingAction,
  setDeleteModalOpenAction,
  setDeleteProductDoneAction,
  setSaveProductDoneAction,
  setSelectedProductsAction,
} from '../actions/productActions';
import { IProductState } from '../models/index';

export const productInitialState: IProductState = {
  deleteModalOpen: false,
  isLoading: false,
  isSaving: false,
  isDeleting: false,
  selectedProduct: null,
};

export default createReducer(productInitialState, (builder) =>
  builder
    .addCase(isLoadingAction, (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }))
    .addCase(isSavingAction, (state, { payload }) => ({
      ...state,
      isSaving: payload,
    }))
    .addCase(isDeletingAction, (state, { payload }) => ({
      ...state,
      isDeleting: payload,
    }))
    .addCase(setDeleteModalOpenAction, (state, { payload }) => ({
      ...state,
      deleteModalOpen: payload,
    }))
    .addCase(setSelectedProductsAction, (state, { payload }) => ({
      actionTriggerRefetching: undefined,
      ...state,
      selectedProduct: payload,
    }))
    .addCase(fetchAllProductsDoneAction, (state, { payload }) => ({
      ...state,
      productListResponse: payload,
    }))
    .addCase(setSaveProductDoneAction, (state, { payload }) => ({
      ...state,
      productSaveResponse: payload,
    }))
    .addCase(setDeleteProductDoneAction, (state, { payload }) => ({
      ...state,
      deleteProductResponse: payload,
    })),
);
