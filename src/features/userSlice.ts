import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { toast } from '@/components/ui/use-toast';

export type User = {
	username: string;
	jwt: string;
};

type UserState = {
	user: User | null;
};

const getUserFromLocalStorage = () => {
	const user = localStorage.getItem('user');
	return user ? JSON.parse(user) : null;
};

const initialState: UserState = {
	user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<User>) => {
			const user = action.payload;
			localStorage.setItem('user', JSON.stringify(user));
			state.user = user;
			if (user.username === 'demo user') {
				toast({ description: 'Welcome, Guest User' });
				return;
			}
			toast({ description: 'Login Successful' });
		},
		logoutUser: (state) => {
			localStorage.removeItem('user');
			state.user = null;
		},
	},
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
