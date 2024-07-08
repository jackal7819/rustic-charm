import { LoaderFunction, redirect } from 'react-router-dom';
import { ReduxStore } from '@/store';
import { toast } from '@/components/ui/use-toast';

const loadCheckoutData =
	(store: ReduxStore): LoaderFunction =>
	async (): Promise<Response | null> => {
		const user = store.getState().userState.user;
		if (!user) {
			toast({ description: 'Please login to continue' });
			return redirect('/login');
		}
		return null;
	};

export default loadCheckoutData;
