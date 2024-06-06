import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/products',
				element: <Products />,
			},
			{
				path: '/products/:id',
				element: <SingleProduct />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/checkout',
				element: <Checkout />,
			},
			{
				path: '/orders',
				element: <Orders />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: '/register',
		element: <Register />,
		errorElement: <Error />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
