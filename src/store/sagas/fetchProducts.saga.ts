import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { IFetchProductResponse } from '../models';
import { getAllProducts } from '../actions/api';
import {
  fetchAllProductsDoneAction,
  fetchAllProductsAction,
  isLoadingAction,
} from '../actions/productActions';

export function* fetchAllProductsAsync(): SagaIterator {
  try {
    yield put(isLoadingAction(true));
    const response: IFetchProductResponse = yield call(getAllProducts);

    yield put(fetchAllProductsDoneAction(response));
  } catch (error) {
    yield put(
      fetchAllProductsDoneAction({
        products: [],
        error: error as Error,
        isSuccessful: false,
      }),
    );
  } finally {
    yield put(isLoadingAction(false));
  }
}

export function* fetchAllProductsSaga(): SagaIterator {
  yield takeLatest(fetchAllProductsAction, fetchAllProductsAsync);
}
