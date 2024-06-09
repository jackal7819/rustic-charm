import { formatAsDollars } from '@/utils/formatAsDollars';
import { ProductsResponse } from '@/utils/types';
import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardContent } from './ui/card';

const ProductsGrid: React.FC = () => {
	const { data: products } = useLoaderData() as ProductsResponse;

	return (
		<div className='grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3'>
			{products.map((product) => {
				const { title, price, image } = product.attributes;
				const dollarsAmount = formatAsDollars(price);
				return (
					<Link
						key={product.id}
						to={`/products/${product.id}`}
						className='w-full transition duration-300 shadow-xl card hover:shadow-2xl'
					>
						<Card>
							<CardContent className='p-4'>
								<img
									src={image}
									alt={title}
									className='object-cover w-full h-64 rounded-md md:h-48'
								/>
								<div className='mt-4 text-center'>
									<h2 className='text-xl font-semibold capitalize'>
										{title}
									</h2>
									<p className='mt-2 font-light text-primary'>
										{dollarsAmount}
									</p>
								</div>
							</CardContent>
						</Card>
					</Link>
				);
			})}
		</div>
	);
};

export default ProductsGrid;
