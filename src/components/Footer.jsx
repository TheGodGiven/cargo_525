import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok, FaTelegram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 px-4">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex gap-6 mb-2">
                    <a href="https://wa.me/77077777777" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                        <FaWhatsapp className="w-8 h-8 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://instagram.com/cargo525" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <FaInstagram className="w-8 h-8 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://tiktok.com/@cargo525" target="_blank" rel="noopener noreferrer" title="TikTok">
                        <FaTiktok className="w-8 h-8 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://t.me/kargo525" target="_blank" rel="noopener noreferrer" title="Telegram">
                        <FaTelegram className="w-8 h-8 hover:scale-110 transition-transform" />
                    </a>
                </div>
                <div className="text-sm text-center text-gray-400">Все права защищены © Cargo525</div>
            </div>
        </footer>
    );
}