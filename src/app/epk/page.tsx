'use client';
import React, { JSX, useState, MouseEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
    FaBullhorn,
    FaRegHandPeace,
    FaRegEnvelope,
    FaFacebook,
    FaBandcamp,
    FaInstagram,
    FaYoutube,
    FaSpotify,
    FaItunes,
    FaMusic,
} from 'react-icons/fa';
import Modal from 'react-modal';
import { modalCss } from '../music/page';
// import Image from 'next/image';
import { EmbedsProps, PhotosProps } from './epk.types';

const modalCss2 = {
    content: {
        ...modalCss.content,
        maxHeight: '75dvh',
        maxWidth: '75dvw',
        padding: '5px',
    },
};

const photos: PhotosProps[] = [
    { src: '/amersham2.jpg', alt: 'Cruiser performing in Amersham Arms' },
    { src: '/sjwv1_bath_0625.jpg', alt: 'Cruiser performing in Bath' },
    { src: '/billy1.jpg', alt: 'Our frontman Billy' },
    { src: '/frontline2.jpg', alt: 'Cruiser at the Fiddler`s Elbow' },
];

const musicEmbeds: EmbedsProps[] = [
    {
        src: 'https://open.spotify.com/embed/track/4ovleY5Orokty5hfZ7Jyat?utm_source=generator&theme=0&si=74f5afb7741441b4',
        title: 'I Know',
    },
    {
        src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A507414066&color=%23FE1504&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        title: 'Killer Bees',
    },
    {
        src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A507414162&color=%23FE1504&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        title: 'Click Click',
    },
    {
        src: 'https://open.spotify.com/embed/track/6gAjhxIzhILUAYu0e6d1wp?utm_source=generator&theme=0&si=7dd9cfc5dc5f4046',
        title: 'Godzilla',
    },
];

const videoEmbeds: EmbedsProps[] = [
    {
        src: 'https://www.youtube.com/embed/gtlWD098akA',
        title: 'Click Click at the Fiddler`s Elbow, Camden 2022',
    },
    {
        src: 'https://www.youtube.com/embed/1tplmULwNvk',
        title: 'Monsters at the Fiddler`s Elbow, Camden 2024',
    },
];

const EPK = (): JSX.Element => {
    const [modalImg, setModalImg] = useState<string>('');

    const handleModal = (evt: MouseEvent<HTMLImageElement>): void => {
        setModalImg(evt.currentTarget.src);
    };

    return (
        <div id='epkBg' className='pageBg'>
            <Header />
            <div className='epkCard w-[90%] md:w-[70%] lg:w-[50%] p-5'>
                <div className='epkHeroHdr'>
                    <h1 className='pt-50'>
                        <FaBullhorn className='align-middle inline-block mr-[7px]' />{' '}
                        Cruiser :: Electronic Press Kit
                    </h1>
                </div>
                <div className='pb-1 pt-[clamp(0rem,5vh,2rem)] md:pt-0 lg:pt-0'>
                    Power Pop-Punk Rock • Four-Piece • Original Music • South
                    West London
                </div>
                <h2>Bio</h2>
                <div>
                    <FaMusic className='inline-block align-middle' /> South West
                    London`s premier power pop-punk four-piece. Delivering
                    sun-soaked, high-octane punk-rock tunes packed with massive
                    melodic hooks; think punk-rock`s answer to the Beach Boys.
                    <br />
                    <br />
                    <FaMusic className='inline-block align-middle' /> Cruiser
                    have released two albums, and three EPs. Their first album
                    generated quite a stir on the Bristol music scene and saw
                    Cruiser gain a reputation as a band who could entertain with
                    driving pop-punk, the eponymous album gained rave reviews in
                    the local press.
                </div>
                <h2 className='mt-8'>Music</h2>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                    {musicEmbeds.map((embed, idx) => (
                        <iframe
                            key={idx}
                            src={embed.src}
                            title={embed.title}
                            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                            loading='lazy'
                            className='rounded-3xl h-20 w-full'
                        ></iframe>
                    ))}
                </div>
                <h2 className='mt-8'>Photos</h2>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                    {photos.map((photo, idx) => (
                        <div
                            key={idx}
                            className='flex items-center justify-center'
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className='rounded-3xl object-contain'
                                onClick={handleModal}
                            />
                        </div>
                    ))}
                </div>
                <h2 className='mt-8'>Videos</h2>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                    {videoEmbeds.map((embed, idx) => (
                        <iframe
                            key={idx}
                            src={embed.src}
                            title={embed.title}
                            referrerPolicy='strict-origin-when-cross-origin'
                            allowFullScreen
                            loading='lazy'
                            className='aspect-video w-full rounded-3xl'
                        ></iframe>
                    ))}
                </div>
                <h2 className='mt-8'>Press / Testimonials</h2>
                <ul className='testimonialsUl gap-5'>
                    <li className='pb-1'>
                        <FaRegHandPeace className='inline-block align-middle' />
                        &nbsp; IAAS Music reviews our November 2023 EP `Come
                        Back Rocky` [
                        <a
                            href='https://www.iaasmusic.com/posts/come-back-rocky-cruiser-ep-review'
                            target='_blank'
                            className='link'
                            rel='noopener noreferrer'
                        >
                            check it out
                        </a>
                        ]
                    </li>
                    <li className='pb-1'>
                        <FaRegHandPeace className='inline-block align-middle' />
                        &nbsp; &quot;A fun power pop performance … they remind
                        me of Material Issue.&quot; - SMKB
                    </li>
                    <li className='pb-1'>
                        <FaRegHandPeace className='inline-block align-middle' />
                        &nbsp; &quot;Fantastic and absolutely brilliant
                        performance&quot; - Metro
                    </li>
                    <li className='pb-1'>
                        <FaRegHandPeace className='inline-block align-middle' />
                        &nbsp; Joyzine reviews one of our many gigs at The
                        Fiddler`s Elbow [
                        <a
                            href='https://joyzine.org/2023/05/02/live-in-pictures-camden-rocks-presents-ft-palindrones-burridge-drownd-cruiser-whitenoise-at-the-fiddlers-elbow-london/'
                            target='_blank'
                            className='link'
                            rel='noopener noreferrer'
                        >
                            check it out
                        </a>
                        ]
                    </li>
                    <li>
                        <FaRegHandPeace className='inline-block align-middle' />
                        &nbsp; &quot;Fun band...Punky, great songs...&quot; -
                        Underground Sounds
                    </li>
                </ul>
                <h2 className='mt-8'>Contact / Booking</h2>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='col-span-3'>
                        <FaRegEnvelope className='inline-block align-middle' />
                        &nbsp; Email us at:&nbsp;
                        <span className='blockspam' aria-hidden='true'>
                            IGNORED FOR BOTS!
                        </span>
                        cruisertherockband{/* robots */}@{/* get */}
                        outlook{/* f'n */}.{/* lost */}com
                        {/*<a
                            href={`mailto:cruisertherockband${''}@${''}outlook.${''}com?subject=Your%20Cruiser%20EPK&body=Hi%20Cruiser`}
                            className="link"
                        >
                            Click here
                        </a>*/}
                    </div>
                    <div>
                        <FaFacebook className='inline-block align-middle' />
                        &nbsp;
                        <a
                            href='https://www.facebook.com/cruisertherockband'
                            target='_blank'
                            className='link'
                            rel='noopener noreferrer'
                        >
                            Facebook
                        </a>
                    </div>
                    <div>
                        <FaBandcamp className='inline-block align-middle' />
                        &nbsp;
                        <a
                            href='https://cruisertherockband.bandcamp.com'
                            target='_blank'
                            className='link'
                            rel='noopener noreferrer'
                        >
                            Bandcamp
                        </a>
                    </div>
                    <div>
                        <FaInstagram className='inline-block align-middle' />
                        &nbsp;
                        <a
                            href='https://www.instagram.com/cruisertherockband'
                            target='_blank'
                            className='link'
                            rel='noopener noreferrer'
                        >
                            Instagram
                        </a>
                    </div>
                    <div>
                        <FaYoutube className='inline-block align-middle' />
                        &nbsp;
                        <a
                            href='https://www.youtube.com/@cruisertherockband8830'
                            target='_blank'
                            className='link'
                            rel='noopener noreferrer'
                        >
                            YouTube
                        </a>
                    </div>
                    <div>
                        <FaSpotify className='inline-block align-middle' />
                        &nbsp;
                        <a
                            href='https://open.spotify.com/artist/5zYwADqi0cJ5B1f36y8kAB'
                            target='_blank'
                            className='link'
                            rel='noopener noreferrer'
                        >
                            Spotify
                        </a>
                    </div>
                    <div>
                        <FaItunes className='inline-block align-middle' />
                        &nbsp;
                        <a
                            href='https://music.apple.com/ca/artist/cruiser/1719753719'
                            target='_blank'
                            className='link'
                            rel='noopener noreferrer'
                        >
                            Apple Music
                        </a>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={!!modalImg}
                onRequestClose={() => {
                    setModalImg('');
                }}
                style={modalCss2}
                ariaHideApp={false}
            >
                {modalImg && (
                    <img
                        src={modalImg}
                        className='max-h-full max-w-full object-contain'
                        alt=''
                    />
                )}
            </Modal>
            <Footer />
        </div>
    );
};

export default EPK;
