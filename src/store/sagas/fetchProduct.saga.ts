import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { IProductResponse } from '../models';
import { getProduct } from '../actions/api';
import {
  fetchProductDoneAction,
  fetchProductAction,
  isLoadingAction,
} from '../actions/productActions';

export function* fetchProductsAsync(action: { payload: string }): SagaIterator {
  try {
    yield put(isLoadingAction(true));
    const response: IProductResponse = yield call(getProduct, action.payload);

    yield put(fetchProductDoneAction(response));
  } catch (error) {
    yield put(
      fetchProductDoneAction({
        product: undefined,
        error: error as Error,
        isSuccessful: false,
      }),
    );
  } finally {
    yield put(isLoadingAction(false));
  }
}

export function* fetchProductSaga(): SagaIterator {
  yield takeLatest(fetchProductAction, fetchProductsAsync);
}
