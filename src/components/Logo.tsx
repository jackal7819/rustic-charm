import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
	return (
		<Link to='/' className='hidden lg:flex'>
			<div className='flex items-center justify-center p-1 text-xl font-semibold duration-500 rounded-md bg-primary hover:opacity-80'>
				<span className='ml-1 mr-2 text-white'>Rustic</span>
				<span className='flex items-center justify-center w-20 h-8 bg-white rounded text-[hsl(24.6,95%,53.1%)]'>
					Charm
				</span>
			</div>
		</Link>
	);
};

export default Logo;
