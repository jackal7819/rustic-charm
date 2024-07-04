import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, Link } from 'react-router-dom';

const Register: React.FC = () => {
	return (
		<section className='grid h-screen place-items-center'>
			<Card className='w-96 bg-muted'>
				<CardHeader>
					<CardTitle className='tracking-wider text-center'>
						Register
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Form>
						<FormInput
							type='text'
							defaultValue='test'
							name='username'
						/>
						<FormInput
							type='email'
							defaultValue='test@test.com'
							name='email'
						/>
						<FormInput
							type='password'
							defaultValue='secret'
							name='password'
						/>
						<Button
							type='submit'
							variant='default'
							className='w-full mt-4 capitalize'
						>
							register
						</Button>
						<p className='mt-4 text-center'>
							Already a member?{' '}
							<Button type='button' variant='link'>
								<Link
									to='/login'
									className='text-lg capitalize'
								>
									login
								</Link>
							</Button>
						</p>
					</Form>
				</CardContent>
			</Card>
		</section>
	);
};

export default Register;
