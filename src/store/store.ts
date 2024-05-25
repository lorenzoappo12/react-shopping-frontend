import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reducer } from '../store/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../store/sagas/root.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(sagaMiddleware).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
sagaMiddleware.run(rootSaga);
