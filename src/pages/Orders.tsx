import ComplexPaginationContainer from '@/components/ComplexPaginationContainer';
import OrdersList from '@/components/OrdersList';
import SectionTitle from '@/components/SectionTitle';
import { OrdersResponse } from '@/utils/types';
import { useLoaderData } from 'react-router-dom';

const Orders: React.FC = () => {
	const { meta, data } = useLoaderData() as OrdersResponse;
	console.log(data);

	if (meta.pagination.total < 1) {
		return <SectionTitle text='Please make an order' />;
	}

	return (
		<>
			<SectionTitle text='Your Orders' />
			<OrdersList />
			<ComplexPaginationContainer />
		</>
	);
};

export default Orders;
