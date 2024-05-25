import { StateFromReducersMapObject } from '@reduxjs/toolkit';
import product, { productInitialState } from './productReducers';

export const reducer = {
  product,
};

export type TAppState = StateFromReducersMapObject<typeof reducer>;
export type TStoreState = TAppState;

export const rootInitialState: TStoreState = {
  product: productInitialState,
};
