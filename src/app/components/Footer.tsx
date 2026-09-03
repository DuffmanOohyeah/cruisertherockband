import React, { JSX } from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { FooterCssProps } from '@/utils/types';

const getYear = (): number => {
	const dt = new Date();
	const year = dt.getFullYear();
	return year;
};

const css: FooterCssProps = {
	tag: 'text-right w-[80%] md:w-[65%] lg:w-[50%] text-(--color-gray)',
	svg: 'inline-block align-middle mr-[7px]',
};

const Footer = (): JSX.Element => {
	return (
		<footer className={css.tag}>
			<FaRegCopyright className={css.svg} />
			{getYear()}&nbsp;Cruiser The Rock Band.&nbsp;All rights reserved.
		</footer>
	);
};

export default Footer;
