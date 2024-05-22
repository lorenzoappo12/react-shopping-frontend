import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import productReducer from './reducers/productReducers';
import { productSaga } from './sagas/ProductSaga';
import { ProductState } from './types/productTypes';


const rootReducer = combineReducers({
  product: productReducer,

});

export type RootState = {
  product: ProductState;
};


const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)) 
);


sagaMiddleware.run(productSaga);


export default store;
