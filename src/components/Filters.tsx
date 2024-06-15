import { Form, Link } from 'react-router-dom';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Filters = () => {
	return (
		<Form className='grid items-center px-8 py-4 border rounded-md gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			<div className='mb-2'>
				<Label htmlFor='search'>Search Product</Label>
				<Input type='text' id='search' name='search' defaultValue='' />
			</div>
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
