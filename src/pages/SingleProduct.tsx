import { CartItem, Mode, SingleProductResponse } from '@/utils/types';
import { formatAsDollars } from '@/utils/formatAsDollars';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SelectProductColor from '@/components/SelectProductColor';
import SelectProductAmount from '@/components/SelectProductAmount';
import { useAppDispatch } from '@/hooks';
import { addItem } from '@/features/cartSlice';

const SingleProduct: React.FC = () => {
	const { data: product } = useLoaderData() as SingleProductResponse;
	const { image, title, price, description, colors, company } =
		product.attributes;
	const dollarsAmount = formatAsDollars(price);
	const [productColor, setProductColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);
	const dispatch = useAppDispatch();

	const cartProduct: CartItem = {
		cartID: product.id + productColor,
		productID: product.id,
		image,
		title,
		price,
		amount,
		productColor,
		company,
	};

	const addToCart = () => {
		dispatch(addItem(cartProduct));
	};

	return (
		<section>
			<div className='flex items-center h-6 gap-x-2'>
				<Button asChild variant='link' size='sm'>
					<Link to='/'>Home</Link>
				</Button>
				<Separator orientation='vertical' />
				<Button asChild variant='link' size='sm'>
					<Link to='/products'>Products</Link>
				</Button>
			</div>
			{/* PRODUCT */}
			<div className='grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
				<img
					src={image}
					alt={title}
					className='object-cover rounded-lg w-96 h-96 lg:w-full'
				/>
				<div>
					<h1 className='text-3xl font-bold capitalize'>{title}</h1>
					<h4 className='mt-3 text-xl'>{company}</h4>
					<p className='inline-block p-2 mt-3 rounded-md text-md bg-muted'>
						{dollarsAmount}
					</p>
					<p className='mt-3 leading-8'>{description}</p>
					<SelectProductColor
						colors={colors}
						productColor={productColor}
						setProductColor={setProductColor}
					/>
					<SelectProductAmount
						mode={Mode.SingleProduct}
						amount={amount}
						setAmount={setAmount}
					/>
					<Button size='lg' className='mt-10' onClick={addToCart}>
						Add to bag
					</Button>
				</div>
			</div>
		</section>
	);
};

export default SingleProduct;
