'use client';
import React, { JSX } from 'react';
import Header from '@/components/Header';
import {
	FaRegHandPeace,
	FaRegNewspaper,
	FaRegStickyNote,
	FaRegThumbsUp,
} from 'react-icons/fa';
import { TesimonialCssProps } from '@/utils/types';
import Link from 'next/link';
import Footer from '@/components/Footer';

const css: TesimonialCssProps = {
	nb: 'w-[90%] mr-auto ml-auto pt-[25px]',
	thx: 'pt-[25px] w-[80%] ml-auto',
	svg: 'inline-block align-middle',
	h1Svg: 'align-middle inline-block mr-[7px]',
};

const Testimonials = (): JSX.Element => {
	return (
		<div id='testimonialBg' className='pageBg'>
			<Header />
			<div className='pageCard w-[90%] md:w-[70%] lg:w-[50%]'>
				<h1>
					<FaRegNewspaper className={css.h1Svg} />
					Testimonials :: Press &amp; Ego Boosts
				</h1>
				<br />
				<ul className='testimonialsUl'>
					<li>
						<FaRegHandPeace className={css.svg} />
						&nbsp; IAAS Music reviews our November 2023 EP `Come
						Back Rocky` [
						<Link
							href='https://www.iaasmusic.com/posts/come-back-rocky-cruiser-ep-review'
							target='_blank'
							className='link'
						>
							check it out
						</Link>
						]
					</li>
					<li>
						<FaRegHandPeace className={css.svg} />
						&nbsp; &quot;A fun power pop performance … they remind
						me of Material Issue.&quot; - SMKB
					</li>
					<li>
						<FaRegHandPeace className={css.svg} />
						&nbsp; &quot;Fantastic and absolutely brilliant
						performance&quot; - Metro
					</li>
					<li>
						<FaRegHandPeace className={css.svg} />
						&nbsp; Joyzine reviews one of our many gigs at The
						Fiddler`s Elbow [
						<Link
							href='https://joyzine.org/2023/05/02/live-in-pictures-camden-rocks-presents-ft-palindrones-burridge-drownd-cruiser-whitenoise-at-the-fiddlers-elbow-london/'
							target='_blank'
							className='link'
						>
							check it out
						</Link>
						]
					</li>
					<li>
						<FaRegHandPeace className={css.svg} />
						&nbsp; &quot;Fun band...Punky, great songs...&quot; -
						Underground Sounds
					</li>
				</ul>
				<div className={css.nb}>
					<FaRegStickyNote className={css.svg} />
					&nbsp; N.B., we wish to thank our awesome `go to` engineer
					for masterminding out last two EP`s (Come Back Rocky and The
					Stratford Files). Much love to Alex McGowan of&nbsp;
					<Link
						href='https://www.facebook.com/SpaceEkoEastRecordingStudio'
						target='_blank'
						className='link'
					>
						Space Eko East Recording Studio
					</Link>
					&nbsp; - keep on rockin`.
				</div>
				<div className={css.thx}>
					<FaRegThumbsUp className={css.svg} />
					&nbsp; Cruiser wishes to thank all contributors for taking
					the time to review our music - it`s very much appreciated.
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Testimonials;
