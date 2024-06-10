import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
import { Card, CardContent } from './ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel';

const carouselImages = [hero1, hero2, hero3, hero4];

const HeroCarousel = () => {
	return (
		<div className='hidden pr-9 lg:block'>
			<Carousel>
				<CarouselContent className='p-px'>
					{carouselImages.map((image) => (
						<CarouselItem key={image}>
							<Card>
								<CardContent className='p-4'>
									<img
										src={image}
										alt='hero image'
										className='w-full h-[24rem] rounded-md object-cover'
									/>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default HeroCarousel;
