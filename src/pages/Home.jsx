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
        </div>
    );
}
