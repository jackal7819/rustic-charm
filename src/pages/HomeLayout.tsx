import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
	return (
		<>
			<Header />
			<div className='py-20 align-element'>
				<Outlet />
			</div>
		</>
	);
};

export default HomeLayout;
