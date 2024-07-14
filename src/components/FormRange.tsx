import { useState } from 'react';
import { Label } from './ui/label';
import { formatAsDollars } from '@/utils/formatAsDollars';
import { Slider } from './ui/slider';

type FormRangeProps = {
	name: string;
	label?: string;
	defaultValue?: string;
};

const FormRange: React.FC<FormRangeProps> = ({ name, label, defaultValue }) => {
	const step = 1000;
	const maxPrice = 100000;
	const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
	const [selectedPrice, setSelectedPrice] = useState(defaultPrice);

	return (
		<div className='mb-2'>
			<Label htmlFor={name} className='flex justify-between capitalize'>
				{label || name}
				<span>{formatAsDollars(selectedPrice)}</span>
			</Label>
			<Slider
					id={name}
					name={name}
					max={maxPrice}
					step={step}
					value={[selectedPrice]}
					onValueChange={(value) => setSelectedPrice(value[0])}
					className='mt-4'
				/>
		</div>
	);
};

export default FormRange;
