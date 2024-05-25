import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { IDeleteProductResponse } from '../models';
import { deleteProduct } from '../actions/api';
import {
  deleteProductAction,
  fetchAllProductsAction,
  isDeletingAction,
  setDeleteProductDoneAction,
  setSelectedProductsAction,
} from '../actions/productActions';

export function* deleteProductAsync(action: { payload: string }): SagaIterator {
  try {
    yield put(isDeletingAction(true));

    const response: IDeleteProductResponse = yield call(
      deleteProduct,
      action.payload,
    );

    yield put(fetchAllProductsAction());

    yield put(setSelectedProductsAction([]));

    yield put(setDeleteProductDoneAction(response));
  } catch (error) {
    yield put(
      setDeleteProductDoneAction({
        id: action.payload,
        error: error as Error,
        isSuccessful: false,
      }),
    );
  } finally {
    yield put(isDeletingAction(false));
  }
}

export function* deleteProductSaga(): SagaIterator {
  yield takeLatest(deleteProductAction, deleteProductAsync);
}
