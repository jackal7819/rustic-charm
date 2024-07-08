import { useAppSelector } from '@/hooks';
import { links } from '@/utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks: React.FC = () => {
	const user = useAppSelector((state) => state.userState.user);
	return (
		<div className='items-center justify-center hidden lg:flex gap-x-4'>
			{links.map((link) => {
				const restrictedRoutes =
					link.href === 'checkout' || link.href === 'orders';
				if (restrictedRoutes && !user) {
					return null;
				}
				return (
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
				);
			})}
		</div>
	);
};

export default NavLinks;
