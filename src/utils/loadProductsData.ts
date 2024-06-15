import { type LoaderFunction } from 'react-router-dom';

import customFetch from './customFetch';
import {
	type ProductsResponse,
	type ProductsResponseWithParams,
} from './types';

const url = '/products';

const loadProductsData: LoaderFunction = async ({
	request,
}): Promise<ProductsResponseWithParams> => {
	const params = Object.fromEntries([
		...new URL(request.url).searchParams.entries(),
	]);
	const response = await customFetch<ProductsResponse>(url, {
		params,
	});
	return { ...response.data, params };
};

export default loadProductsData;
