import {
	Typography,
	List,
	ListItem,
	ListItemPrefix,
} from '@material-tailwind/react';

import { BiWallet } from 'react-icons/bi';
import { CiBadgeDollar } from 'react-icons/ci';
import { MdDashboardCustomize, MdPowerSettingsNew } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { FiUserPlus } from 'react-icons/fi';

const sideItems = [
	{
		id: 1,
		title: 'Dashboard',
		icon: <MdDashboardCustomize />,
		link: '/',
	},
	{
		id: 2,
		title: 'Profile',
		icon: <FaRegUserCircle />,
		link: '/profile',
	},
	{
		id: 3,
		title: 'Wallet',
		icon: <BiWallet />,
		link: '/wallet',
	},
	{
		id: 4,
		title: 'Referral',
		icon: <FiUserPlus />,
		link: '/referral',
	},
	{
		id: 5,
		title: 'Rewards',
		icon: <CiBadgeDollar />,
		link: '/rewards',
	},
	{
		id: 6,
		title: 'Settings',
		icon: <IoIosSettings />,
		link: '/settings',
	},
	{
		id: 7,
		title: 'Logout',
		icon: <MdPowerSettingsNew />,
		link: '/logout',
	},
];

export function Sidebar() {
	return (
		<>
			<div className='text-blue-gray-100 !important'>
				<List>
					{sideItems.map((item) => (
						<ListItem
							key={item.id}
							className='mb-1 text-blue-gray-100 cursor-pointer'
							onClick={() => console.log('clicked')}
						>
							<ListItemPrefix className=' text-2xl'>{item.icon}</ListItemPrefix>
							<Typography>{item.title}</Typography>
						</ListItem>
					))}
				</List>
			</div>
		</>
	);
}
