import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';

const FeaturedProducts: React.FC = () => {
	return (
		<section className='pt-20'>
			<SectionTitle text='Featured Products' />
			<ProductsGrid />
		</section>
	);
};

export default FeaturedProducts;
