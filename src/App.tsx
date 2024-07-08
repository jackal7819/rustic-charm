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
import checkoutAction from './utils/checkoutAction';
import loadCheckoutData from './utils/loadCheckoutData';
import loadLandingData from './utils/loadLandingData';
import loadOrdersData from './utils/loadOrdersData';
import loadProductsData from './utils/loadProductsData';
import loadSingleProductData from './utils/loadSingleProductData';
import loginUserAction from './utils/loginUserAction';
import registerUserAction from './utils/registerUserAction';
import { store } from './store';

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
				loader: loadSingleProductData,
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
				loader: loadCheckoutData(store),
				action: checkoutAction(store),
			},
			{
				path: '/orders',
				element: <Orders />,
				errorElement: <ErrorElement />,
				loader: loadOrdersData(store),
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <Error />,
		action: loginUserAction(store),
	},
	{
		path: '/register',
		element: <Register />,
		errorElement: <Error />,
		action: registerUserAction,
	},
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
