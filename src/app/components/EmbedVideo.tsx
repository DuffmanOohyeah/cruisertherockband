'use client';
import React, { JSX } from 'react';
import { EmbedVideoProps, FbVideoProps } from '@/utils/types';
import YouTube, { YouTubeProps } from 'react-youtube';

const fbVideoAtts = (): FbVideoProps[] => {
    const atts: FbVideoProps[] = [
        {
            link: 'https://www.facebook.com/reel/1991144818086567/',
            label: 'New Music Nights, Reigate - June `25',
            height: 476,
            width: 267,
        },
    ];
    return atts;
};

const videoAtts = (): EmbedVideoProps[] => {
    const atts: EmbedVideoProps[] = [
        { id: 'H4ZW2rpfrTc', label: 'Monsters (Full HD)' },
        // { id: 'S789A87BhVY', label: 'Godzilla (Fiddler`s Elbow)' },
        // { id: 'dvGJnv_jDm4', label: 'Camden II (Fiddler`s Elbow)' },
        { id: 'jVTdbcu8Zu0', label: 'EP Promo' },
        { id: 'gtlWD098akA', label: 'Click Click (Fiddler`s Elbow)' },
        { id: 'CnyWReV2-N8', label: 'Monsters (New Cross Inn)' },
        { id: 'A87yb2J5zRg', label: 'Cosmonaut (New Cross Inn)' },
        { id: 'V11mTowBymY', label: 'Golden Gate (New Cross Inn)' },
        { id: 'BJc-OtiKox0', label: 'Godzilla (Fiddler`s Elbow)' },
        { id: '1tplmULwNvk', label: 'Monsters (Fiddler`s Elbow)' },
    ];
    return atts;
};

const EmbedVideo = ({ id, h = 315, w = 560 }: EmbedVideoProps): JSX.Element => {
    const opts: YouTubeProps['opts'] = {
        height: h,
        width: w,
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return <YouTube videoId={id} loading="lazy" opts={opts} />;
};

export { videoAtts, fbVideoAtts };
export default EmbedVideo;
