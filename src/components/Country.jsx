import React, { useState } from "react";
import Slider from "react-slick";
import KZFLag from "../assets/KZFlag.png";
import RUFlag from "../assets/RUFlag.png";
import CHNFlag from "../assets/CHNFlag.png";
import UAEFlag from "../assets/UAEFlag.png";
import CountryBG from "../assets/CountryBG.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const flags = {
    kz: KZFLag,
    ru: RUFlag,
    chn: CHNFlag,
    uae: UAEFlag,
};

const countries = {
    ru: [
        { value: "Казахстан", label: "Казахстан", flag: flags.kz, city: "Астана Алматы" },
        { value: "Китай", label: "Китай", flag: flags.chn, city: "Пекин Шанхай" },
        { value: "ОАЭ", label: "ОАЭ", flag: flags.uae, city: "Дубай Абу-Даби" },
        { value: "Россия", label: "Россия", flag: flags.ru, city: "Москва Санкт-Петербург" },
    ],
    kz: [
        { value: "Казахстан", label: "Қазақстан", flag: flags.kz, city: "Астана Алматы" },
        { value: "Китай", label: "Қытай", flag: flags.chn, city: "Бейжің Шанхай" },
        { value: "ОАЭ", label: "БАӘ", flag: flags.uae, city: "Дубай Абу-Даби" },
        { value: "Россия", label: "Ресей", flag: flags.ru, city: "Мәскеу Санкт-Петербург" },
    ],
    en: [
        { value: "Казахстан", label: "Kazakhstan", flag: flags.kz, city: "Astana Almaty" },
        { value: "Китай", label: "China", flag: flags.chn, city: "Beijing Shanghai" },
        { value: "ОАЭ", label: "UAE", flag: flags.uae, city: "Dubai Abu Dhabi" },
        { value: "Россия", label: "Russia", flag: flags.ru, city: "Moscow Saint Petersburg" },
    ],
};

const translations = {
    ru: {
        title: "Склады в четырех странах и восьми городах",
        description:
            "Это даёт нам полный контроль над логистикой и позволяет обеспечивать клиентам быстрый, прозрачный и надёжный сервис.",
    },
    kz: {
        title: "Төрт елде және сегіз қалада қоймалар",
        description:
            "Бұл бізге логистиканы толық бақылауға алуға және клиенттерге жылдам, ашық және сенімді қызмет көрсетуге мүмкіндік береді.",
    },
    en: {
        title: "Warehouses in four countries and eight cities",
        description:
            "This gives us full control over logistics and allows us to provide customers with fast, transparent, and reliable service.",
    },
};

export default function Country(props) {
    const currentCountries = countries[props.lg] || countries["ru"];
    const translation = translations[props.lg] || translations["ru"];
    const [selectedCountry, setSelectedCountry] = useState(currentCountries[0]);

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        afterChange: (index) => handleCountryChange(currentCountries[index]),
        arrows: false,
    };

    return (
        <>
            <div
                className="hidden md:flex flex-col items-center py-10 px-4 pb-20 mt-5"
                style={{
                    backgroundImage: `url(${CountryBG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="text-center text-white mb-8">
                    <h2 className="text-[36px] font-bold">{translation.title}</h2>
                    <p className="text-[18px] mt-4">{translation.description}</p>
                </div>

                <div className="flex justify-center items-center gap-8 max-w-[1200px] w-full">
                    <div className="w-1/2 h-auto">
                        <Slider {...sliderSettings}>
                            {currentCountries.map((country) => (
                                <div key={country.value} className="flex justify-center overflow-hidden">
                                    <img
                                        src={country.flag}
                                        alt={country.label}
                                        className="h-full object-cover rounded-md shadow-md"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="p-6 rounded-md border border-white shadow-md w-1/2 self-stretch">
                        <h3 className="font-bold text-white text-[24px]">{selectedCountry.city}</h3>
                        <p className="text-[16px] mt-4 text-white">
                            {translation.description}
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="flex md:hidden flex-col items-center py-6 px-4"
                style={{
                    backgroundImage: `url(${CountryBG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="text-center text-white mb-4">
                    <h2 className="text-[24px] font-bold">{translation.title}</h2>
                    <p className="text-[14px] mt-2">{translation.description}</p>
                </div>

                <div className="w-full max-w-[414px]">
                    <Slider {...sliderSettings}>
                        {currentCountries.map((country) => (
                            <div key={country.value} className="flex justify-center">
                                <img
                                    src={country.flag}
                                    alt={country.label}
                                    className="w-full h-[200px] object-cover rounded-md shadow-md"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="bg-white p-4 rounded-md shadow-md mt-4 w-full max-w-[414px]">
                    <h3 className="text-[#911D16] font-bold text-[18px]">{selectedCountry.city}</h3>
                    <p className="text-[14px] mt-2 text-gray-700">
                        {translation.description}
                    </p>
                </div>
            </div>
        </>
    );
}