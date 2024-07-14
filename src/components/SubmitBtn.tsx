import { useNavigation } from 'react-router-dom';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';

type SubmitBtnProps = {
	text: string;
	className?: string;
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({ text, className }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	return (
		<Button type='submit' className={className} disabled={isSubmitting}>
			{isSubmitting ? (
				<span className='flex gap-2'>
					<ReloadIcon className='size-4 animate-spin' />
					Submitting...
				</span>
			) : (
				text
			)}
		</Button>
	);
};

export default SubmitBtn;
