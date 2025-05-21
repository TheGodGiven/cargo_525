import Logo from "../assets/Logo.png"
import LogoMobile from "../assets/LogoMobile.png"
import Phone from "../assets/Phone.png"
import HeadPhotoMobile from "../assets/HeadPhotoMobile.png"
import HeadPhoto from "../assets/HeadPhoto.png"
import BGHead from"../assets/BGHead.png"
import { useEffect } from "react"

export default function Header(props) {

    return (
        <div style={{
            backgroundImage: `url(${BGHead})`
        }}>

            <div className="container mx-auto pt-5 px-5 md:px-0">

                <div className="flex items-center justify-between bg-[#911D16] rounded-xl px-5 py-4 lg:px-20">
                    <div className="lg:hidden">
                        <img src={LogoMobile} alt="logo" className="w-[75px] h-[31px]"/>
                    </div>
                    <div className="hidden lg:block">
                        <img src={Logo} alt="logo" className="w-[190px] h-[19px]"/>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div>
                            <img src={Phone} alt="Phone" className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>

                        <div>
                            <div className="text-[#FFF3F3] font-bold">
                                8 (777) 774-77-77
                            </div>
                            <div className="text-[#FFF3F3] text-[10px]">
                                {props.lg === "ru" && "Ежедневно с 9:00 до 20:00"}
                                {props.lg === "kz" && "Күн сайын 9:00-ден 20:00-ге дейін"}
                                {props.lg === "en" && "Daily from 9:00 to 20:00"}
                                {props.lg === "ch" && "每天9:00至20:00"}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-[10px]"> 
                        <select 
                            name="lang" 
                            id="" 
                            className="border border-[#E0E0E0] rounded-[5px] px-3 py-1.5 max-w-max mt-1 bg-white"
                            onChange={(event) => {
                                props.change(event.target.value)
                            }}
                        >
                            <option value="ru">ru</option>
                            <option value="kz">kz</option>
                            <option value="en">en</option>
                            <option value="ch">ch</option>
                        </select>
                </div>
                <div className="flex flex-col md:flex-row mt-6 lg:mt-[27px]">
                    <div className="md:w-1/2">
                        <p className="text-2xl lg:text-5xl text-[#911D16] font-bold md:w-[110%]">
                            {props.lg === "ru" && "Грузоперевозки из Китая в Казахстан, Россию и ОАЭ"}
                            {props.lg === "kz" && "Қытайдан Қазақстанға, Ресейге және БАӘ-ге жүк тасымалдау"}
                            {props.lg === "en" && "Cargo transportation from China to Kazakhstan, Russia and UAE"}
                            {props.lg === "ch" && "从中国到哈萨克斯坦、俄罗斯和阿联酋的货物运输"}
                        </p>
                        <p className="text-[13px] lg:text-[20px] text-[#2E363E] md:w-[75%] mt-1.5 ">
                            {props.lg === "ru" && "Вы ищете логистику, которой можно доверять?\nДобро пожаловать в Cargo525."}
                            {props.lg === "kz" && "Сенуге болатын логистиканы іздеп жүрсіз бе?\nCargo525-ке қош келдіңіз."}
                            {props.lg === "en" && "Are you looking for logistics you can trust?\nWelcome to Cargo525."}
                            {props.lg === "ch" && "您在寻找值得信赖的物流吗？\n欢迎来到 Cargo525。"}
                        </p>
                    </div>
                    
                    <div className="hidden md:block mt-14 lg:mt-[100px] w-1/2">
                            <img src={HeadPhoto} alt="logo" className="w-[130%] max-w-[130%] -ml-[120px]"/>
                    </div>
                </div>
            </div>

            <div className="md:hidden">
                <img src={HeadPhotoMobile} alt="logo" className="w-full h-[30%] mt-1.5 sm:h-[40%]"/>
            </div>
        </div>
    )
}