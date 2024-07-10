import { OrdersResponse } from '@/utils/types';
import { useLoaderData } from 'react-router-dom';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from './ui/table';

const OrdersList: React.FC = () => {
	const { meta, data: orders } = useLoaderData() as OrdersResponse;

	return (
		<div className='mt-16'>
			<h4 className='mb-4 capitalize'>
				total orders : {meta.pagination.total}
			</h4>
			<Table>
				<TableCaption>A list of your recent orders</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Address</TableHead>
						<TableHead className='w-24'>Products</TableHead>
						<TableHead className='w-24 text-center'>Cost</TableHead>
						<TableHead>Date</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{orders.map((order) => {
						const {
							name,
							address,
							numItemsInCart,
							orderTotal,
							createdAt,
						} = order.attributes;
						return (
							<TableRow key={order.id}>
								<TableCell>{name}</TableCell>
								<TableCell>{address}</TableCell>
								<TableCell className='text-center'>
									{numItemsInCart}
								</TableCell>
								<TableCell className='text-right'>
									{orderTotal}
								</TableCell>
								<TableCell>
									{new Date(createdAt).toDateString()}
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
};

export default OrdersList;
