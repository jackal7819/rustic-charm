import { Form } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';

const CheckoutForm: React.FC = () => {
	return (
		<Form method='post' className='flex flex-col gap-y-4'>
			<h4 className='mb-4 text-xl font-medium'>Shipping Information</h4>
			<FormInput label='first name' name='name' type='text' />
			<FormInput label='address' name='address' type='text' />
			<SubmitBtn text='Place your order' className='mt-4' />
		</Form>
	);
};

export default CheckoutForm;
