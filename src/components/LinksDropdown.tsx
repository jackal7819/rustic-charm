import { NavLink } from 'react-router-dom';
import { AlignLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
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
				className='p-2 w-52 lg:hidden'
				align='start'
				sideOffset={25}
			>
				{links.map((link) => (
					<>
					<DropdownMenuItem key={link.label}>
						<NavLink
							to={link.href}
							className={({ isActive }) => {
								return `capitalize text-base font-semibold tracking-wide duration-500 w-full text-center ${
									isActive ? 'text-primary' : ''
								}`;
							}}
						>
							{link.label}
						</NavLink>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					</>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LinksDropdown;
