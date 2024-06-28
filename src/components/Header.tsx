import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Button } from './ui/button';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState<{ username: string } | null>({
		username: 'Homer Simpson',
	});

	const handleLogout = () => {
		setUser(null);
		navigate('/');
	};

	return (
		<header>
			<div className='flex justify-center py-2 align-element sm:justify-end'>
				{user ? (
					<div className='flex items-center gap-x-2 sm:gap-x-8'>
						<p className='text-xs sm:text-sm'>
							Hello, {user.username}
						</p>
						<Button variant='link' size='sm' onClick={handleLogout}>
							Logout
						</Button>
					</div>
				) : (
					<div className='flex items-center justify-center -mr-4 gap-x-6'>
						<Button asChild variant='link' size='sm'>
							<Link to='/login'>Sign in / Guest</Link>
						</Button>
						<Button asChild variant='link' size='sm'>
							<Link to='/register'>Create an Account</Link>
						</Button>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
