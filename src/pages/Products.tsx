import Filters from '@/components/Filters';
import PaginationContainer from '@/components/PaginationContainer';
import ProductsContainer from '@/components/ProductsContainer';

const Products: React.FC = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	);
};

export default Products;
