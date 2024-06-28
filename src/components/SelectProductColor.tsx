type SelectProductColorProps = {
	colors: string[];
	productColor: string;
	setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

const SelectProductColor: React.FC<SelectProductColorProps> = ({
	colors,
	productColor,
	setProductColor,
}) => {
	return (
		<div className='mt-6'>
			<h4 className='font-medium tracking-wider capitalize text-md'>
				colors
			</h4>
			<div className='flex gap-2 mt-3'>
				{colors.map((color) => (
					<button
						key={color}
						type='button'
						className={`rounded-full w-6 h-6 border-2 ${
							color === productColor && 'border-primary'
						}`}
						style={{ backgroundColor: color }}
						onClick={() => setProductColor(color)}
					></button>
				))}
			</div>
		</div>
	);
};

export default SelectProductColor;
