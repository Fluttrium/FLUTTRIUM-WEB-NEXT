import React from 'react';
import { IconButton } from '@mui/material';
import { FaTelegramPlane, FaWhatsapp, FaVk, FaGithub, FaEnvelope, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialContacts = () => {
    return (
        <div id="contacs" className="flex flex-wrap justify-center gap-5 p-5 bg-gray-100 rounded-lg md:gap-10 md:p-10">
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegramPlane className="text-black text-4xl md:text-6xl" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="text-black text-4xl md:text-6xl" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok className="text-black text-4xl md:text-6xl" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="VK">
                <FaVk className="text-black text-4xl md:text-6xl" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="text-black text-4xl md:text-6xl" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-black text-4xl md:text-6xl" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaXTwitter className="text-black text-4xl md:text-6xl" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-black text-4xl md:text-6xl" />
            </IconButton>
        </div>
    );
}

export default SocialContacts;
