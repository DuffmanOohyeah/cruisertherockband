import { JSX } from 'react';

type SvgProp = {
    svg: string;
};

export interface HeaderCssProps extends SvgProp {
    nav: string;
    ul: string;
    head: string;
    divider: string;
}

export interface FooterCssProps extends SvgProp {
    tag: string;
}

export type HomeCssProps = {
    logo: string;
};

export interface TesimonialCssProps extends SvgProp {
    nb: string;
    thx: string;
    h1Svg: string;
}

export type ContactCssProps = {
    label: string;
    input: string;
    button: string;
    buttonDiv: string;
    h1Svg: string;
};

export interface SocialCssProps extends SvgProp {
    li: string;
    h1Svg: string;
}

export interface MusicCssProps extends SvgProp {
    h1Svg: string;
    li: string;
}

export type GigCssProps = {
    h1Svg: string;
};

export type PicCssProps = {
    h1Svg: string;
    wrap: string;
};

export type EmbedVideoProps = {
    id: string;
    label?: string;
    h?: number;
    w?: number;
};

export type EmbedAudioProps = {
    id: string;
    label: string;
    dir: string;
    autoPlay?: boolean;
    height?: number;
};

export type FbVideoProps = {
    link: string;
    label: string;
    height?: number;
    width: number;
};

export type ContactFormProps = {
    name: string;
    email: string;
    message: string;
};

export type SocialHubProps = {
    svg: JSX.Element;
    href: string;
    label: string;
};

export type GalleryClassProps = {
    originalClass: string;
    thumbnailClass: string;
};

export type NavBlockCssProps = {
    path: string;
    isSticky?: boolean;
};

export interface StickyCssProps extends SvgProp {
    sticky: string;
}

export type HandleContactChangeProps = {
    target: { id: string; value: string };
};

export type NavLinksProps = {
    href: string;
    label: string | number;
};

export type ListingsYear = {
    year: number | string;
};

export interface ListingsProps extends ListingsYear {
    venue: string;
    month?: string;
    location: string;
    notes?: string;
    strike?: boolean;
}
