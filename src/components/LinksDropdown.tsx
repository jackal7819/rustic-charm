import { NavLink } from 'react-router-dom';
import { AlignLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { links } from '@/utils/links';

const LinksDropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className='lg:hidden'>
				<Button variant='outline' size='icon'>
					<AlignLeft />
					<span className='sr-only'>Toggle Links</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-32 p-2 lg:hidden'
				align='start'
				sideOffset={25}
			>
				<DropdownMenuLabel className='text-base font-normal cursor-default'>
					Menu
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{links.map((link) => (
					<DropdownMenuItem key={link.label}>
						<NavLink
							to={link.href}
							className={({ isActive }) => {
								return `capitalize w-full ${
									isActive ? 'text-primary' : ''
								}`;
							}}
						>
							<span className='capitalize'>{link.label}</span>
						</NavLink>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LinksDropdown;
