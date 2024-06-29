import { CartState } from '@/utils/types';
import { createSlice } from '@reduxjs/toolkit';

const defaultState: CartState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 0,
	tax: 0,
	orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
	const cart = localStorage.getItem('cart');
	return cart ? JSON.parse(cart) : defaultState;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: getCartFromLocalStorage(),
	reducers: {
		addItem: () => {},
		clearCart: () => {},
		removeItem: () => {},
		editItem: () => {},
		calculateTotals: () => {},
	},
});

export const { addItem, clearCart, removeItem, editItem, calculateTotals } =
	cartSlice.actions;

export default cartSlice.reducer;
