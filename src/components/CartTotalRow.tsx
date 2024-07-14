import { formatAsDollars } from '@/utils/formatAsDollars';

import { Separator } from './ui/separator';

type CartTotalRowProps = {
	label: string;
	amount: number;
	lastRow?: boolean;
};

const CartTotalRow: React.FC<CartTotalRowProps> = ({
	label,
	amount,
	lastRow,
}) => {
	return (
		<>
			<p className='flex justify-between text-lg'>
				<span>{label}</span>
				<span>{formatAsDollars(amount)}</span>
			</p>
			{lastRow ? null : <Separator className='my-2' />}
		</>
	);
};

export default CartTotalRow;
