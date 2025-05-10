import React from "react";
import WhatsAppIcon from "../assets/WhatsAppIcon.png";
import TikTokIcon from "../assets/TikTokIcon.png";
import PhoneNumberIcon from "../assets/PhoneNumberIcon.png";
import InstagramIcon from "../assets/InstagramIcon.png";

export default function Footer({ lg }) {
    const translations = {
        ru: {
            navigation: "Навигация",
            support: "Тех Поддержка",
            social: "Соц сети",
            qrText: "QR Code\nПодписывайтесь!",
            links: [
                { label: "Калькулятор", url: "/calculator" },
                { label: "О нас", url: "/about" },
                { label: "Наши услуги", url: "/services" },
                { label: "Отзывы", url: "/reviews" },
            ],
            supportContacts: [
                "+7 (707) 777 77 77",
                "+7 (707) 777 77 77",
                "+7 (707) 777 77 77",
            ],
            socialContacts: [
                { icon: PhoneNumberIcon, label: "+7 (707) 777 77 77", url: "tel:+77077777777" },
                { icon: WhatsAppIcon, label: "+7 (707) 777 77 77", url: "https://wa.me/77077777777" },
                { icon: InstagramIcon, label: "@cargo525", url: "https://instagram.com/cargo525" },
                { icon: TikTokIcon, label: "@cargo525", url: "https://tiktok.com/@cargo525" },
            ],
        },
        en: {
            navigation: "Navigation",
            support: "Support",
            social: "Social Media",
            qrText: "QR Code\nSubscribe!",
            links: [
                { label: "Calculator", url: "/calculator" },
                { label: "About Us", url: "/about" },
                { label: "Our Services", url: "/services" },
                { label: "Reviews", url: "/reviews" },
            ],
            supportContacts: [
                "+7 (707) 777 77 77",
                "+7 (707) 777 77 77",
                "+7 (707) 777 77 77",
            ],
            socialContacts: [
                { icon: PhoneNumberIcon, label: "+7 (707) 777 77 77", url: "tel:+77077777777" },
                { icon: WhatsAppIcon, label: "+7 (707) 777 77 77", url: "https://wa.me/77077777777" },
                { icon: InstagramIcon, label: "@cargo525", url: "https://instagram.com/cargo525" },
                { icon: TikTokIcon, label: "@cargo525", url: "https://tiktok.com/@cargo525" },
            ],
        },
    };

    const translation = translations[lg] || translations["ru"];

    return (
        <>
            {/* Десктопная версия */}
            <div className="hidden md:flex bg-black text-white py-8 px-4 max-w-[1200px] mx-auto">
                {/* Навигация */}
                <div className="flex-1">
                    <h3 className="font-bold mb-4">{translation.navigation}</h3>
                    <ul>
                        {translation.links.map((link, index) => (
                            <li key={index} className="mb-2">
                                <a href={link.url} className="hover:underline">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Тех Поддержка */}
                <div className="flex-1">
                    <h3 className="font-bold mb-4">{translation.support}</h3>
                    <ul>
                        {translation.supportContacts.map((contact, index) => (
                            <li key={index} className="mb-2">
                                <a href={`tel:${contact}`} className="hover:underline">
                                    {contact}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Соц сети */}
                <div className="flex-1">
                    <h3 className="font-bold mb-4">{translation.social}</h3>
                    <ul>
                        {translation.socialContacts.map((social, index) => (
                            <li key={index} className="mb-2 flex items-center">
                                <img src={social.icon} alt={social.label} className="w-5 h-5 mr-2" />
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    {social.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-200 mb-4">
                        {/* QR-код будет добавлен здесь */}
                    </div>
                    <p className="text-center whitespace-pre-line">{translation.qrText}</p>
                </div>
            </div>

            {/* Мобильная версия */}
            <div className="block md:hidden bg-black text-white py-8 px-4">
                <div className="mb-8">
                    <h3 className="font-bold mb-4">{translation.navigation}</h3>
                    <ul>
                        {translation.links.map((link, index) => (
                            <li key={index} className="mb-2">
                                <a href={link.url} className="hover:underline">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="font-bold mb-4">{translation.support}</h3>
                    <ul>
                        {translation.supportContacts.map((contact, index) => (
                            <li key={index} className="mb-2">
                                <a href={`tel:${contact}`} className="hover:underline">
                                    {contact}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="font-bold mb-4">{translation.social}</h3>
                    <ul>
                        {translation.socialContacts.map((social, index) => (
                            <li key={index} className="mb-2 flex items-center">
                                <img src={social.icon} alt={social.label} className="w-5 h-5 mr-2" />
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    {social.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-200 mb-4">
                        {/* QR-код будет добавлен здесь */}
                    </div>
                    <p className="text-center whitespace-pre-line">{translation.qrText}</p>
                </div>
            </div>
        </>
    );
}