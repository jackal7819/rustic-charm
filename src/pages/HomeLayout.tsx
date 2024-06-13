import Header from '@/components/Header';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';

const HomeLayout = () => {
	const navigation = useNavigation();
	const isLoading = navigation.state === 'loading';

	return (
		<>
			<Header />
			<Navbar />
			<div className='py-20 align-element'>
				{isLoading ? <Loading /> : <Outlet />}
			</div>
		</>
	);
};

export default HomeLayout;
