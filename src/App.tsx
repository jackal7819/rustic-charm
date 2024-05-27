import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Cart from './pages/Cart';
import Landing from './pages/Landing';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
