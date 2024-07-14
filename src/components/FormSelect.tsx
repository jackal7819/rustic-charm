import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Label } from './ui/label';

type FormSelectProps = {
	name: string;
	label?: string;
	defaultValue?: string;
	options: string[];
};
const FormSelect: React.FC<FormSelectProps> = ({
	name,
	label,
	defaultValue,
	options,
}) => {
	return (
		<div className='mb-2'>
			<Label htmlFor={name} className='capitalize'>
				{label || name}
			</Label>
			<Select defaultValue={defaultValue || options[0]} name={name}>
				<SelectTrigger id={name}>
					<SelectValue placeholder='Theme' />
				</SelectTrigger>
				<SelectContent>
					{options.map((option) => (
						<SelectItem key={option} value={option}>
							{option}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default FormSelect;
