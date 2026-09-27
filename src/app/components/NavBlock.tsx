import { NavBlockCssProps } from '@/utils/types';
import React, { JSX } from 'react';
import Link from 'next/link';
import {
    FaClipboardList,
    FaCocktail,
    FaCommentDots,
    FaHome,
    FaMusic,
    FaPhotoVideo,
    FaRegNewspaper,
    FaBullhorn,
} from 'react-icons/fa';

const NavBlock = ({ path, isSticky = true }: NavBlockCssProps): JSX.Element => {
    return (
        <header
            className={`sm:mt-[-20px] ml-[20px] md:mt-[20px] md:max-w-[90%] md:mr-auto md:ml-auto lg:max-w-[80%] ${isSticky ? 'sticky-header' : ''}`}
        >
            <nav className='md:flex lg:flex sm:navBlock'>
                <ul className='list-none gap-[20px] md:flex lg:flex leading-none'>
                    <li>
                        <Link
                            href={'/'}
                            className={`link ${path === '/' ? 'active' : ''}`}
                        >
                            <FaHome className='inline-block align-middle mr-[7px] md:contents lg:inline-block' />
                            Home
                        </Link>
                    </li>
                    <li className='invisible md:visible'>|</li>
                    <li>
                        <Link
                            href={'/music'}
                            className={`link ${
                                path.search(/music/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaMusic className='inline-block align-middle mr-[7px] md:contents lg:inline-block' />
                            Music
                        </Link>
                    </li>
                    <li className='invisible md:visible'>|</li>
                    <li>
                        <Link
                            href={'/pics'}
                            className={`link ${
                                path.search(/pics/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaPhotoVideo className='inline-block align-middle mr-[7px] md:contents lg:inline-block' />
                            Pics
                        </Link>
                    </li>
                    <li className='invisible md:visible'>|</li>
                    <li>
                        <Link
                            href={'/gigs'}
                            className={`link ${
                                path.search(/gigs/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaClipboardList className='inline-block align-middle mr-[7px] md:contents lg:inline-block' />
                            Gigs
                        </Link>
                    </li>
                    <li className='invisible md:visible'>|</li>
                    <li>
                        <Link
                            href={'/socials'}
                            className={`link ${
                                path.search(/socials/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaCocktail className='inline-block align-middle mr-[7px] md:contents lg:inline-block' />
                            Socials
                        </Link>
                    </li>
                    <li className='invisible md:visible'>|</li>
                    <li>
                        <Link
                            href={'/testimonials'}
                            className={`link ${
                                path.search(/testimonials/i) > -1
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <FaRegNewspaper className='inline-block align-middle mr-[7px] md:contents lg:inline-block' />
                            Testimonials
                        </Link>
                    </li>
                    <li className='invisible md:visible'>|</li>
                    <li>
                        <Link
                            href={'/contact'}
                            className={`link ${
                                path.search(/contact/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaCommentDots className='inline-block align-middle mr-[7px] md:contents lg:inline-block' />
                            Contact
                        </Link>
                    </li>
                    <li className='invisible md:visible'>|</li>
                    <li>
                        <Link
                            href={'/epk'}
                            className={`link ${
                                path.search(/epk/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaBullhorn className='inline-block align-middle mr-[7px] md:contents lg:inline-block' />
                            EPK
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBlock;
