import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/hooks';
import CartItemsList from '@/components/CartItemsList';
import CartTotals from '@/components/CartTotals';

const Cart: React.FC = () => {
	const user = null;

	const numItemsInCart = useAppSelector(
		(state) => state.cartState.numItemsInCart
	);

	if (numItemsInCart === 0) {
		return <SectionTitle text='Your cart is empty' />;
	}

	return (
		<>
			<SectionTitle text='Shopping Cart' />
			<div className='grid gap-8 mt-8 lg:grid-cols-12'>
				<div className='lg:col-span-8'>
					<CartItemsList />
				</div>
				<div className='lg:col-span-4 lg:pl-4'>
					<CartTotals />
					{user ? (
						<Button asChild className='w-full mt-8'>
							<Link to='/checkout'>Proceed to checkout</Link>
						</Button>
					) : (
						<Button asChild className='w-full mt-8'>
							<Link to='/login'>Please login</Link>
						</Button>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
