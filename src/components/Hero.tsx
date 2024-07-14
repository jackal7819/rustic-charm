import { Link } from 'react-router-dom';
import HeroCarousel from './HeroCarousel';
import { Button } from './ui/button';

const Hero: React.FC = () => {
	return (
		<section className='grid items-center grid-cols-1 gap-24 lg:grid-cols-2'>
			<div>
				<h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
					We are changing the way people shop
				</h1>
				<p className='max-w-xl mt-8 text-lg leading-8'>
					Transform your living space with our curated collection of
					exquisite furniture. Elevate your home&#39;s style and
					comfort, one piece at a time. Redefining the way you
					experience furniture shopping.
				</p>
				<Button asChild size='lg' className='mt-10 text-lg'>
					<Link to='/products'>Our Products</Link>
				</Button>
			</div>
			<HeroCarousel />
		</section>
	);
};

export default Hero;
