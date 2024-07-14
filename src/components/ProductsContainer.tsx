import { type ProductsResponse } from '@/utils/types';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

import ProductsList from './ProductsList';
import { Button } from './ui/button';
import { LayoutGrid, List } from 'lucide-react';
import ProductsGrid from './ProductsGrid';
import { Separator } from './ui/separator';

const ProductsContainer: React.FC = () => {
	const { meta } = useLoaderData() as ProductsResponse;
	const totalProducts = meta.pagination.total;
	const [layout, setLayout] = useState<'grid' | 'list'>('grid');

	return (
		<>
			{/* HEADER */}
			<section>
				<div className='flex items-center justify-between mt-8'>
					<h4 className='font-medium text-md'>
						{totalProducts} product{totalProducts > 1 && 's'}
					</h4>
					<div className='flex gap-x-4'>
						<Button
							onClick={() => setLayout('grid')}
							variant={layout === 'grid' ? 'default' : 'ghost'}
							size='icon'
						>
							<LayoutGrid />
						</Button>
						<Button
							onClick={() => setLayout('list')}
							variant={layout === 'list' ? 'default' : 'ghost'}
							size='icon'
						>
							<List />
						</Button>
					</div>
				</div>
				<Separator className='mt-4' />
			</section>
			{/* PRODUCTS */}
			<div>
				{totalProducts === 0 ? (
					<h5 className='mt-16 text-2xl'>
						Sorry, no products matched your search...
					</h5>
				) : layout === 'grid' ? (
					<ProductsGrid />
				) : (
					<ProductsList />
				)}
			</div>
		</>
	);
};

export default ProductsContainer;
