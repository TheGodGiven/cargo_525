import React from "react";
import BackgroundImage from "../assets/ListInfoBlock.png";
import CloudBG from "../assets/CloudBG.png";

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
                className="relative hidden md:block pt-16 pb-40  px-8"
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
                        <div key={index} className="flex items-center gap-4">
                            <span className="text-[#911D16] font-bold text-[36px]">{index + 1}</span>
                            <p className="text-[18px] text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
                <div
                    className="absolute bottom-[-20px] left-0 w-full h-[100px] bg-repeat bg-center"
                    style={{
                        backgroundImage: `url(${CloudBG})`,
                        backgroundSize: "contain",
                    }}
                ></div>
            </div>
            <div className="md:hidden bg-white py-8 px-auto mx-6 text-center">
                <h2 className="text-center text-[#911D16] font-bold text-[24px] mb-6">
                    {translation.title}
                </h2>
                <ul className="flex flex-col gap-4">
                    {translation.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="text-[#911D16] font-bold text-[24px] items-center">{index + 1}</span>
                            <p className="text-[16px] text-gray-700">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}