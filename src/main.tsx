import './index.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx';
import { Toaster } from './components/ui/toaster.tsx';
import { store } from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
		<Toaster />
	</Provider>
);
