'use client';
import React, { JSX } from 'react';
import Header from '@/components/Header';
import { FaClipboardList } from 'react-icons/fa';
import {
    GigCssProps,
    NavLinksProps,
    ListingsYear,
    ListingsProps,
} from '@/utils/types';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { FcCancel } from 'react-icons/fc';

const navLinks: NavLinksProps[] = [
    { href: '#year26', label: 2026 },
    { href: '#year25', label: 2025 },
    { href: '#year24', label: 2024 },
    { href: '#year23', label: 2023 },
    { href: '#year22', label: 2022 },
    { href: '#year21', label: 2021 },
    { href: '#eDaze', label: 'Early Daze' },
];

const css: GigCssProps = { h1Svg: 'align-middle inline-block mr-[7px]' };

const GigNav = (): JSX.Element => {
    return (
        <nav>
            {navLinks.map((obj: NavLinksProps, idx: number) => {
                return (
                    <span key={obj.label}>
                        <Link href={obj.href} className="link">
                            {obj.label}
                        </Link>
                        {idx + 1 === navLinks.length ? '' : `\u00A0 |\u00A0`}
                    </span>
                );
            })}
        </nav>
    );
};

const GigListings = (props: ListingsYear): JSX.Element => {
    const { year } = props;

    const listings: ListingsProps[] = [
        {
            year: 2026,
            venue: 'Amersham Arms',
            month: 'July',
            location: 'New Cross London UK',
            strike: true,
        },
        {
            year: 2026,
            venue: 'St James Wine Vaults',
            month: 'June',
            location: 'Bath UK',
            strike: true,
        },
        {
            year: 2026,
            venue: 'Priory Football Club',
            month: 'June',
            location: 'Reigate UK',
        },
        {
            year: 2026,
            venue: 'New Cross Inn',
            month: 'January',
            location: 'London UK',
        },
        {
            year: 2025,
            venue: 'The Beehive',
            month: 'July',
            location: 'Bromley-by-Bow London UK',
            notes: '(Acoustic Set)',
        },
        {
            year: 2025,
            venue: 'St James Wine Vaults',
            month: 'June',
            location: 'Bath UK',
        },
        {
            year: 2025,
            venue: 'Priory Football Club',
            month: 'June',
            location: 'Reigate UK',
        },
        {
            year: 2025,
            venue: 'East Street Tap',
            month: 'April',
            location: 'Brighton UK',
            strike: true,
        },
        {
            year: 2025,
            venue: 'Amersham Arms',
            month: 'February',
            location: 'New Cross London UK',
        },
        {
            year: 2024,
            venue: 'Cart & Horses',
            month: 'November',
            location: 'Stratford London UK',
            notes: '(The Stratford Files; EP Release Party)',
        },
        {
            year: 2024,
            venue: 'The Fiddler`s Elbow',
            month: 'June',
            location: 'London UK',
            notes: '(Camden Rocks)',
        },
        {
            year: 2024,
            venue: 'Priory Football Club',
            month: 'June',
            location: 'Reigate UK',
        },
        {
            year: 2024,
            venue: 'The Beehive',
            month: 'April',
            location: 'Bromley-by-Bow London UK',
        },
        {
            year: 2023,
            venue: 'St. Moritz Club',
            month: 'December',
            location: ' Soho London UK',
            notes: '(Come Back Rocky; EP Release Party)',
        },
        {
            year: 2023,
            venue: 'Ram Jam Records',
            month: 'November',
            location: 'Kingston UK',
        },
        {
            year: 2023,
            venue: 'The Oval Tavern',
            month: 'September',
            location: 'East Croydon UK',
        },
        {
            year: 2023,
            venue: 'Venture Inn',
            month: 'August 2023',
            location: 'Reigate, UK',
            strike: true,
        },
        {
            year: 2023,
            venue: 'New Cross Inn',
            month: 'June',
            location: 'London UK',
        },
        {
            year: 2023,
            venue: 'The Fiddler`s Elbow',
            month: 'April',
            location: 'London UK',
            notes: '(Camden Rocks)',
        },
        {
            year: 2023,
            venue: 'New Cross Inn',
            month: 'January',
            location: 'London UK',
        },
        {
            year: 2023,
            venue: 'Hope & Anchor',
            month: 'January',
            location: 'London UK',
        },
        {
            year: 2022,
            venue: 'The Black Heart',
            month: 'October',
            location: 'London UK',
        },
        {
            year: 2022,
            venue: 'The Queen Adelaide',
            month: 'September',
            location: 'Epsom UK',
            notes: '(Charity Event; Ukraine Fundraiser)',
        },
        {
            year: 2022,
            venue: 'The Kings Arms',
            month: 'April',
            location: 'Dorking UK',
            notes: '(Charity Event; Dorking Westival)',
        },
        {
            year: 2022,
            venue: 'The Fiddler`s Elbow',
            month: 'April',
            location: 'London UK',
            notes: '(Camden Rocks)',
        },
        {
            year: 2021,
            venue: 'The Star',
            month: 'Hallowe`en',
            location: 'Dorking UK',
            notes: '(Charity Event; Dorking Westival)',
        },
        {
            year: 'eDaze',
            venue: 'The Dublin Castle',
            location: 'London UK',
        },
        {
            year: 'eDaze',
            venue: 'The Phoenix',
            location: 'London UK',
        },
        { year: 'eDaze', venue: 'West 14', location: 'London UK' },
        {
            year: 'eDaze',
            venue: 'The Betsey Trotwood',
            location: 'London UK',
        },
        {
            year: 'eDaze',
            venue: 'The Louisiana',
            location: 'Bristol UK',
        },
        {
            year: 'eDaze',
            venue: 'The Fleece',
            location: 'Bristol UK',
        },
    ];

    const matchedListings: ListingsProps[] = listings.filter(
        (obj) => obj.year == year
    );

    return (
        <ul className="gigsUl">
            {matchedListings.map((obj, idx) => {
                const {
                    year: objYear,
                    venue,
                    month,
                    location,
                    notes,
                    strike = false,
                } = obj;

                {
                    /*<li key={idx} className={strike ? 'line-through' : ''}>*/
                }

                return (
                    <li key={idx} className={strike ? 'cancelled-gig' : ''}>
                        {venue} - {month}{' '}
                        {objYear == 'eDaze' ? null : `${year};`} {location}{' '}
                        {notes}
                        {strike && <FcCancel />}
                    </li>
                );
            })}
        </ul>
    );
};

const Gigs = (): JSX.Element => {
    return (
        <div id="gigBg" className="pageBg">
            <Header />
            <div className="pageCard w-[90%] md:w-[70%] lg:w-[50%]">
                <h1>
                    <FaClipboardList className={css.h1Svg} /> Gigs :: Upcoming
                    &amp; Past
                </h1>

                <br />
                <GigNav />

                {navLinks.map((obj, idx) => {
                    const { href, label } = obj;
                    const textLabel: string = href.substring(1);

                    return (
                        <div key={idx}>
                            <a id={textLabel} />
                            <h2>{label}</h2>
                            <GigListings
                                {...{
                                    year:
                                        typeof label == 'number'
                                            ? label
                                            : textLabel,
                                }}
                            />
                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
};

export default Gigs;
