import React, { JSX } from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const year = new Date().getFullYear();

const Footer = (): JSX.Element => {
    return (
        <footer className='text-right w-[80%] md:w-[65%] lg:w-[50%] text-(--color-gray)'>
            <FaRegCopyright className='inline-block align-middle mr-[7px]' />
            {year}&nbsp;Cruiser The Rock Band.&nbsp;All rights reserved.
        </footer>
    );
};

export default Footer;
