import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

type FormCheckboxProps = {
	name: string;
	label?: string;
	defaultValue?: string;
};

const FormCheckbox: React.FC<FormCheckboxProps> = ({
	label,
	name,
	defaultValue,
}) => {
	const defaultChecked = defaultValue === 'on' ? true : false;
	return (
		<div className='flex self-end justify-between mb-2'>
			<Label htmlFor={name} className='capitalize'>
				{label || name}
			</Label>
			<Checkbox
				id={name}
				name={name}
				defaultChecked={defaultChecked}
			/>
		</div>
	);
};

export default FormCheckbox;
