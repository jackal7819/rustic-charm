import { Moon, Sun } from 'lucide-react';
import { setTheme } from '@/features/themeSlice';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useAppDispatch } from '@/hooks';

const ModeToggle: React.FC = () => {
	const dispatch = useAppDispatch();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-500' />
					<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-500' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					onClick={() => dispatch(setTheme('light'))}
					className='justify-center w-full text-base font-semibold'
				>
					Light
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={() => dispatch(setTheme('dark'))}
					className='justify-center w-full text-base font-semibold'
				>
					Dark
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={() => dispatch(setTheme('system'))}
					className='justify-center w-full text-base font-semibold'
				>
					System
				</DropdownMenuItem>
				<DropdownMenuSeparator />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ModeToggle;
