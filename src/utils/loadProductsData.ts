import { type LoaderFunction } from 'react-router-dom';

import customFetch from './customFetch';
import { ProductsResponse } from './types';

const url = '/products';

const loadProductsData: LoaderFunction = async ({
	request,
}): Promise<ProductsResponse> => {
	const params = Object.fromEntries([
		...new URL(request.url).searchParams.entries(),
	]);
	const response = await customFetch<ProductsResponse>(url, {
		params,
	});
	return { ...response.data };
};

export default loadProductsData;
