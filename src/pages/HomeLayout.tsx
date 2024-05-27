import Header from '@/components/Header';
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
	return (
		<>
			<Header />
			<Navbar />
			<div className='py-20 align-element'>
				<Outlet />
			</div>
		</>
	);
};

export default HomeLayout;
