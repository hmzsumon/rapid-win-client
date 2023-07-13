import { Navbar } from '@material-tailwind/react';
import { HiHome } from 'react-icons/hi';
import { IoGameController } from 'react-icons/io5';
import { GiGamepadCross } from 'react-icons/gi';
import { ImShare } from 'react-icons/im';
import { PiPokerChipBold } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

const menuItems = [
	{
		id: 1,
		title: 'Home',
		link: '/',
		icon: <HiHome />,
	},
	{
		id: 2,
		title: 'Games',
		link: '/games',
		icon: <IoGameController />,
	},
	{
		id: 3,
		title: 'Win',
		link: '/win',
		icon: <GiGamepadCross />,
	},
	{
		id: 5,
		title: 'Live',
		link: '/live',
		icon: <PiPokerChipBold />,
	},
	{
		id: 4,
		title: 'Share',
		link: '/share',
		icon: <ImShare />,
	},
];

export default function FooterNav() {
	return (
		<>
			<Navbar className='fixed bottom-0 bg-black_2 border-0  z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4'>
				<div>
					<div>
						<ul className='flex  items-center justify-between w-full'>
							{menuItems.map((item) => (
								<NavLink
									to={item.link}
									className={(data) =>
										`flex gap-1 flex-col items-center hover:text-yellow-800 ${
											data.isActive ? 'text-yellow-800' : 'text-blue-gray-100'
										} `
									}
								>
									<span className='text-xl md:text-2xl'>{item.icon}</span>
									<span className='text-xs md:text-sm'>{item.title}</span>
								</NavLink>
							))}
						</ul>
					</div>
				</div>
			</Navbar>
		</>
	);
}
