import axios from 'axios';
import { IDeleteProductResponse } from '../../models';
import { isSuccessfulResponse, axiosApi } from '../../../utils';

export const deleteProduct = async (
  id: string,
): Promise<IDeleteProductResponse> => {
  const url = process.env.REACT_APP_API_END_POINT ?? 'http://localhost:8000/products';

  try {
    const response = await axiosApi.delete(`${url}/${id}`);

    if (isSuccessfulResponse(response)) {
      return {
        id,
        isSuccessful: true,
      };
    }
    return {
      id,
      isSuccessful: false,
      error: new Error('An error has occured'),
    };
  } catch (error) {
    return {
      id,
      isSuccessful: false,
      error: axios.isAxiosError(error)
        ? error
        : new Error('An error has occured'),
    };
  }
};
