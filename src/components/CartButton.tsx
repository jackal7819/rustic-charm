import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';

const CartButton = () => {
	const numItemsInCart = 9;

	return (
		<Button
			asChild
			variant='outline'
			size='icon'
			className='relative flex items-center justify-center'
		>
			<Link to='/cart'>
				<ShoppingCart />
				<span className='absolute flex items-center justify-center text-sm font-bold text-white rounded-full -top-3 -right-3 bg-primary size-6'>
					{numItemsInCart}
				</span>
			</Link>
		</Button>
	);
};

export default CartButton;
