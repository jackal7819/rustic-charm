import { Mode } from '@/utils/types';
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';
import { SelectValue } from '@radix-ui/react-select';

type SelectProductAmountProps = {
	mode: Mode.SingleProduct;
	amount: number;
	setAmount: React.Dispatch<React.SetStateAction<number>>;
};

type SelectCartItemAmountProps = {
	mode: Mode.CartItem;
	amount: number;
	setAmount: (value: number) => void;
};

const SelectProductAmount: React.FC<
	SelectProductAmountProps | SelectCartItemAmountProps
> = ({ mode, amount, setAmount }) => {
	const cartItem = mode === Mode.CartItem;

	return (
		<>
			<h4 className='my-3 font-medium'>Amount : </h4>
			<Select
				defaultValue={amount.toString()}
				onValueChange={(value) => setAmount(Number(value))}
			>
				<SelectTrigger className={cartItem ? 'w-20' : 'w-36'}>
					<SelectValue placeholder={amount} />
				</SelectTrigger>
				<SelectContent>
					{Array.from({ length: cartItem ? amount + 10 : 10 }).map(
						(_, index) => (
							<SelectItem
								key={index}
								value={(index + 1).toString()}
							>
								{(index + 1).toString()}
							</SelectItem>
						)
					)}
				</SelectContent>
			</Select>
		</>
	);
};

export default SelectProductAmount;
