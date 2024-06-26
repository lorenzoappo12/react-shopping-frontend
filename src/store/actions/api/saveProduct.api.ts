import axios from 'axios';
import { IProductResponse, Product } from '../../models';
import { isSuccessfulResponse, axiosApi } from '../../../utils';

export const saveProduct = async (
  product: Product,
): Promise<IProductResponse> => {
  const url = process.env.REACT_APP_API_END_POINT ?? 'http://localhost:8000/products';
  try {
    const response = product.id
      ? await axiosApi.put(`${url}/${product.id}`, product, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      : await axiosApi.post(`${url}`, product, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

    if (isSuccessfulResponse(response)) {
      return {
        product: response.data as Product,
        isSuccessful: true,
      };
    }
    return {
      product,
      isSuccessful: false,
      error: new Error('An error has occured'),
    };
  } catch (error) {
    return {
      product,
      isSuccessful: false,
      error: axios.isAxiosError(error)
        ? error
        : new Error('An error has occured'),
    };
  }
};
