import { Mode } from '@/utils/types';
import { editItem, removeItem } from '@/features/cartSlice';
import { formatAsDollars } from '@/utils/formatAsDollars';
import { useAppDispatch } from '@/hooks';

import SelectProductAmount from './SelectProductAmount';
import { Button } from './ui/button';

type FirstColumnProps = {
	image: string;
	title: string;
};

export const FirstColumn: React.FC<FirstColumnProps> = ({ image, title }) => {
	return (
		<img
			className='object-cover rounded-lg size-24 sm:size-32'
			src={image}
			alt={title}
		/>
	);
};

type SecondColumnProps = {
	title: string;
	company: string;
	productColor: string;
};

export const SecondColumn: React.FC<SecondColumnProps> = ({
	title,
	company,
	productColor,
}) => {
	return (
		<div className='sm:w-48'>
			<h3 className='font-medium capitalize'>{title}</h3>
			<p className='mt-2 text-sm capitalize'>{company}</p>
			<p className='flex items-center mt-4 text-sm capitalize gap-x-2'>
				color :{' '}
				<span
					className='rounded-full size-4'
					style={{ backgroundColor: productColor }}
				/>
			</p>
		</div>
	);
};

type ThirdColumnProps = {
	cartID: string;
	amount: number;
};

export const ThirdColumn: React.FC<ThirdColumnProps> = ({ cartID, amount }) => {
	const dispatch = useAppDispatch();

	const removeItemFromCart = () => {
		dispatch(removeItem(cartID));
	};

	const setAmount = (value: number) => {
		dispatch(editItem({ cartID, amount: value }));
	};

	return (
		<div>
			<SelectProductAmount
				mode={Mode.CartItem}
				amount={amount}
				setAmount={setAmount}
			/>
			<Button
				variant='link'
				className='-ml-4 capitalize'
				onClick={removeItemFromCart}
			>
				remove
			</Button>
		</div>
	);
};

type FourthColumnProps = {
	price: number;
};

export const FourthColumn: React.FC<FourthColumnProps> = ({ price }) => {
	return <p className='font-medium md:ml-auto'>{formatAsDollars(price)}</p>;
};
