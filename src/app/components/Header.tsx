'use client';
import React, { JSX, useEffect, useState } from 'react';
import { Events } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { NavBlockCssProps, StickyCssProps } from '@/utils/types';
import NavBlock from '@/components/NavBlock';

const css: StickyCssProps = {
	svg: 'w-7 h-7 p-[5px] bg-(--color-charcoal) border-[1px] rounded border-[1px] border-(--color-red-light)',
	sticky: 'z-1 sticky top-0',
};

const Header = (): JSX.Element => {
	const [isSticky, setIsSticky] = useState<boolean>(true);
	const [showNav, setShowNav] = useState<boolean>(false);
	const path: string = usePathname();
	const navArgs: NavBlockCssProps = { path: path, isSticky: isSticky };

	useEffect(() => {
		Events.scrollEvent.register('begin', () => setIsSticky(true));
		Events.scrollEvent.register('end', () => setIsSticky(false));
		return () => {
			Events.scrollEvent.remove('begin');
			Events.scrollEvent.remove('end');
		};
	}, []);

	return (
		<>
			<div className={`block md:hidden mt-5 ml-5 ${css.sticky}`}>
				<FaBars
					className={css.svg}
					onClick={(evt) => {
						evt.preventDefault();
						setShowNav(!showNav);
					}}
				/>
				{showNav && <NavBlock {...navArgs} />}
			</div>
			<div
				className={`hidden md:block md:mt-[20px] md:mr-auto md:ml-auto ${css.sticky}`}
			>
				<NavBlock {...navArgs} />
			</div>
		</>
	);
};

export default Header;
