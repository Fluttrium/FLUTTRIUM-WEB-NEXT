import React from 'react';
import { IconButton } from '@mui/material';
import { FaTelegramPlane, FaWhatsapp, FaVk, FaGithub, FaEnvelope, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialContacts = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', backgroundColor: '#F5F5F7', borderRadius: '10px' }}>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegramPlane size={48} color="#000000" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={48} color="#000000" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="VK">
                <FaTiktok size={48} color="#000000" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="VK">
                <FaVk size={48} color="#000000" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={48} color="#000000" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={48} color="#000000" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaXTwitter size={48} color="#000000" />
            </IconButton>
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaFacebook size={48} color="#000000" />
            </IconButton>
            </div>
    );
}

export default SocialContacts;


