import React from "react";
import BackgroundImage from "../assets/ListInfoBlock.png";

export default function ListInfoBlock(props) {
    const translations = {
        ru: {
            title: "ПОЧЕМУ ВЫБИРАЮТ НАС?",
            items: [
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках",
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках",
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках",
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках",
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках",
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках",
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках",
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках",
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках",
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках",
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках",
            ],
        },
        kz: {
            title: "НЕГЕ БІЗДІ ТАҢДАЙДЫ?",
            items: [
                "18 жыл нарықта — біз қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
                "18 жыл нарықта — біз қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
                "18 жыл нарықта — біз қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
                "18 жыл нарықта — біз қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
                "18 жыл нарықта — біз қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
                "18 жыл нарықта — біз қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
                "18 жыл нарықта — біз қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
                "18 жыл нарықта — біз қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
                "18 жыл нарықта — біз қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
                "18 жыл нарықта — біз қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
                "18 жыл нарықта — біз қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
            ],
        },
        en: {
            title: "WHY CHOOSE US?",
            items: [
                "18 years in the market — we know everything about Chinese logistics and international deliveries",
                "18 years in the market — we know everything about Chinese logistics and international deliveries",
                "18 years in the market — we know everything about Chinese logistics and international deliveries",
                "18 years in the market — we know everything about Chinese logistics and international deliveries",
                "18 years in the market — we know everything about Chinese logistics and international deliveries",
                "18 years in the market — we know everything about Chinese logistics and international deliveries",
                "18 years in the market — we know everything about Chinese logistics and international deliveries",
                "18 years in the market — we know everything about Chinese logistics and international deliveries",
                "18 years in the market — we know everything about Chinese logistics and international deliveries",
                "18 years in the market — we know everything about Chinese logistics and international deliveries",
                "18 years in the market — we know everything about Chinese logistics and international deliveries",
            ],
        },
    };

    const translation = translations[props.lg] || translations["ru"];

    return (
        <>
            <div
                className="hidden md:block py-16 px-8"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h2 className="text-center text-[#911D16] font-bold text-[36px] mb-12">
                    {translation.title}
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                    {translation.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <span className="text-[#911D16] font-bold text-[36px]">{index + 1}</span>
                            <p className="text-[18px] text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:hidden bg-white py-8 px-4">
                <h2 className="text-center text-[#911D16] font-bold text-[24px] mb-6">
                    {translation.title}
                </h2>
                <ul className="flex flex-col gap-4">
                    {translation.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <span className="text-[#911D16] font-bold text-[24px]">{index + 1}</span>
                            <p className="text-[16px] text-gray-700">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}