'use client';
import React, { JSX, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaBullhorn } from 'react-icons/fa';
import Link from 'next/link';
import {
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

const css = {
    h1Svg: 'align-middle inline-block mr-[7px]',
    svg: 'inline-block align-middle',
};

const EPK = (): JSX.Element => {
    const [modalImg, setModalImg] = useState<string>('');

    const modalCss2 = {
        content: {
            ...modalCss.content,
            maxHeight: '75dvh',
            maxWidth: '75dvw',
            padding: '5px',
        },
    };

    const handleModal = (evt: React.MouseEvent<HTMLImageElement>): void => {
        setModalImg(evt.currentTarget.src);
    };

    return (
        <div id="epkBg" className="pageBg">
            <Header />
            <div className="epkCard w-[90%] md:w-[70%] lg:w-[50%] p-5">
                <div className="grid rows-2">
                    <div className="epkHeroHdr">
                        <h1 className="pt-50">
                            <FaBullhorn className={css.h1Svg} /> Cruiser ::
                            Electronic Press Kit
                        </h1>
                    </div>
                    <div className="pb-1 pt-[clamp(0rem,5vh,2rem)] md:pt-0 lg:pt-0">
                        Power Pop-Punk Rock • Four-Piece • Original Music •
                        South West London
                    </div>
                </div>
                <h2>Bio</h2>
                <div>
                    <FaMusic className={css.svg} /> South West London`s premier
                    power pop-punk four-piece. Delivering sun-soaked,
                    high-octane punk-rock tunes packed with massive melodic
                    hooks; think punk-rock`s answer to the Beach Boys.
                    <br />
                    <br />
                    <FaMusic className={css.svg} /> Cruiser have released two
                    albums, and three EPs. Their first album generated quite a
                    stir on the Bristol music scene and saw Cruiser gain a
                    reputation as a band who could entertain with driving
                    pop-punk, the eponymous album gained rave reviews in the
                    local press.
                </div>
                <br />
                <h2>Music</h2>
                <div className="grid grid-cols-2 gap-5">
                    <iframe
                        style={{
                            borderRadius: '25px',
                            height: 80,
                            width: '100%',
                        }}
                        src="https://open.spotify.com/embed/track/4ovleY5Orokty5hfZ7Jyat?utm_source=generator&theme=0&si=74f5afb7741441b4"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>

                    <iframe
                        style={{
                            borderRadius: '25px',
                            height: 80,
                            width: '100%',
                        }}
                        allow="autoplay; encrypted-media"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A507414066&color=%23FE1504&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></iframe>

                    <iframe
                        style={{
                            borderRadius: '25px',
                            height: 80,
                            width: '100%',
                        }}
                        allow="autoplay; encrypted-media"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A507414162&color=%23FE1504&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></iframe>

                    <iframe
                        style={{
                            borderRadius: '25px',
                            height: 80,
                            width: '100%',
                        }}
                        src="https://open.spotify.com/embed/track/6gAjhxIzhILUAYu0e6d1wp?utm_source=generator&theme=0&si=7dd9cfc5dc5f4046"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
                <br />
                <h2>Photos</h2>
                <div className="grid grid-cols-2 gap-5">
                    <div className="flex items-center justify-center">
                        <img
                            src={'/amersham2.jpg'}
                            style={{
                                borderRadius: '25px',
                            }}
                            className="object-contain"
                            onClick={handleModal}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src={'/sjwv1_bath_0625.jpg'}
                            style={{
                                borderRadius: '25px',
                            }}
                            className="object-contain"
                            onClick={handleModal}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src={'/billy1.jpg'}
                            style={{
                                borderRadius: '25px',
                            }}
                            className="object-contain"
                            onClick={handleModal}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src={'/frontline2.jpg'}
                            style={{
                                borderRadius: '25px',
                            }}
                            className="object-contain"
                            onClick={handleModal}
                        />
                    </div>
                    <Modal
                        isOpen={modalImg ? true : false}
                        onRequestClose={() => {
                            setModalImg('');
                        }}
                        style={modalCss2}
                        ariaHideApp={false}
                    >
                        {modalImg && (
                            <img
                                src={modalImg}
                                className="max-h-full max-w-full object-contain"
                            />
                        )}
                    </Modal>
                </div>
                <br />
                <h2>Videos</h2>
                <div className="grid grid-cols-2 gap-5">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/gtlWD098akA"
                        title="Click Click at the Fiddler`s Elbow, Camden 2022"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>

                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/1tplmULwNvk"
                        title="Monsters at the Fiddler`s Elbow, Camden 2024"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
                <br />
                <h2>Press / Testimonials</h2>
                <ul className="testimonialsUl gap-5">
                    <li className="pb-1">
                        <FaRegHandPeace className={css.svg} />
                        &nbsp; IAAS Music reviews our November 2023 EP `Come
                        Back Rocky` [
                        <Link
                            href="https://www.iaasmusic.com/posts/come-back-rocky-cruiser-ep-review"
                            target="_blank"
                            className="link"
                        >
                            check it out
                        </Link>
                        ]
                    </li>
                    <li className="pb-1">
                        <FaRegHandPeace className={css.svg} />
                        &nbsp; &quot;A fun power pop performance … they remind
                        me of Material Issue.&quot; - SMKB
                    </li>
                    <li className="pb-1">
                        <FaRegHandPeace className={css.svg} />
                        &nbsp; &quot;Fantastic and absolutely brilliant
                        performance&quot; - Metro
                    </li>
                    <li className="pb-1">
                        <FaRegHandPeace className={css.svg} />
                        &nbsp; Joyzine reviews one of our many gigs at The
                        Fiddler`s Elbow [
                        <Link
                            href="https://joyzine.org/2023/05/02/live-in-pictures-camden-rocks-presents-ft-palindrones-burridge-drownd-cruiser-whitenoise-at-the-fiddlers-elbow-london/"
                            target="_blank"
                            className="link"
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
                <br />
                <h2>Contact / Booking</h2>
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-3">
                        <FaRegEnvelope className={css.svg} />
                        &nbsp; Email us at:&nbsp;
                        <span className="blockspam" aria-hidden="true">
                            IGNORED FOR BOTS!
                        </span>
                        cruisertherockband{/* robots */}@{/* get */}
                        outlook{/* f'n */}.{/* lost */}com
                        {/*<Link
                            href={`mailto:cruisertherockband${''}@${''}outlook.${''}com?subject=Your%20Cruiser%20EPK&body=Hi%20Cruiser`}
                            className="link"
                        >
                            Click here
                        </Link>*/}
                    </div>
                    <div>
                        <FaFacebook className={css.svg} />
                        &nbsp;
                        <Link
                            href="https://www.facebook.com/cruisertherockband"
                            target="_blank"
                            className="link"
                        >
                            Facebook
                        </Link>
                    </div>
                    <div>
                        <FaBandcamp className={css.svg} />
                        &nbsp;
                        <Link
                            href="https://cruisertherockband.bandcamp.com"
                            target="_blank"
                            className="link"
                        >
                            Bandcamp
                        </Link>
                    </div>
                    <div>
                        <FaInstagram className={css.svg} />
                        &nbsp;
                        <Link
                            href="https://www.instagram.com/cruisertherockband"
                            target="_blank"
                            className="link"
                        >
                            Instagram
                        </Link>
                    </div>
                    <div>
                        <FaYoutube className={css.svg} />
                        &nbsp;
                        <Link
                            href="https://www.youtube.com/@cruisertherockband8830"
                            target="_blank"
                            className="link"
                        >
                            YouTube
                        </Link>
                    </div>
                    <div>
                        <FaSpotify className={css.svg} />
                        &nbsp;
                        <Link
                            href="https://open.spotify.com/artist/5zYwADqi0cJ5B1f36y8kAB"
                            target="_blank"
                            className="link"
                        >
                            Spotify
                        </Link>
                    </div>
                    <div>
                        <FaItunes className={css.svg} />
                        &nbsp;
                        <Link
                            href="https://music.apple.com/ca/artist/cruiser/1719753719"
                            target="_blank"
                            className="link"
                        >
                            Apple Music
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EPK;
