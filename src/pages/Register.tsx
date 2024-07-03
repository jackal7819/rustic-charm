import FormInput from '@/components/FormInput'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from 'react-router-dom'

const Register: React.FC = () => {
	return (
		<section className='grid h-screen place-items-center'>
			<Card className='w-96 bg-muted'>
				<CardHeader>
					<CardTitle className='tracking-wider text-center'>Register</CardTitle>
				</CardHeader>
				<CardContent>
					<Form>
						<FormInput type='text' label='username' name='username' />
					</Form>
				</CardContent>
			</Card>
		</section>
	);
};

export default Register;
