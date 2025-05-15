import React, { useEffect, useState } from "react";
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
        { value: "Казахстан", label: "Казахстан", flag: flags.kz, city: "Алматы, Астана, Караганда" },
        { value: "Китай", label: "Китай", flag: flags.chn, city: "Иу, Гуанчжоу, Шэньчжэнь" },
        { value: "ОАЭ", label: "ОАЭ", flag: flags.uae, city: "Дубай" },
        { value: "Россия", label: "Россия", flag: flags.ru, city: "Москва" },
    ],
    kz: [
        { value: "Казахстан", label: "Қазақстан", flag: flags.kz, city: "Алматы, Астана, Қарағанды" },
        { value: "Китай", label: "Қытай", flag: flags.chn, city: "Иу, Гуанчжоу, Шэньчжэнь" },
        { value: "ОАЭ", label: "БАӘ", flag: flags.uae, city: "Дубай" },
        { value: "Россия", label: "Ресей", flag: flags.ru, city: "Мәскеу" },
    ],
    en: [
        { value: "Казахстан", label: "Kazakhstan", flag: flags.kz, city: "Almaty, Astana, Karaganda" },
        { value: "Китай", label: "China", flag: flags.chn, city: "Yiwu, Guangzhou, Shenzhen" },
        { value: "ОАЭ", label: "UAE", flag: flags.uae, city: "Dubai" },
        { value: "Россия", label: "Russia", flag: flags.ru, city: "Moscow" },
    ],
    ch: [
        { value: "Казахстан", label: "哈萨克斯坦", flag: flags.kz, city: "阿拉木图、阿斯塔纳、卡拉干达" },
        { value: "Китай", label: "中国", flag: flags.chn, city: "义乌、广州、深圳" },
        { value: "ОАЭ", label: "阿联酋", flag: flags.uae, city: "迪拜" },
        { value: "Россия", label: "俄罗斯", flag: flags.ru, city: "莫斯科" },
    ],
};

const translations = {
    ru: {
        title: "У нас собственные склады в четырёх странах и восьми городах:",
        description:
            "Бұл бізге логистиканы толық бақылауда ұстауға мүмкіндік береді және клиенттерімізге жедел, ашық әрі сенімді қызмет көрсетуді қамтамасыз етеді.",
    },
    kz: {
        title: "Бізде төрт ел мен сегіз қалада өз қоймаларымыз бар:",
        description:
            "Бұл бізге логистиканы толық бақылауда ұстауға мүмкіндік береді және клиенттерімізге жедел, ашық әрі сенімді қызмет көрсетуді қамтамасыз етеді.",
    },
    en: {
        title: "We operate our own warehouses in four countries and eight cities:",
        description:
            "This gives us full control over logistics and allows us to offer fast, transparent, and reliable service to our clients.",
    },
    ch: {
        title: "我们在四个国家、八座城市拥有自有仓库：",
        description:
            "这使我们能够对整个物流过程进行全方位掌控，为客户提供快速、透明、可靠的服务。",
    },
};

export default function Country(props) {
    const currentCountries = countries[props.lg] || countries["ru"];
    const translation = translations[props.lg] || translations["ru"];
    const [selectedCountry, setSelectedCountry] = useState(currentCountries[0]);
    const [sliderIndex, setSliderIndex] = useState(0);

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
        afterChange: (index) => {
            handleCountryChange(currentCountries[index]);
            setSliderIndex(index);
        },
        arrows: false,
    };

    useEffect(() => {
        setSelectedCountry(currentCountries[sliderIndex]);
    }, [props.lg]);

    return (
        <>
            <div
                className="hidden md:flex flex-col items-center py-10 px-4 pb-20 mt-10"
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
                    <div className="w-1/2 self-stretch pb-2">
                        <div className="p-6 rounded-md border border-white shadow-md h-full">
                            <h3 className="font-bold text-white text-[24px]">{selectedCountry.city}</h3>
                            <p className="text-[16px] mt-4 text-white">
                                {translation.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="flex md:hidden flex-col items-center py-6 px-4 mt-10"
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

                <div className="bg-white p-4 rounded-md shadow-md mt-8 w-full max-w-[414px]">
                    <h3 className="text-[#911D16] font-bold text-[18px]">{selectedCountry.city}</h3>
                    <p className="text-[14px] mt-2 text-gray-700">
                        {translation.description}
                    </p>
                </div>
            </div>
        </>
    );
}