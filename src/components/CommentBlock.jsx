import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Quote from "../assets/Quote.png";

const translations = {
    ru: {
        title: "ОТЗЫВЫ",
        comments: [
            {
                text: "«Результат дико порадовал, друзья были в восторге»",
                description:
                    "«Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно,ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще!) Уже строю планы, чтобы попробовать все начинки. Они восхитительны! Даже кушать было жалко, такая красота!)",
                author: "Ирина Ларионова",
                location: "Санкт-Петербург",
            },
            {
                text: "«Очень вкусно и красиво!»",
                description:
                    "Заказывала торт на день рождения. Все гости были в восторге! Торт был не только красивым, но и невероятно вкусным. Спасибо за вашу работу!",
                author: "Мария Иванова",
                location: "Москва",
            },
            {
                text: "«Лучший сервис!»",
                description:
                    "Заказывал десерты для корпоративного мероприятия. Все было доставлено вовремя, десерты были свежими и вкусными. Рекомендую!",
                author: "Алексей Смирнов",
                location: "Екатеринбург",
            },
        ],
    },
    en: {
        title: "REVIEWS",
        comments: [
            {
                text: "«The result was amazing, my friends were delighted»",
                description:
                    "Ordered cupcakes as a gift for New Year. The ordering process was easy and pleasant, and the result was amazing. My friends were delighted. Both the design and the taste of the cupcakes were simply wonderful. I will definitely order again! Already planning to try all the flavors. They are delightful! It was even a pity to eat them, such beauty!)",
                author: "Irina Larionova",
                location: "Saint Petersburg",
            },
            {
                text: "«Very tasty and beautiful!»",
                description:
                    "Ordered a cake for a birthday. All the guests were delighted! The cake was not only beautiful but also incredibly tasty. Thank you for your work!",
                author: "Maria Ivanova",
                location: "Moscow",
            },
            {
                text: "«Best service!»",
                description:
                    "Ordered desserts for a corporate event. Everything was delivered on time, the desserts were fresh and delicious. Highly recommend!",
                author: "Alexey Smirnov",
                location: "Yekaterinburg",
            },
        ],
    },
};

export default function CommentBlock(props) {
    const [activeSlide, setActiveSlide] = useState(1);
    const [translation, setTranslation] = useState(translations["ru"]);

    useEffect(() => {
        setTranslation(translations[props.lg] || translations["ru"]);
    }, [props.lg]);

    const sliderRef = useRef(null);
    
    useEffect(() => {
        if (sliderRef.current) {
            setTimeout(() => {
                sliderRef.current.slickGoTo(1);
                setActiveSlide(1);
            }, 100);
        }
    }, []);

    useEffect(() => {
        console.log("useEffect activeSlide = ", activeSlide);
    }, [activeSlide]);
    
    // Кастомные кнопки для десктопной версии (теперь внизу)
    const CustomPrevArrowDesktop = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute bottom-[-60px] left-[calc(50%-60px)] transform bg-[#911D16] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#b22222] z-10"
        >
            &#8249;
        </button>
    );

    const CustomNextArrowDesktop = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute bottom-[-60px] right-[calc(50%-60px)] transform bg-[#911D16] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#b22222] z-10"
        >
            &#8250;
        </button>
    );

    const CustomPrevArrowMobile = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute left-4 bottom-[-20px] bg-[#911D16] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-[#b22222]"
        >
            &#8249;
        </button>
    );

    const CustomNextArrowMobile = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute right-4 bottom-[-20px] bg-[#911D16] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-[#b22222]"
        >
            &#8250;
        </button>
    );

    const desktopSettings = {
        infinite: true,
        speed: 500,
        // slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        arrows: true,
        initialSlide: 1,
        prevArrow: <CustomPrevArrowDesktop />,
        nextArrow: <CustomNextArrowDesktop />,
        beforeChange: (current, next) => setActiveSlide(next),
        adaptiveHeight: false,
        variableWidth: false,
    };

    const mobileSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        initialSlide: 1,
        prevArrow: <CustomPrevArrowMobile />,
        nextArrow: <CustomNextArrowMobile />,
        beforeChange: (current, next) => setActiveSlide(next),
    };

    return (
        <>
            <div className="hidden md:block pt-10 pb-16 px-8 bg-white relative">
                <h2 className="text-center text-[#911D16] font-bold text-[36px] mb-12">
                    {translation.title}
                </h2>
                <div className="max-w-[1200px] mx-auto relative pb-20">
                    <Slider ref={sliderRef} {...desktopSettings}>
                        {translation.comments.map((comment, index) => {
                            console.log("index = ", index);
                            console.log("activeSlide = ", activeSlide);
                            
                            return (
                                <div key={index} className="px-3 py-2 outline-none items-stretch h-full" style={{ height: 'inherit' }}>
                                    <div 
                                        className="bg-white border border-[#E0E0E0] p-6 rounded-lg shadow-md mx-3 transition-all duration-300 h-full"
                                        // className={`bg-white border border-[#E0E0E0] p-6 rounded-lg shadow-md mx-3 transition-all duration-300 h-full ${
                                        //     activeSlide === index ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                                        // }`}
                                    >
                                        <img src={Quote} alt="quote" className="w-8" />
                                        <p className="text-[#911D16] text-[24px] font-bold mb-4">
                                            {comment.text}
                                        </p>
                                        <p className="text-gray-700 text-[16px] mb-6 flex-grow">
                                            {comment.description}
                                        </p>
                                        <div className="mt-auto text-center">
                                            <p className="text-gray-900 font-bold">{comment.author}</p>
                                            <p className="text-gray-500">{comment.location}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
            <div className="block md:hidden py-8 px-4 bg-white relative">
                <h2 className="text-center text-[#911D16] font-bold text-[24px] mb-6">
                    {translation.title}
                </h2>
                <Slider {...mobileSettings} className="max-w-[400px] mx-auto relative">
                    {translation.comments.map((comment, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md text-center h-full"
                        >
                            <p className="text-[#911D16] text-[20px] font-bold mb-3">
                                {comment.text}
                            </p>
                            <p className="text-gray-700 text-[14px] mb-4 flex-grow">
                                {comment.description}
                            </p>
                            <div className="mt-auto">
                                <p className="text-gray-900 font-bold">{comment.author}</p>
                                <p className="text-gray-500">{comment.location}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}