import React, { useState, useEffect, useRef } from "react";
import Quote from "../assets/Quote.png"; // Иконка кавычек
import api from "../api";

export default function CommentBlock({ lg = "ru" }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [comments, setComments] = useState([]);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const getComments = async () => {
        await api.get("/getReviews")
        .then((res) => {
            setComments(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        setCurrentIndex(0); // сброс на первый слайд при смене языка
    }, [lg]);

    useEffect(() => {
        getComments();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === comments.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? comments.length - 1 : prevIndex - 1
        );
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            // swipe left
            if (currentIndex < comments.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }
        } else if (distance < -minSwipeDistance) {
            // swipe right
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    if (comments.length === 0) return <div>{lg === "ru" ? "Отзывов нет" : lg === "en" ? "No reviews" : lg === "kz" ? "Пікірлер жоқ" : "没有评论"}</div>;

    return (
        <div className="bg-white px-4 py-8 relative text-center max-w-[600px] mx-auto">
            <h2 className="text-[#911D16] font-bold text-[28px] mb-6">
                {lg === "ru" ? "Отзывы" : lg === "en" ? "Reviews" : lg === "kz" ? "Пікірлер" : "评论"}
            </h2>

            <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="border border-[#E0E0E0] rounded-lg shadow-md p-6 relative min-h-[300px] flex flex-col justify-between"
            >
                <div>
                    <img src={Quote} alt="quote" className="w-8 mx-auto mb-4" />
                    <p className="text-[#911D16] text-[20px] font-bold mb-3">
                        {comments[currentIndex]?.text[lg]}
                    </p>
                    <p className="text-gray-700 text-[16px] mb-4">
                        {comments[currentIndex]?.description[lg]}
                    </p>
                </div>
                <div className="mt-auto">
                    <p className="text-gray-900 font-bold">{comments[currentIndex]?.author[lg]}</p>
                    <p className="text-gray-500">{comments[currentIndex]?.location[lg]}</p>
                </div>
            </div>

            {/* Навигационные кнопки */}
            <div className="flex justify-center md:justify-between mt-6 gap-4">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-[#911D16] text-white flex items-center justify-center hover:bg-[#b22222] shadow"
                >
                    &#8249;
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-[#911D16] text-white flex items-center justify-center hover:bg-[#b22222] shadow"
                >
                    &#8250;
                </button>
            </div>

            {/* Индикаторы */}
            <div className="flex justify-center mt-4 space-x-2">
                {comments.map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-2.5 h-2.5 rounded-full ${
                            idx === currentIndex
                                ? "bg-[#911D16]"
                                : "bg-gray-300"
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}
