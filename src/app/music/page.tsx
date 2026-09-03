'use client';
import React, { JSX, useState } from 'react';
import Header from '@/components/Header';
import {
    FaMusic,
    FaYoutube,
    FaSoundcloud,
    FaFacebook,
    FaRegFileVideo,
    FaRegFileAudio,
} from 'react-icons/fa';
import {
    EmbedAudioProps,
    EmbedVideoProps,
    MusicCssProps,
    FbVideoProps,
} from '@/utils/types';
import Modal from 'react-modal';
import EmbedAudio, { audioAtts } from '@/components/EmbedAudio';
import EmbedVideo, { videoAtts, fbVideoAtts } from '@/components/EmbedVideo';
import CountUp from 'react-countup';
import Link from 'next/link';
import Footer from '@/components/Footer';

const css: MusicCssProps = {
    h1Svg: 'align-middle inline-block mr-[7px]',
    li: 'pt-[15px] pb-[15px] w-[50%] inline-block',
    svg: 'inline w-5 h-5 align-middle',
};

const modalCss = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid var(--color-red-light)',
        background: 'var(--color-charcoal)',
    },
};

const videoArr: EmbedVideoProps[] = videoAtts();
const audioArr: EmbedAudioProps[] = audioAtts();
const fbVideos: FbVideoProps[] = fbVideoAtts();

const Music = (): JSX.Element => {
    const [showVideoTab, setShowVideoTab] = useState<boolean>(true);
    const [showAudioTab, setShowAudioTab] = useState<boolean>(false);

    /* start: youtube modal vars */
    const [isModal0Open, setIsModal0Open] = useState<boolean>(false);
    const [isModal1Open, setIsModal1Open] = useState<boolean>(false);
    const [isModal2Open, setIsModal2Open] = useState<boolean>(false);
    const [isModal3Open, setIsModal3Open] = useState<boolean>(false);
    const [isModal4Open, setIsModal4Open] = useState<boolean>(false);
    const [isModal5Open, setIsModal5Open] = useState<boolean>(false);
    const [isModal6Open, setIsModal6Open] = useState<boolean>(false);
    const [isModal7Open, setIsModal7Open] = useState<boolean>(false);
    const [isModal8Open, setIsModal8Open] = useState<boolean>(false);
    const [isModal9Open, setIsModal9Open] = useState<boolean>(false);
    /* end: youtube modal vars */

    /* start: fb modals */
    const [isModal100Open, setIsModal100Open] = useState<boolean>(false);
    /* end: fb modals */

    /* start: soundcloud modal vars */
    const [isModal1000Open, setIsModal1000Open] = useState<boolean>(false);
    const [isModal1001Open, setIsModal1001Open] = useState<boolean>(false);
    const [isModal1002Open, setIsModal1002Open] = useState<boolean>(false);
    const [isModal1003Open, setIsModal1003Open] = useState<boolean>(false);
    const [isModal1004Open, setIsModal1004Open] = useState<boolean>(false);
    const [isModal1005Open, setIsModal1005Open] = useState<boolean>(false);
    const [isModal1006Open, setIsModal1006Open] = useState<boolean>(false);
    const [isModal1007Open, setIsModal1007Open] = useState<boolean>(false);
    const [isModal1008Open, setIsModal1008Open] = useState<boolean>(false);
    const [isModal1009Open, setIsModal1009Open] = useState<boolean>(false);
    const [isModal1010Open, setIsModal1010Open] = useState<boolean>(false);
    /* end: soundcloud modal vars */

    const isModalOpen = (idx: number): boolean => {
        let rtnBln: boolean = false;
        switch (idx) {
            /* start: youtube modals */
            case 0:
                rtnBln = isModal0Open;
                break;
            case 1:
                rtnBln = isModal1Open;
                break;
            case 2:
                rtnBln = isModal2Open;
                break;
            case 3:
                rtnBln = isModal3Open;
                break;
            case 4:
                rtnBln = isModal4Open;
                break;
            case 5:
                rtnBln = isModal5Open;
                break;
            case 6:
                rtnBln = isModal6Open;
                break;
            case 7:
                rtnBln = isModal7Open;
                break;
            case 8:
                rtnBln = isModal8Open;
                break;
            case 9:
                rtnBln = isModal9Open;
                break;
            /* end: youtube modals */

            /* start: fb modals */
            case 100:
                rtnBln = isModal100Open;
                break;
            /* end: fb modals */

            /* start: soundcloud modals */
            case 1000:
                rtnBln = isModal1000Open;
                break;
            case 1001:
                rtnBln = isModal1001Open;
                break;
            case 1002:
                rtnBln = isModal1002Open;
                break;
            case 1003:
                rtnBln = isModal1003Open;
                break;
            case 1004:
                rtnBln = isModal1004Open;
                break;
            case 1005:
                rtnBln = isModal1005Open;
                break;
            case 1006:
                rtnBln = isModal1006Open;
                break;
            case 1007:
                rtnBln = isModal1007Open;
                break;
            case 1008:
                rtnBln = isModal1008Open;
                break;
            case 1009:
                rtnBln = isModal1009Open;
                break;
            case 1010:
                rtnBln = isModal1010Open;
                break;
            /* end: soundcloud modals */
        }
        return rtnBln;
    };

    const openModal = (idx: number): void => {
        closeModals();
        switch (idx) {
            /* start: youtube modals */
            case 0:
                setIsModal0Open(true);
                break;
            case 1:
                setIsModal1Open(true);
                break;
            case 2:
                setIsModal2Open(true);
                break;
            case 3:
                setIsModal3Open(true);
                break;
            case 4:
                setIsModal4Open(true);
                break;
            case 5:
                setIsModal5Open(true);
                break;
            case 6:
                setIsModal6Open(true);
                break;
            case 7:
                setIsModal7Open(true);
                break;
            case 8:
                setIsModal8Open(true);
                break;
            case 9:
                setIsModal9Open(true);
                break;
            /* end: youtube modals */

            /* start: fb modals */
            case 100:
                setIsModal100Open(true);
                break;
            /* end: fb modals */

            /* start: soundcloud modals */
            case 1000:
                setIsModal1000Open(true);
                break;
            case 1001:
                setIsModal1001Open(true);
                break;
            case 1002:
                setIsModal1002Open(true);
                break;
            case 1003:
                setIsModal1003Open(true);
                break;
            case 1004:
                setIsModal1004Open(true);
                break;
            case 1005:
                setIsModal1005Open(true);
                break;
            case 1006:
                setIsModal1006Open(true);
                break;
            case 1007:
                setIsModal1007Open(true);
                break;
            case 1008:
                setIsModal1008Open(true);
                break;
            case 1009:
                setIsModal1009Open(true);
                break;
            case 1010:
                setIsModal1010Open(true);
                break;
            /* end: soundcloud modals */
        }
    };

    const closeModals = (): void => {
        /* start: youtube modals */
        setIsModal0Open(false);
        setIsModal1Open(false);
        setIsModal2Open(false);
        setIsModal3Open(false);
        setIsModal4Open(false);
        setIsModal5Open(false);
        setIsModal6Open(false);
        setIsModal7Open(false);
        setIsModal8Open(false);
        setIsModal9Open(false);
        /* end: youtube modals */

        /* start: fb modals */
        setIsModal100Open(false);
        /* end: fb modals */

        /* start: soundcloud modals */
        setIsModal1000Open(false);
        setIsModal1001Open(false);
        setIsModal1002Open(false);
        setIsModal1003Open(false);
        setIsModal1004Open(false);
        setIsModal1005Open(false);
        setIsModal1006Open(false);
        setIsModal1007Open(false);
        setIsModal1008Open(false);
        setIsModal1009Open(false);
        setIsModal1010Open(false);
        /* end: soundcloud modals */
    };

    return (
        <div id="musicBg" className="pageBg">
            <Header />
            <div className="pageCard w-[90%] md:w-[70%] lg:w-[50%]">
                <h1>
                    <FaMusic className={css.h1Svg} /> Music :: Our Pride &amp;
                    Joy
                </h1>
                <br />
                Feel free to check out some of our tunes.
                <div className="flex font-(--font-weight-bold) text-center pt-[20px]">
                    <div
                        className={`p-[15px] w-[50%] ${
                            showVideoTab
                                ? 'bg-(--color-charcoal) rounded border-[1px] border-(--color-red-light)'
                                : ''
                        }`}
                    >
                        <Link
                            href="#"
                            className={
                                showVideoTab
                                    ? 'text-(--color-gold-light) hover:text-(--color-gold-dark)'
                                    : 'text-(--color-gold-dark) hover:text-(--color-gold-light)'
                            }
                            onClick={(evt) => {
                                evt.preventDefault();
                                setShowVideoTab(true);
                                setShowAudioTab(false);
                            }}
                        >
                            <FaRegFileVideo className={css.svg} />
                            &nbsp;&nbsp;&nbsp;Video&nbsp;&nbsp;&nbsp;
                            <CountUp
                                end={videoArr.length + fbVideos.length}
                                duration={5}
                                // suffix=' files'
                                className={`rounded-[50%] border-[1px] p-[10px] m-[10px]`}
                            />
                        </Link>
                    </div>
                    <div
                        className={`p-[15px] w-[50%] ${
                            showAudioTab
                                ? 'bg-(--color-charcoal) rounded border-[1px] border-(--color-red-light)'
                                : ''
                        }`}
                    >
                        <Link
                            href="#"
                            className={
                                showAudioTab
                                    ? 'text-(--color-gold-light) hover:text-(--color-gold-dark)'
                                    : 'text-(--color-gold-dark) hover:text-(--color-gold-light)'
                            }
                            onClick={(evt) => {
                                evt.preventDefault();
                                setShowVideoTab(false);
                                setShowAudioTab(true);
                            }}
                        >
                            <FaRegFileAudio className={css.svg} />
                            &nbsp;&nbsp;&nbsp;Audio&nbsp;&nbsp;&nbsp;
                            <CountUp
                                end={audioArr.length}
                                duration={5}
                                // suffix=' files'
                                className={`rounded-[50%] border-[1px] p-[10px] m-[10px]`}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex">
                    <div
                        id="videoTab"
                        className={
                            showVideoTab
                                ? 'visible w-full'
                                : 'invisible w-[0px]'
                        }
                    >
                        <ul className="musicUl">
                            {videoArr.map(
                                (obj: EmbedVideoProps, idx: number) => {
                                    const { id, label, h, w } = obj;
                                    const ytProps: EmbedVideoProps = {
                                        id: id,
                                        h: h,
                                        w: w,
                                    };

                                    return (
                                        <li className={css.li} key={idx}>
                                            <Link
                                                href="#"
                                                className="link"
                                                onClick={(evt) => {
                                                    evt.preventDefault();
                                                    openModal(idx);
                                                }}
                                            >
                                                <FaYoutube
                                                    className={css.svg}
                                                />
                                                &nbsp;
                                                {label}
                                            </Link>
                                            &nbsp;
                                            <Modal
                                                isOpen={isModalOpen(idx)}
                                                onRequestClose={() =>
                                                    closeModals()
                                                }
                                                style={modalCss}
                                                contentLabel="Video from Cruiser"
                                            >
                                                <EmbedVideo {...ytProps} />
                                            </Modal>
                                        </li>
                                    );
                                }
                            )}

                            {fbVideos.map((obj: FbVideoProps, idx: number) => {
                                const { link, label, width, height } = obj;
                                let fbQueryString: string = `?href=${link}`;
                                if (height)
                                    fbQueryString += `&height=${height}`;
                                fbQueryString += `&width=${width}`;
                                fbQueryString += '&show_text=0';
                                fbQueryString += '&t=0';

                                return (
                                    <li className={css.li} key={idx}>
                                        <Link
                                            href="#"
                                            className="link"
                                            onClick={(evt) => {
                                                evt.preventDefault();
                                                openModal(idx + 100);
                                            }}
                                        >
                                            <FaFacebook className={css.svg} />
                                            &nbsp;
                                            {label}
                                        </Link>
                                        <Modal
                                            isOpen={isModalOpen(idx + 100)} // adding 100 for fb modals
                                            onRequestClose={() => closeModals()}
                                            style={modalCss}
                                            contentLabel="Facebook video from Cruiser"
                                        >
                                            <iframe
                                                src={`https://www.facebook.com/plugins/video.php${fbQueryString}`}
                                                height={height}
                                                width={width}
                                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                                allowFullScreen
                                                style={{
                                                    borderWidth: 0,
                                                    overflow: 'hidden',
                                                }}
                                            />
                                        </Modal>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div
                        id="audioTab"
                        className={
                            showAudioTab
                                ? 'visible w-full'
                                : 'invisible w-[0px]'
                        }
                    >
                        <ul className="musicUl">
                            {audioArr.map((obj, idx) => {
                                const _idx = idx + 1000;

                                return (
                                    <li className={css.li} key={_idx}>
                                        <Link
                                            href="#"
                                            className="link"
                                            onClick={(evt) => {
                                                evt.preventDefault();
                                                openModal(_idx);
                                            }}
                                        >
                                            <FaSoundcloud className={css.svg} />
                                            &nbsp;
                                            {obj.label}
                                        </Link>
                                        &nbsp;
                                        <Modal
                                            isOpen={isModalOpen(_idx)}
                                            onRequestClose={() => closeModals()}
                                            style={modalCss}
                                            contentLabel="Audio from Cruiser"
                                        >
                                            <EmbedAudio {...obj} />
                                        </Modal>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export { modalCss };
export default Music;
