import { Form, Link, useLoaderData } from 'react-router-dom';
import { Button } from './ui/button';
import { ProductsResponseWithParams } from '@/utils/types';
import FormInput from './FormInput';

const Filters: React.FC = () => {
	const { params } = useLoaderData() as ProductsResponseWithParams;
	const { search, company, category, shipping, order, price } = params;

	return (
		<Form className='grid items-center px-8 py-4 border rounded-md gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			<FormInput
				name='search'
				type='text'
				label='search product'
				defaultValue={search}
			/>
			<Button type='submit' size='default' className='self-end mb-2'>
				Search
			</Button>
			<Button
				asChild
				type='button'
				variant='outline'
				size='default'
				className='self-end mb-2'
			>
				<Link to='/products'>Reset</Link>
			</Button>
		</Form>
	);
};

export default Filters;
