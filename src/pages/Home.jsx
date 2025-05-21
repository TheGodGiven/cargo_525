import { useState } from "react";
import Header from "../components/Header";
import Calc from "../components/Calc/Calc"
import InfoBlock from "../components/InfoBlock";
import Country from "../components/Country";
import ListInfoBlock from "../components/ListInfoBlock";
import AdvantagesBlock from "../components/AdvantagesBlock";
import CommentBlock from "../components/CommentBlock";
import Footer from "../components/Footer";

export default function Home() {
    const [lang, changeLang] = useState("ru");
    const [modal, setModal] = useState(false)

    const handleChange = (value) => {
        changeLang(value);
    };

    const changeModalState = () => {
        setModal(!modal)
    }

    return (
        <div style={{ fontFamily: "Montserrat" }} className="relative">
            {modal && <div onClick={changeModalState} className="z-[2000] fixed inset-0 flex items-center justify-center bg-black/50">
                <div 
                    onClick={(e) => e.stopPropagation()}
                    className="z-[2001] w-1/3 p-10 flex flex-col items-center bg-white rounded-lg relative"
                >
                    <div 
                        onClick={changeModalState}
                        className="absolute top-3 right-3 w-6 h-6 p-[4px] rounded-full flex items-center justify-center hover:bg-black/50 hover:text-white hover:cursor-pointer"
                    >
                        <div className="text-lg font-medium">X</div>
                    </div>
                    <div className="text-lg text-center font-medium">
                        {lang === "ru" ? "ЖД доставка рассчитывается индивидуально от 500кг" : 
                            lang === "kz" ? "Теміржол арқылы жеткізу 500 кг-нан жеке есептеледі" : 
                            lang === "en" ? "Railway delivery is calculated individually from 500 kg" : "铁路运输500公斤起单独计算"
                        }
                    </div>
                    <button className="bg-[#26c85f] px-14 py-3 text-lg font-medium text-white rounded-lg mt-5 hover:cursor-pointer">
                        {lang === "ru" ? "Связаться с менеджером" : lang === "kz" ? "Менеджерге хабарласу" : lang === "en" ? "Contact with manager" : "联系管理员"}
                    </button>
                </div>    
            </div>}
            <Header lg={lang} change={handleChange} />
            <Calc lg={lang} changeModalState={changeModalState}/>
            <InfoBlock lg={lang} />
            <Country lg={lang} change={handleChange} />
            <ListInfoBlock lg={lang} />
            <AdvantagesBlock lg={lang} />
            <CommentBlock lg={lang} />
            <Footer lg={lang} />
            <div className="fixed right-4 bottom-4 z-[3000] flex flex-col gap-3 sm:right-6 sm:bottom-6 sm:gap-4">
                {/* WhatsApp */}
                <a
                    href="https://wa.me/77079988525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg border border-white hover:scale-110 transition-transform"
                >
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="sm:w-7 sm:h-7 w-6 h-6"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.647.87 5.093 2.35 7.09L4 29l7.184-2.312A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.84-.58-5.4-1.58l-.38-.24-4.28 1.38 1.4-4.16-.25-.39A9.97 9.97 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.97-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" fill="#fff"/></svg>
                </a>
                {/* Instagram */}
                <a
                    href="https://www.instagram.com/cargo525.kz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg border border-white hover:scale-110 transition-transform"
                >
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="sm:w-7 sm:h-7 w-6 h-6"><rect x="6" y="6" width="20" height="20" rx="6" fill="url(#ig)"/><defs><linearGradient id="ig" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#f09433"/><stop offset="0.5" stopColor="#dc2743"/><stop offset="1" stopColor="#bc1888"/></linearGradient></defs><path d="M16 11.5A4.5 4.5 0 1 0 16 20.5A4.5 4.5 0 1 0 16 11.5Z" stroke="#fff" strokeWidth="2"/><circle cx="22.5" cy="9.5" r="1.5" fill="#fff"/></svg>
                </a>
                {/* YouTube */}
                <a
                    href="https://www.youtube.com/watch?v=dcSDvp1PKiA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF0000] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg border border-white hover:scale-110 transition-transform"
                >
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="sm:w-7 sm:h-7 w-6 h-6"><rect width="32" height="32" rx="16" fill="#FF0000"/><path d="M22.545 13.634c-.15-.566-.595-1.01-1.16-1.16C20.36 12.167 16 12.167 16 12.167s-4.36 0-5.385.307c-.566.15-1.01.594-1.16 1.16C9.167 14.66 9.167 16 9.167 16s0 1.34.288 2.366c.15.566.594 1.01 1.16 1.16C11.64 19.833 16 19.833 16 19.833s4.36 0 5.385-.307c.566-.15 1.01-.594 1.16-1.16.288-1.026.288-2.366.288-2.366s0-1.34-.288-2.366zM14.667 18.167v-4.334l4 2.167-4 2.167z" fill="#fff"/></svg>
                </a>
                {/* Telegram */}
                <a
                    href="https://t.me/kargo525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#229ED9] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg border border-white hover:scale-110 transition-transform"
                >
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="sm:w-7 sm:h-7 w-6 h-6"><circle cx="16" cy="16" r="16" fill="#229ED9"/><path d="M23.5 10.5L8.5 16l4.5 1.5M23.5 10.5L20 23.5l-3-6-3 3" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>
                </a>
            </div>
        </div>
    );
}
