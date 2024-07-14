import { useAppSelector } from '@/hooks';

import { Card } from './ui/card';
import { FirstColumn, FourthColumn, SecondColumn, ThirdColumn } from './CartItemColumns';

const CartItemsList = () => {
	const cartItems = useAppSelector((state) => state.cartState.cartItems);

	return (
		<div>
			{cartItems.map((cartItem) => {
				const {
					cartID,
					image,
					title,
					price,
					amount,
					company,
					productColor,
				} = cartItem;
				return (
					<Card
						key={cartID}
						className='grid grid-cols-2 gap-6 p-6 mb-8 place-items-center md:grid-cols-4 md:place-items-start'
					>
						<FirstColumn image={image} title={title} />
						<SecondColumn
							title={title}
							company={company}
							productColor={productColor}
						/>
						<ThirdColumn  cartID={cartID} amount={amount} />
						<FourthColumn price={price} />
					</Card>
				);
			})}
		</div>
	);
};

export default CartItemsList;
