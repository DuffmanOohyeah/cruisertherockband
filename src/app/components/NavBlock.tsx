import { HeaderCssProps, NavBlockCssProps } from '@/utils/types';
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

const css: HeaderCssProps = {
    svg: 'inline-block align-middle mr-[7px] md:contents lg:inline-block',
    nav: 'md:flex lg:flex sm:navBlock',
    ul: 'list-none gap-[20px] md:flex lg:flex leading-none',
    divider: 'invisible md:visible',
    head: 'sm:mt-[-20px] ml-[20px] md:mt-[20px] md:max-w-[90%] md:mr-auto md:ml-auto lg:max-w-[80%]',
};

const NavBlock = ({ path, isSticky = true }: NavBlockCssProps): JSX.Element => {
    return (
        <header className={`${css.head} ${isSticky && 'sticky-header'}`}>
            <nav className={css.nav}>
                <ul className={css.ul}>
                    <li>
                        <Link
                            href={'/'}
                            className={`link ${path === '/' ? 'active' : ''}`}
                        >
                            <FaHome className={css.svg} />
                            Home
                        </Link>
                    </li>
                    <li className={css.divider}>|</li>
                    <li>
                        <Link
                            href={'/music'}
                            className={`link ${
                                path.search(/music/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaMusic className={css.svg} />
                            Music
                        </Link>
                    </li>
                    <li className={css.divider}>|</li>
                    <li>
                        <Link
                            href={'/pics'}
                            className={`link ${
                                path.search(/pics/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaPhotoVideo className={css.svg} />
                            Pics
                        </Link>
                    </li>
                    <li className={css.divider}>|</li>
                    <li>
                        <Link
                            href={'/gigs'}
                            className={`link ${
                                path.search(/gigs/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaClipboardList className={css.svg} />
                            Gigs
                        </Link>
                    </li>
                    <li className={css.divider}>|</li>
                    <li>
                        <Link
                            href={'/socials'}
                            className={`link ${
                                path.search(/socials/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaCocktail className={css.svg} />
                            Socials
                        </Link>
                    </li>
                    <li className={css.divider}>|</li>
                    <li>
                        <Link
                            href={'/testimonials'}
                            className={`link ${
                                path.search(/testimonials/i) > -1
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <FaRegNewspaper className={css.svg} />
                            Testimonials
                        </Link>
                    </li>
                    <li className={css.divider}>|</li>
                    <li>
                        <Link
                            href={'/contact'}
                            className={`link ${
                                path.search(/contact/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaCommentDots className={css.svg} />
                            Contact
                        </Link>
                    </li>
                    <li className={css.divider}>|</li>
                    <li>
                        <Link
                            href={'/epk'}
                            className={`link ${
                                path.search(/epk/i) > -1 ? 'active' : ''
                            }`}
                        >
                            <FaBullhorn className={css.svg} />
                            EPK
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBlock;
