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
import { SocialHubProps } from '@/utils/types';
import CountUp from 'react-countup';
import Link from 'next/link';
import Footer from '@/components/Footer';

const socialHubs: SocialHubProps[] = [
    {
        svg: <FaFacebook className='inline w-7 h-7 align-middle' />,
        href: 'https://www.facebook.com/cruisertherockband',
        label: 'Facebook',
    },
    {
        svg: <FaBandcamp className='inline w-7 h-7 align-middle' />,
        href: 'https://cruisertherockband.bandcamp.com',
        label: 'Bandcamp',
    },
    {
        svg: <FaInstagram className='inline w-7 h-7 align-middle' />,
        href: 'https://www.instagram.com/cruisertherockband',
        label: 'Instagram',
    },
    {
        svg: <FaYoutube className='inline w-7 h-7 align-middle' />,
        href: 'https://www.youtube.com/@cruisertherockband8830',
        label: 'YouTube',
    },
    {
        svg: <FaSpotify className='inline w-7 h-7 align-middle' />,
        href: 'https://open.spotify.com/artist/5zYwADqi0cJ5B1f36y8kAB',
        label: 'Spotify',
    },
    {
        svg: <FaItunes className='inline w-7 h-7 align-middle' />,
        href: 'https://music.apple.com/ca/artist/cruiser/1719753719',
        label: 'Apple Music',
    },
];

const Socials = (): JSX.Element => {
    return (
        <div id='socialsBg' className='pageBg'>
            <Header />
            <div className='pageCard w-[90%] md:w-[70%] lg:w-[50%]'>
                <h1>
                    <FaCocktail className='align-middle inline-block mr-[7px]' />{' '}
                    Socials :: Yes, we`re hip
                </h1>
                <br />
                Feel free to check out some of our social
                hubs.&nbsp;&nbsp;&nbsp;
                <CountUp
                    end={socialHubs.length}
                    duration={5}
                    className='rounded-[50%] border-[1px] p-[10px] m-[10px]'
                />
                <ul className='socialsUl'>
                    {socialHubs.map((obj, idx) => {
                        const { svg, href, label } = obj;
                        return (
                            <li
                                className='pt-[15px] pb-[15px] w-[50%] inline-block'
                                key={idx}
                            >
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
