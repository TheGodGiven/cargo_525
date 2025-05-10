import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function CommentBlock(props) {
    const translations = {
        ru: {
            title: "ОТЗЫВЫ",
            comments: [
                {
                    text: "«Результат дико порадовал, друзья были в восторге»",
                    description:
                        "Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще! Уже строго планы, чтобы попробовать все начинки. Они восхитительны! Даже кушать было жалко, такая красота!)",
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

    const translation = translations[props.lg] || translations["ru"];

    // Кастомные кнопки для десктопной версии
    const CustomPrevArrowDesktop = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-[#911D16] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#b22222]"
        >
            &#8249;
        </button>
    );

    const CustomNextArrowDesktop = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-[#911D16] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#b22222]"
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        arrows: true,
        prevArrow: <CustomPrevArrowDesktop />,
        nextArrow: <CustomNextArrowDesktop />,
    };

    const mobileSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrowMobile />,
        nextArrow: <CustomNextArrowMobile />,
    };

    return (
        <>
            <div className="hidden md:block py-16 px-8 bg-white relative">
                <h2 className="text-center text-[#911D16] font-bold text-[36px] mb-12">
                    {translation.title}
                </h2>
                <Slider {...desktopSettings} className="max-w-[1200px] mx-auto">
                    {translation.comments.map((comment, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-md text-center transition-opacity duration-300 ${
                                index === 1 ? "opacity-100" : "opacity-50"
                            }`}
                        >
                            <p className="text-[#911D16] text-[24px] font-bold mb-4">
                                {comment.text}
                            </p>
                            <p className="text-gray-700 text-[16px] mb-6">
                                {comment.description}
                            </p>
                            <p className="text-gray-900 font-bold">{comment.author}</p>
                            <p className="text-gray-500">{comment.location}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="block md:hidden py-8 px-4 bg-white relative">
                <h2 className="text-center text-[#911D16] font-bold text-[24px] mb-6">
                    {translation.title}
                </h2>
                <Slider {...mobileSettings} className="max-w-[400px] mx-auto relative">
                    {translation.comments.map((comment, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md text-center"
                        >
                            <p className="text-[#911D16] text-[20px] font-bold mb-3">
                                {comment.text}
                            </p>
                            <p className="text-gray-700 text-[14px] mb-4">
                                {comment.description}
                            </p>
                            <p className="text-gray-900 font-bold">{comment.author}</p>
                            <p className="text-gray-500">{comment.location}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}