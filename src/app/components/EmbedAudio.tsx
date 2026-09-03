'use client';
import React, { JSX } from 'react';
import { EmbedAudioProps } from '@/utils/types';
// import Link from 'next/link';

const audioAtts = (): EmbedAudioProps[] => {
    const atts: EmbedAudioProps[] = [
        { id: '1196090953', label: 'Godzilla', dir: 'godzilla' },
        { id: '507415911', label: 'Everywhere', dir: 'everywhere' },
        { id: '507415743', label: 'Cosmonaut', dir: 'cosmonaut' },
        { id: '507415200', label: 'Bombardier', dir: 'bombardier' },
        { id: '507414939', label: 'Bantham', dir: 'banthem' },
        { id: '507414783', label: 'Emily', dir: 'emily' },
        {
            id: '507414639',
            label: 'Mary Poppins',
            dir: 'mary-poppins-later-days',
        },
        { id: '507414516', label: 'Moleskin', dir: 'moleskin' },
        { id: '507414162', label: 'Click Click', dir: 'click-click' },
        { id: '507414066', label: 'Killer Bees', dir: 'killer-bees' },
        { id: '507413829', label: 'Golden Gate', dir: 'golden-gate' },
    ];
    return atts;
};

const EmbedAudio = (props: EmbedAudioProps): JSX.Element => {
    const { id, /*label, dir,*/ autoPlay, height } = props;

    let play: boolean = true;
    if (autoPlay) play = autoPlay;

    // const soundcloudUrl: string = 'https://soundcloud.com/simon-spearman-743864396/';

    let frameSrc: string = 'https://w.soundcloud.com/player/';
    frameSrc += `?url=https%3A//api.soundcloud.com/tracks/${id}`;
    // frameSrc += '&color=%23ff5500';
    frameSrc += '&color=%23FE1504';
    frameSrc += `&auto_play=${play}`;
    frameSrc += '&hide_related=false';
    frameSrc += '&show_comments=true';
    frameSrc += '&show_user=false';
    frameSrc += '&show_reposts=false';
    frameSrc += '&show_teaser=true';

    frameSrc += '&show_artwork=false';
    frameSrc += '&visual=true';

    // console.log('frameSrc:', frameSrc);

    /*const queryParams = new URLSearchParams({
        url: `https://api.soundcloud.com/tracks/${id}`,
        color: '#FE1504',
        auto_play: play,
        hide_related: false,
        show_comments: false,
        show_user: false,
        show_reposts: false,
        show_teaser: false,
        show_artwork: false,
        visual: false,
    }).toString();
    console.log('queryParams:', queryParams);*/

    return (
        <>
            <iframe
                width="100%"
                height={height || '166'}
                loading="lazy"
                allow="autoplay"
                src={frameSrc}
                style={{ border: 0 }}
            ></iframe>
            {/*<div
                style={{
                    fontSize: '10px',
                    color: 'var(--color-gray)',
                    lineBreak: 'anywhere',
                    wordBreak: 'normal',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    fontFamily:
                        'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                    fontWeight: '100',
                }}
            >
                <Link
                    href={soundcloudUrl}
                    title="Cruiser"
                    target="_blank"
                    style={{
                        color: 'var(--color-gray)',
                        textDecoration: 'none',
                    }}
                >
                    Cruiser
                </Link>
                &nbsp;
                <Link
                    href={`${soundcloudUrl}${dir}`}
                    title={label}
                    target="_blank"
                    style={{
                        color: 'var(--color-gray)',
                        textDecoration: 'none',
                    }}
                >
                    {label}
                </Link>
            </div>*/}
        </>
    );
};

export { audioAtts };
export default EmbedAudio;
