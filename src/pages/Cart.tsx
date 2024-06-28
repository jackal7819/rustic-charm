import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
	return (
		<div>
			<h1>Cart Page</h1>
			<Link to='/' className='text-4xl text-pink-500'>
				Back Home
			</Link>
			<div>
				<Button asChild size='lg'>
					<Link to='/' className='text-xl text-pink-500'>
						Back Home
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default Cart;
