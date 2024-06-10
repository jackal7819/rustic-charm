import { type LoaderFunction } from 'react-router-dom';

import customFetch from './customFetch';
import { ProductsResponse } from './types';

const URL = '/products';

const loadLandingData: LoaderFunction = async (): Promise<ProductsResponse> => {
	const response = await customFetch<ProductsResponse>(URL);
	return { ...response.data };
};

export default loadLandingData;
