import { ActionFunction, redirect } from 'react-router-dom';
import { ReduxStore } from '@/store';
import { clearCart } from '@/features/cartSlice';
import { toast } from '@/components/ui/use-toast';

import customFetch from './customFetch';
import { Checkout } from './types';
import { formatAsDollars } from './formatAsDollars';

const checkoutAction =
	(store: ReduxStore): ActionFunction =>
	async ({ request }): Promise<Response | null> => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const address = formData.get('address') as string;

		if (!name || !address) {
			toast({ description: 'Please fill in all fields' });
			return null;
		}

		const user = store.getState().userState.user;
		if (!user) {
			toast({ description: 'Please login to place an order' });
			return redirect('/login');
		}

		const { cartItems, orderTotal, numItemsInCart } =
			store.getState().cartState;

		const info: Checkout = {
			name,
			address,
			chargeTotal: orderTotal,
			orderTotal: formatAsDollars(orderTotal),
			cartItems,
			numItemsInCart,
		};

		try {
			const result = await customFetch.post(
				'/orders',
				{ data: info },
				{
					headers: { Authorization: `Bearer ${user.jwt}` },
				}
			);
			console.log(result);
			store.dispatch(clearCart());
			toast({ description: 'Order placed successfully' });
			return redirect('/orders');
		} catch (error) {
			console.log(error);
			toast({ description: 'Order failed' });
			return null;
		}
	};

export default checkoutAction;
