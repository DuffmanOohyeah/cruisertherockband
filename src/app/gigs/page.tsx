'use client';
import React, { JSX } from 'react';
import Header from '@/components/Header';
import { FaClipboardList } from 'react-icons/fa';
import { NavLinksProps, ListingsYear, ListingsProps } from '@/utils/types';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { FcCancel } from 'react-icons/fc';

const navLinks: NavLinksProps[] = [
    { href: '#year27', label: 2027, id: 'year27' },
    { href: '#year26', label: 2026, id: 'year26' },
    { href: '#year25', label: 2025, id: 'year25' },
    { href: '#year24', label: 2024, id: 'year24' },
    { href: '#year23', label: 2023, id: 'year23' },
    { href: '#year22', label: 2022, id: 'year22' },
    { href: '#year21', label: 2021, id: 'year21' },
    { href: '#eDaze', label: 'Early Daze', id: 'eDaze' },
];

const listings: ListingsProps[] = [
    {
        year: 2027,
        venue: 'Thames Side Brewery',
        month: 'February',
        location: 'Staines-Upon-Thames UK',
        strike: false,
    },
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

const listingsByYear = listings.reduce<
    Record<string | number, ListingsProps[]>
>((acc, listing) => {
    (acc[listing.year] ??= []).push(listing);
    return acc;
}, {});

const GigNav = (): JSX.Element => {
    return (
        <nav>
            {navLinks.map((nav: NavLinksProps, idx: number) => {
                const { href, label } = nav;
                return (
                    <span key={idx}>
                        <Link href={href} className='link'>
                            {label}
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
    const matchedListings: ListingsProps[] = listingsByYear[year] ?? [];

    return (
        <ul className='gigsUl'>
            {matchedListings.map((obj, idx) => {
                const {
                    year: objYear,
                    venue,
                    month,
                    location,
                    notes,
                    strike = false,
                } = obj;

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
        <div id='gigBg' className='pageBg'>
            <Header />
            <div className='pageCard w-[90%] md:w-[70%] lg:w-[50%]'>
                <h1>
                    <FaClipboardList className='align-middle inline-block mr-[7px]' />{' '}
                    Gigs :: Upcoming &amp; Past
                </h1>

                <br />
                <GigNav />

                {navLinks.map((obj, idx) => {
                    const { label, id } = obj;
                    const year = typeof label === 'number' ? label : id;

                    return (
                        <div key={idx}>
                            <a id={id} />
                            <h2>{label}</h2>
                            <GigListings year={year} />
                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
};

export default Gigs;
