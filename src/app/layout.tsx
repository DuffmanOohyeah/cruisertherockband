import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import '@/styles/globals.css';

const geistSans: NextFontWithVariable = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono: NextFontWithVariable = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const metadata: Metadata = {
	title: 'Cruiser :: The Rock Band',
	description: 'Cruiser the rock band',
};

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	);
};

export { metadata };
export default RootLayout;
