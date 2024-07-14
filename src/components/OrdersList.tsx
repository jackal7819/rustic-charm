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
			<Table className='overflow-x-auto'>
				<TableCaption>A list of your recent orders</TableCaption>
				<TableHeader>
					<TableRow className='text-center'>
						<TableHead className='text-center min-w-36'>
							Name
						</TableHead>
						<TableHead className='text-center min-w-36'>
							Address
						</TableHead>
						<TableHead className='w-24 text-center'>
							Products
						</TableHead>
						<TableHead className='w-24 pr-8 text-center'>
							Cost
						</TableHead>
						<TableHead className='text-center min-w-36'>
							Date
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className='text-center'>
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
								<TableCell className='min-w-36'>
									{name}
								</TableCell>
								<TableCell className='min-w-36'>
									{address}
								</TableCell>
								<TableCell className='w-24'>
									{numItemsInCart}
								</TableCell>
								<TableCell className='w-24'>
									{orderTotal}
								</TableCell>
								<TableCell className='min-w-36'>
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
