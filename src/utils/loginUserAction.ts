import { ActionFunction, redirect } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { ReduxStore } from '@/store';
import { loginUser } from '@/features/userSlice';
import { toast } from '@/components/ui/use-toast';

import customFetch from './customFetch';

const loginUserAction =
	(store: ReduxStore): ActionFunction =>
	async ({ request }): Promise<Response | null> => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		try {
			console.log('response');
			const response: AxiosResponse = await customFetch.post(
				'/auth/local',
				data
			);
			const username = response.data.user.username;
			const jwt = response.data.jwt;
			store.dispatch(loginUser({ username, jwt }));
			return redirect('/');
		} catch (error) {
			console.log(error);
			toast({ description: 'Login Failed' });
			return null;
		}
	};

export default loginUserAction;
