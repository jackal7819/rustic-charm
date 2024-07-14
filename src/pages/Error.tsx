import { Button } from '@/components/ui/button';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

const Error: React.FC = () => {
	const error = useRouteError();
	if (isRouteErrorResponse(error) && error.status === 404) {
		return (
			<main className='grid min-h-screen px-8 place-items-center'>
				<div className='text-center'>
					<p className='font-semibold text-9xl text-primary'>404</p>
					<h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
						Page not found
					</h1>
					<p className='mt-6 text-lg leading-7'>
						Sorry, we could not find the page you’re looking for
					</p>
					<div className='mt-10'>
						<Button asChild size='lg' variant='secondary'>
							<Link to='/'>Go back home</Link>
						</Button>
					</div>
				</div>
			</main>
		);
	}
	return (
		<main className='grid min-h-screen px-8 place-items-center'>
			<h4 className='text-4xl font-bold text-center'>
				There was an error...
			</h4>
		</main>
	);
};

export default Error;
