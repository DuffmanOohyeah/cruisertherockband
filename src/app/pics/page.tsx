'use client';
import React, { JSX } from 'react';
import Header from '@/components/Header';
import { GalleryClassProps, PicCssProps } from '@/utils/types';
import { FaPhotoVideo } from 'react-icons/fa';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import CountUp from 'react-countup';
import 'react-image-gallery/styles/css/image-gallery.css';
import Footer from '@/components/Footer';

const css: PicCssProps = {
    h1Svg: 'align-middle inline-block mr-[7px]',
    wrap: 'bg-black shadow appearance-none border-[1px] border-(--color-red-light) rounded leading-tight focus:outline-none focus:shadow-outline',
};

const galleryClass: GalleryClassProps = {
    originalClass: '/*max-h-[400px] w-auto*/ object-contain',
    thumbnailClass: 'max-h-[75px] w-auto object-contain',
};

const images: ReactImageGalleryItem[] = [
    {
        original: './reigate_june_26_i.jpeg',
        description: 'New Music Nights - Reigate, June `26',
        thumbnail: './reigate_june_26_i.jpeg',
        ...galleryClass,
    },
    {
        original: './reigate_june_26_ii.jpeg',
        description: 'New Music Nights - Reigate, June `26',
        thumbnail: './reigate_june_26_ii.jpeg',
        ...galleryClass,
    },

    {
        original: '/sjwv1_bath_0625.jpg',
        description: 'Homecoming gig 1 (Bath)',
        thumbnail: '/sjwv1_bath_0625.jpg',
        ...galleryClass,
    },
    {
        original: '/sjwv2_bath_0625.jpg',
        description: 'Homecoming gig 2 (Bath)',
        thumbnail: '/sjwv2_bath_0625.jpg',
        ...galleryClass,
    },
    {
        original: '/sjwv3_bath_0625.jpg',
        description: 'Homecoming gig 3 (Bath)',
        thumbnail: '/sjwv3_bath_0625.jpg',
        ...galleryClass,
    },
    {
        original: '/sjwv4_bath_0625.jpg',
        description: 'St. James Wine Vaults Poster (Bath)',
        thumbnail: '/sjwv4_bath_0625.jpg',
        ...galleryClass,
    },
    {
        original: '/frontline_reigate_0625.jpg',
        description: 'The frontline',
        thumbnail: '/frontline_reigate_0625.jpg',
        ...galleryClass,
    },
    {
        original: '/dan_reigate_0625_ii.jpg',
        description: 'Dan at Reigate',
        thumbnail: '/dan_reigate_0625_ii.jpg',
        ...galleryClass,
    },
    {
        original: '/john_reigate_0625_ii.jpg',
        description: 'John at Reigate',
        thumbnail: '/john_reigate_0625_ii.jpg',
        ...galleryClass,
    },
    {
        original: '/billy_reigate_0625_ii.jpg',
        description: 'Billy at Reigate',
        thumbnail: '/billy_reigate_0625_ii.jpg',
        ...galleryClass,
    },
    {
        original: '/boomer_reigate_0625_ii.jpg',
        description: 'Boomer at Reigate',
        thumbnail: '/boomer_reigate_0625_ii.jpg',
        ...galleryClass,
    },
    {
        original: '/newMusic_reigate_0625.jpg',
        description: 'New Music Nights Poster',
        thumbnail: '/newMusic_reigate_0625.jpg',
        ...galleryClass,
    },
    {
        original: '/powerhouse_0625.jpg',
        description: 'Rehearsal teachings',
        thumbnail: '/powerhouse_0625.jpg',
        ...galleryClass,
    },
    {
        original: '/billy_reigate_0625.jpg',
        description: 'Billy at Reigate',
        thumbnail: '/billy_reigate_0625.jpg',
        ...galleryClass,
    },
    {
        original: '/dan_reigate_0625.jpg',
        description: 'Dan at Reigate',
        thumbnail: '/dan_reigate_0625.jpg',
        ...galleryClass,
    },
    {
        original: '/john_reigate_0625.jpg',
        description: 'John at Reigate',
        thumbnail: '/john_reigate_0625.jpg',
        ...galleryClass,
    },
    {
        original: '/boomer_reigate_0625.jpg',
        description: 'Boomer at Reigate',
        thumbnail: '/boomer_reigate_0625.jpg',
        ...galleryClass,
    },
    {
        original: '/billy1.jpg',
        description: 'Sing on Billy',
        thumbnail: '/billy1.jpg',
        ...galleryClass,
    },
    {
        original: '/cheers1.jpg',
        description: 'Having a pre-gig pint',
        thumbnail: '/cheers1.jpg',
        ...galleryClass,
    },
    {
        original: '/contact1.jpg',
        description: 'John: Cruiser`s backbone',
        thumbnail: '/contact1.jpg',
        ...galleryClass,
    },
    {
        original: '/eddie.jpg',
        description: 'Rythym section with Iron Maidens` Eddie',
        thumbnail: '/eddie.jpg',
        ...galleryClass,
    },
    {
        original: '/fiddlers2.jpg',
        description: 'The front line at The Fiddler`s Elbow',
        thumbnail: '/fiddlers2.jpg',
        ...galleryClass,
    },
    {
        original: '/gear.png',
        description: 'Just the usual gig set-up',
        thumbnail: '/gear.png',
        ...galleryClass,
    },
    {
        original: '/mr_cool.jpg',
        description: 'Dan the man a.k.a. Mr. Cool',
        thumbnail: '/mr_cool.jpg',
        ...galleryClass,
    },
    {
        original: '/billy2.jpg',
        description: 'Rock god Billy',
        thumbnail: '/billy2.jpg',
        ...galleryClass,
    },
    {
        original: '/frontline1.jpg',
        description: 'The front line',
        thumbnail: '/frontline1.jpg',
        ...galleryClass,
    },
    {
        original: '/boomer1.jpg',
        description: 'Boomer on da bass',
        thumbnail: '/boomer1.jpg',
        ...galleryClass,
    },
    {
        original: '/ovaltavern1.jpg',
        description: 'In the midst of another fun gig',
        thumbnail: '/ovaltavern1.jpg',
        ...galleryClass,
    },
    {
        original: '/dan1.jpg',
        description: 'Dan the shredder',
        thumbnail: '/dan1.jpg',
        ...galleryClass,
    },
    {
        original: '/guitars1.jpg',
        description: 'Guitars: Rockin` out',
        thumbnail: '/guitars1.jpg',
        ...galleryClass,
    },
    {
        original: '/frontline2.jpg',
        description: 'The front line II',
        thumbnail: '/frontline2.jpg',
        ...galleryClass,
    },
    {
        original: '/halloween.jpg',
        description: 'Halloween gig in Dorking',
        thumbnail: '/halloween.jpg',
        ...galleryClass,
    },
    {
        original: '/lineup1.jpg',
        description: 'Cheesy vinyl album cover?',
        thumbnail: '/lineup1.jpg',
        ...galleryClass,
    },
    {
        original: '/john1.jpg',
        description: 'John: Blurring the groove',
        thumbnail: '/john1.jpg',
        ...galleryClass,
    },
    {
        original: '/poster1.jpg',
        description: 'Gig poster',
        thumbnail: '/poster1.jpg',
        ...galleryClass,
    },
    {
        original: '/dan2.jpg',
        description: 'Dan: You lookin` at me?',
        thumbnail: '/dan2.jpg',
        ...galleryClass,
    },
    {
        original: '/boomer2.jpg',
        description: 'Boomer on the BVs',
        thumbnail: '/boomer2.jpg',
        ...galleryClass,
    },
    {
        original: '/promo1.jpg',
        description: 'Promo pic I',
        thumbnail: '/promo1.jpg',
        ...galleryClass,
    },
    {
        original: '/studio1.jpg',
        description: 'Practice up',
        thumbnail: '/studio1.jpg',
        ...galleryClass,
    },
    {
        original: '/amersham1.jpg',
        description: 'Amersham Arms I',
        thumbnail: '/amersham1.jpg',
        ...galleryClass,
    },
    {
        original: '/stratfordfiles1.jpg',
        description: 'EP cover',
        thumbnail: '/stratfordfiles1.jpg',
        ...galleryClass,
    },
    {
        original: '/outside1.jpg',
        description: 'Just chillin`',
        thumbnail: '/outside1.jpg',
        ...galleryClass,
    },
    {
        original: '/boomer3.jpg',
        description: 'Boomer`s checking you out',
        thumbnail: '/boomer3.jpg',
        ...galleryClass,
    },
    {
        original: '/frontline3.jpg',
        description: 'The front line III',
        thumbnail: '/frontline3.jpg',
        ...galleryClass,
    },
    {
        original: '/john2.jpg',
        description: 'John: in the studio',
        thumbnail: '/john2.jpg',
        ...galleryClass,
    },
    {
        original: '/promo2.jpg',
        description: 'Promo pic II',
        thumbnail: '/promo2.jpg',
        ...galleryClass,
    },
    {
        original: '/boomer4.jpg',
        description: 'Boomer: What are these notes?',
        thumbnail: '/boomer4.jpg',
        ...galleryClass,
    },
    {
        original: '/frontline4.jpg',
        description: 'The front line IV',
        thumbnail: '/frontline4.jpg',
        ...galleryClass,
    },

    {
        original: '/amersham2.jpg',
        description: 'Amersham Arms II',
        thumbnail: '/amersham2.jpg',
        ...galleryClass,
    },
    {
        original: '/promo3.jpg',
        description: 'Promo pic III',
        thumbnail: '/promo3.jpg',
        ...galleryClass,
    },
    {
        original: '/dorking1.jpg',
        description: 'Dorking: Charity event',
        thumbnail: '/dorking1.jpg',
        ...galleryClass,
    },
];

const Pics = (): JSX.Element => {
    return (
        <div id="picsBg" className="pageBg">
            <Header />
            <div className="pageCard w-[90%] md:w-[70%] lg:w-[50%]">
                <h1>
                    <FaPhotoVideo className={css.h1Svg} /> Pics :: Damn pretty
                    boyz
                </h1>
                <br />
                Take a peek at these handsome gentlemen.&nbsp;&nbsp;&nbsp;
                <CountUp
                    end={images.length}
                    duration={5}
                    className={`rounded-[50%] border-[1px] p-[10px] m-[10px]`}
                />
                <br />
                <br />
                <div className={css.wrap}>
                    <ImageGallery items={images} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Pics;
