import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import ErrorElement from './components/ErrorElement';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import loadLandingData from './utils/loadLandingData';
import loadProductsData from './utils/loadProductsData';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: loadLandingData,
			},
			{
				path: '/cart',
				element: <Cart />,
				errorElement: <ErrorElement />,
			},
			{
				path: '/products',
				element: <Products />,
				errorElement: <ErrorElement />,
				loader: loadProductsData,
			},
			{
				path: '/products/:id',
				element: <SingleProduct />,
				errorElement: <ErrorElement />,
			},
			{
				path: '/about',
				element: <About />,
				errorElement: <ErrorElement />,
			},
			{
				path: '/checkout',
				element: <Checkout />,
				errorElement: <ErrorElement />,
			},
			{
				path: '/orders',
				element: <Orders />,
				errorElement: <ErrorElement />,
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
