import { links } from '@/utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
	return (
		<div className='items-center justify-center hidden lg:flex gap-x-4'>
			{links.map((link) => (
				<NavLink
					key={link.label}
					to={link.href}
					className={({ isActive }) => {
						return `capitalize font-semibold tracking-wide duration-500 hover:text-primary ${
							isActive ? 'text-primary' : ''
						}`;
					}}
				>
					{link.label}
				</NavLink>
			))}
		</div>
	);
};

export default NavLinks;
