import { Form, Link, useLoaderData } from 'react-router-dom';
import { Button } from './ui/button';
import { ProductsResponseWithParams } from '@/utils/types';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';

const Filters: React.FC = () => {
	const { meta, params } = useLoaderData() as ProductsResponseWithParams;
	const { search, company, category, shipping, order, price } = params;

	return (
		<Form className='grid items-center px-8 py-4 border rounded-md gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{/* SEARCH */}
			<FormInput
				name='search'
				type='text'
				label='search product'
				defaultValue={search}
			/>
			{/* CATEGORY */}
			<FormSelect
				name='category'
				label='select category'
				defaultValue={category}
				options={meta.categories}
			/>
			{/* COMPANY */}
			<FormSelect
				name='company'
				label='select company'
				defaultValue={company}
				options={meta.companies}
			/>
			{/* ORDER */}
			<FormSelect
				name='order'
				label='order by'
				defaultValue={order}
				options={['a-z', 'z-a', 'high', 'low']}
			/>
			{/* PRICE */}
			<FormRange label='price' name='price' defaultValue={price} />
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
