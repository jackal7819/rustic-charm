import { ActionFunction, redirect } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from '@/components/ui/use-toast';

import customFetch from './customFetch';

const registerUser: ActionFunction = async ({
	request,
}): Promise<Response | null> => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		await customFetch.post('/auth/local/register', data);
		toast({ description: 'Registered successfully' });
		return redirect('/login');
	} catch (error) {
		const errorMessage =
			error instanceof AxiosError
				? error.response?.data.error.message
				: 'Registration failed';
		toast({ description: errorMessage });
		return null;
	}
};

export default registerUser;
