import FormInput from '@/components/FormInput';
import SubmitBtn from '@/components/SubmitBtn';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { loginUser } from '@/features/userSlice';
import { useAppDispatch } from '@/hooks';
import customFetch from '@/utils/customFetch';
import { AxiosResponse } from 'axios';
import { Form, Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const loginAsGuest = async (): Promise<void> => {
		try {
			const response: AxiosResponse = await customFetch.post(
				'/auth/local',
				{
					identifier: 'test@test.com',
					password: 'secret',
				}
			);
			const username = response.data.user.username;
			const jwt = response.data.jwt;
			dispatch(loginUser({ username, jwt }));
			navigate('/');
		} catch (error) {
			console.log(error);
			toast({ description: 'Login Failed' });
		}
	};

	return (
		<section className='grid h-screen place-items-center'>
			<Card className='w-96 bg-muted'>
				<CardHeader>
					<CardTitle className='tracking-wider text-center'>
						Login
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Form method='post'>
						<FormInput type='email' label='email' name='identifier' />
						<FormInput type='password' name='password' />
						<SubmitBtn text='Login' className='w-full mt-4' />
						<Button
							type='button'
							variant='outline'
							onClick={loginAsGuest}
							className='w-full mt-4'
						>
							Login as Guest
						</Button>
						<p className='mt-4 text-center'>
							Not a member yet?{' '}
							<Button type='button' variant='link'>
								<Link
									to='/register'
									className='text-lg capitalize'
								>
									register
								</Link>
							</Button>
						</p>
					</Form>
				</CardContent>
			</Card>
		</section>
	);
};

export default Login;
