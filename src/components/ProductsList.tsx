import { Link, useLoaderData } from 'react-router-dom';
import { ProductsResponse } from '@/utils/types';
import { formatAsDollars } from '@/utils/formatAsDollars';

import { Card, CardContent } from './ui/card';

const ProductsList: React.FC = () => {
	const { data: products } = useLoaderData() as ProductsResponse;

	return (
		<div className='grid mt-12 gap-y-8'>
			{products.map((product) => {
				const { title, price, image, company } = product.attributes;
				const dollarsAmount = formatAsDollars(price);
				return (
					<Link key={product.id} to={`/products/${product.id}`}>
						<Card>
							<CardContent className='grid p-8 gap-y-4 md:grid-cols-3'>
								<img
									src={image}
									alt={title}
									className='object-cover w-full h-64 rounded-md md:h-48 md:w-48'
								/>
								<div>
									<h2 className='text-xl font-semibold capitalize'>
										{title}
									</h2>
									<h4>{company}</h4>
								</div>
								<p className='font-bold md:ml-auto text-primary'>
									{dollarsAmount}
								</p>
							</CardContent>
						</Card>
					</Link>
				);
			})}
		</div>
	);
};

export default ProductsList;
