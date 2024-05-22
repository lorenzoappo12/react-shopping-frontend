import { call, put, takeEvery, all } from 'redux-saga/effects'; // Import `all`
import { fetchProductsSuccess, fetchProductsFailure } from '../actions/productActions';
import { ProductActionTypes } from '../types/productTypes';

const mockFetchProducts = () =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve([
          { id: 1, name: 'CLOTHES' },
          { id: 2, name: 'JWELLERY' },
          { id: 3, name: 'WATCH' },
          { id: 4, name: 'COMPUTER' },
          { id: 5, name: 'TELEVISION' },
        ]),
      1000
    )
  );


function* fetchProducts(): Generator<any, void, any> { 
  try {
    const products = yield call(mockFetchProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}


function* watchFetchProducts(): Generator<any, void, any> { 
  yield takeEvery(ProductActionTypes.FETCH_PRODUCTS, fetchProducts);
}

export function* productSaga(): Generator<any, void, any> { 
  yield all([watchFetchProducts()]);
}
