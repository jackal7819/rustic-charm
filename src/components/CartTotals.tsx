import { useAppSelector } from '@/hooks';

import CartTotalRow from './CartTotalRow';
import { Card, CardTitle } from './ui/card';

const CartTotals = () => {
	const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
		(state) => state.cartState
	);
	return (
		<Card className='p-8 bg-muted'>
			<CartTotalRow label='Subtotal' amount={cartTotal} />
			<CartTotalRow label='Shipping' amount={shipping} />
			<CartTotalRow label='Tax' amount={tax} />
			<CardTitle className='mt-8 tracking-wider'>
				<CartTotalRow label='Order Total' amount={orderTotal} lastRow />
			</CardTitle>
		</Card>
	);
};

export default CartTotals;
