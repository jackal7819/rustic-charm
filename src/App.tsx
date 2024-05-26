import { Button } from './components/ui/button';
import { useAppSelector } from './hooks';

const App = () => {
	const { name } = useAppSelector((state) => state.userState);
	console.log(name);
  
	return (
		<div>
			<h1 className='text-3xl underline'>Hello world!</h1>
			<Button variant='destructive' className='text-base'>
				Destructive
			</Button>
		</div>
	);
};

export default App;
