'use client';
import React, { JSX } from 'react';
import Header from '@/components/Header';
import {
	FaCocktail,
	FaYoutube,
	FaInstagram,
	FaBandcamp,
	FaFacebook,
	FaSpotify,
	FaItunes,
} from 'react-icons/fa';
import { SocialCssProps, SocialHubProps } from '@/utils/types';
import CountUp from 'react-countup';
import Link from 'next/link';
import Footer from '@/components/Footer';

const css: SocialCssProps = {
	svg: 'inline w-7 h-7 align-middle',
	li: 'pt-[15px] pb-[15px] w-[50%] inline-block',
	h1Svg: 'align-middle inline-block mr-[7px]',
};

const getSocialHubs = (): SocialHubProps[] => {
	const rtnArr: SocialHubProps[] = [
		{
			svg: <FaFacebook className={css.svg} />,
			href: 'https://www.facebook.com/cruisertherockband',
			label: 'Facebook',
		},
		{
			svg: <FaBandcamp className={css.svg} />,
			href: 'https://cruisertherockband.bandcamp.com',
			label: 'Bandcamp',
		},
		{
			svg: <FaInstagram className={css.svg} />,
			href: 'https://www.instagram.com/cruisertherockband',
			label: 'Instagram',
		},
		{
			svg: <FaYoutube className={css.svg} />,
			href: 'https://www.youtube.com/@cruisertherockband8830',
			label: 'YouTube',
		},
		{
			svg: <FaSpotify className={css.svg} />,
			href: 'https://open.spotify.com/artist/5zYwADqi0cJ5B1f36y8kAB',
			label: 'Spotify',
		},
		{
			svg: <FaItunes className={css.svg} />,
			href: 'https://music.apple.com/ca/artist/cruiser/1719753719',
			label: 'Apple Music',
		},
	];
	return rtnArr;
};

const Socials = (): JSX.Element => {
	const getHubs = getSocialHubs();

	return (
		<div id='socialsBg' className='pageBg'>
			<Header />
			<div className='pageCard w-[90%] md:w-[70%] lg:w-[50%]'>
				<h1>
					<FaCocktail className={css.h1Svg} /> Socials :: Yes, we`re
					hip
				</h1>
				<br />
				Feel free to check out some of our social
				hubs.&nbsp;&nbsp;&nbsp;
				<CountUp
					end={getHubs.length}
					duration={5}
					className={`rounded-[50%] border-[1px] p-[10px] m-[10px]`}
				/>
				<ul className='socialsUl'>
					{getHubs.map((obj, idx) => {
						const { svg, href, label } = obj;
						return (
							<li className={css.li} key={idx}>
								{svg}&nbsp;
								<Link
									href={href}
									target='_blank'
									className='link'
								>
									{label}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<Footer />
		</div>
	);
};

export default Socials;
