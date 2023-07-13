import React from 'react';
import Header from './Header/Header';
import FooterNav from './Footer/FooterNav';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<div className='px-2 py-10'>{children}</div>
			<FooterNav />
		</>
	);
};

export default Layout;
