import { LoaderFunction } from 'react-router-dom';

import customFetch from './customFetch';
import { SingleProductResponse } from './types';

const loadSingleProductData: LoaderFunction = async ({
	params,
}): Promise<SingleProductResponse> => {
	const response = await customFetch<SingleProductResponse>(
		`/products/${params.id}`
	);
	return { ...response.data };
};

export default loadSingleProductData;
