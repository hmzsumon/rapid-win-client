import React from 'react';
import Profile from '@/assets/images/profile.png';
import {
	Navbar,
	Typography,
	IconButton,
	Avatar,
	Drawer,
	Button,
} from '@material-tailwind/react';
import { BiSolidWallet } from 'react-icons/bi';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Sidebar } from './Sidebar';
import { maskEmail } from '@/utils/functions';
import CopyBtnIcon from '@/global/CopyBtnIcon';
export default function Header() {
	const [openRight, setOpenRight] = React.useState(false);
	const openDrawerRight = () => setOpenRight(true);
	const closeDrawerRight = () => setOpenRight(false);
	const isAuth = false;

	return (
		<>
			<Navbar className='fixed z-10 max-w-full px-4 py-2 border-0 rounded-none bg-black_2 top h-max lg:px-8 lg:py-4'>
				<div className='flex items-center justify-between text-blue-gray-100'>
					<Typography
						as='a'
						href='#'
						className='mr-4 cursor-pointer py-1.5 font-medium'
					>
						Rapid Win
					</Typography>
					{isAuth ? (
						<div className='flex items-center gap-4'>
							<div className='px-2 py-1 mr-4 bg-gray-900 rounded-md '>
								<span>$1000.00</span>
								<BiSolidWallet className='inline-block ml-2 text-xl' />
							</div>

							<Avatar
								src={Profile}
								size='sm'
								alt='avatar'
								withBorder={true}
								className='p-0.5 cursor-pointer'
								onClick={openDrawerRight}
							/>
						</div>
					) : (
						<div className='flex gap-2 '>
							<Button size='sm' color='green'>
								Login
							</Button>
							<Button size='sm' color='amber'>
								<span className='text-blue-gray-900'>Sign Up</span>
							</Button>
						</div>
					)}
				</div>
			</Navbar>
			<div>
				<Drawer
					placement='right'
					open={openRight}
					onClose={closeDrawerRight}
					className='bg-black_2 inset-y-0 w-[17rem] md:w-[20rem] lg:w-[25rem]'
				>
					<div className='flex items-center justify-between px-4 pt-4 mb-6'>
						<div>
							<Typography variant='small' className='text-blue-gray-400'>
								{maskEmail('zakaria@gmail.com')}
							</Typography>
							<Typography variant='small' className='text-blue-gray-400'>
								Usernam: zakaria123
							</Typography>
							<div className='flex items-center'>
								<Typography variant='small' className='text-blue-gray-400'>
									User ID: 123456789
								</Typography>
								<CopyBtnIcon textData='123456789' />
							</div>
						</div>
						<div>
							<IconButton
								variant='text'
								color='blue-gray'
								onClick={closeDrawerRight}
							>
								<XMarkIcon strokeWidth={2} className='w-5 h-5' />
							</IconButton>
						</div>
					</div>
					<hr className='border-blue-gray-900' />
					<Sidebar />
				</Drawer>
			</div>
		</>
	);
}
