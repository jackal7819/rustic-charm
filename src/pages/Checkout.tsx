import CartTotals from '@/components/CartTotals';
import CheckoutForm from '@/components/CheckoutForm';
import SectionTitle from '@/components/SectionTitle';
import { useAppSelector } from '@/hooks';

const Checkout: React.FC = () => {
	const cartTotal = useAppSelector((state) => state.cartState.cartTotal);

	if (cartTotal === 0) {
		return <SectionTitle text='Your cart is empty' />;
	}
	return (
		<>
			<SectionTitle text='Place your order' />
			<div className='grid items-start gap-8 mt-8 md:grid-cols-2'>
				<CheckoutForm />
				<CartTotals />
			</div>
		</>
	);
};

export default Checkout;
