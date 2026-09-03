import React, { JSX } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import { HomeCssProps } from '@/utils/types';
import Footer from '@/components/Footer';

const css: HomeCssProps = {
	logo: 'm-auto block',
};

const Home = (): JSX.Element => {
	return (
		<div id='homeBg' className='pageBg'>
			<Header />
			<div className='pageCard w-[90%] md:w-[70%] lg:w-[50%]'>
				<Image
					src='/logo.jpg'
					alt='Cruiser logo'
					width='711'
					height='166'
					className={css.logo}
				/>
				<br />
				<br />
				Cruiser have released two albums, and three EPs. Their first
				album generated quite a stir on the Bristol music scene and saw
				Cruiser gain a reputation as a band who could entertain with
				driving pop-punk, the eponymous album gained rave reviews in the
				local press.
				<br />
				<br />
				The following year Cruiser released `Cosmonaut`, their second
				album, with a mixture of pop-punk and catchy tunes including
				`Cosmonaut`, `Golden Gate` and `Emily`.
				<br />
				<br />
				After those albums Cruiser created the `Killer Bees` EP, this
				moved the sound on from pure pop-punk to a more rock-punk feel -
				again well received by fans and reviewers alike.
				<br />
				<br />
				Keeping our creativiy alive during the Covid pandemic, we
				remotely wrote and collaborated on some new material. A new EP
				was born; `Come Back Rocky` (November 2023) was our brainchild
				of this global lockdown. Housing five songs, some new, some
				remastered; we are very proud of our work on this release.
				<br />
				<br />
				Our most recent EP, `The Stratford Files`, was completed in
				November 2024. The sound of this album was intended to be
				produced as a raw/stripped-down project (aka live in studio) -
				meaning that there was no instrument/track layering in the mix;
				all four members played together in real-time, with only the
				vocals being overlaid later. Our goal was to give a respectable
				nod to our punk forefathers.
				<br />
				<br />
				As a four-piece originals rock band, Cruiser describe their
				music as (power) pop-punk. Playing out of southwest London, with
				punk-rock tunes filled with melodic lyrics – punk-rocks’ answer
				to the Beach Boys!
				<br />
				<br />
				Cruiser love to play live - giving the audience a fun evening of
				pop-punk. We&apos;re a tight group, and we enjoy rocking out for
				our fans - both existing and new.
			</div>
			<Footer />
		</div>
	);
};

export default Home;
