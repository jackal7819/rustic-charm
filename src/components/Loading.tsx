import { Skeleton } from './ui/skeleton';

const Loading = () => {
	return (
		<div className='grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3'>
			{Array.from({ length: 3 }).map((_, index) => (
				<div
					key={index}
					className='flex flex-col p-4 space-y-4 border rounded-md'
				>
					<Skeleton className='w-full h-52 rounded-xl' />
					<div className='space-y-4'>
						<Skeleton className='w-64 h-4 mx-auto' />
						<Skeleton className='h-4 mx-auto w-52' />
					</div>
				</div>
			))}
		</div>
	);
};

export default Loading;
