
import RedContainer from "../assets/RedContainer.png"

export default function InfoBlock(props) {

    return (
        <>
            <div className="md:hidden mx-[20px] mt-[50px]">
                <div>
                    <div className="text-[21px] text-[#911D16] font-semibold">
                        {props.lg === "ru" && "Cargo525 — доставка из Китая в Казахстан, Россию и ОАЭ без границ"}
                        {props.lg === "kz" && "Cargo525 — Қытайдан Қазақстанға, Ресейге және БАӘ-ге шекарасыз жеткізу"}
                        {props.lg === "en" && "Cargo525 - delivery from China to Kazakhstan, Russia and the UAE without borders"}
                    </div>
                    <div className="text-[15px] font-normal mt-7px">
                        {props.lg === "ru" && "С 2005 года мы помогаем бизнесу организовывать стабильные и выгодные поставки из Китая. Благодаря собственной инфраструктуре, профессиональной команде и выстроенной системе логистики, мы берём на себя все этапы доставки: от приёма груза на складе до его выдачи получателю."}
                        {props.lg === "kz" && "2005 жылдан бері біз бизнесті Қытайдан тұрақты және тиімді жеткізілімдерді ұйымдастыруға көмектесеміз. Өз инфрақұрылымымыздың, кәсіби команда мен логистика жүйесінің арқасында біз жүктің қоймада қабылдануынан бастап, оны алушыға беруіне дейінгі барлық жеткізу кезеңдерін өзіміз аламыз."}
                        {props.lg === "en" && "Since 2005, we have been helping businesses organize stable and profitable deliveries from China. Thanks to our own infrastructure, professional team and established logistics system, we take on all stages of delivery: from receiving the cargo at the warehouse to handing it over to the recipient."}
                    </div>
                </div>
                <div className="flex justify-end">
                    <img src={RedContainer} alt="RedContainer" className="w-2/3"/>
                </div>
            </div>

            <div className="hidden md:container md:mx-auto md:mt-[50px] md:flex md:justify-between md:items-center md:gap-x-[40px]">
                <div className="w-1/2">
                    <div className="text-[21px] uppercase font-semibold">
                        {props.lg === "ru" && "Cargo525 — доставка из Китая в Казахстан, Россию и ОАЭ без границ"}
                        {props.lg === "kz" && "Cargo525 — Қытайдан Қазақстанға, Ресейге және БАӘ-ге шекарасыз жеткізу"}
                        {props.lg === "en" && "Cargo525 - delivery from China to Kazakhstan, Russia and the UAE without borders"}
                    </div>
                    <div className="text-[15px] font-normal mt-[17px]">
                        {props.lg === "ru" && "С 2005 года мы помогаем бизнесу организовывать стабильные и выгодные поставки из Китая. Благодаря собственной инфраструктуре, профессиональной команде и выстроенной системе логистики, мы берём на себя все этапы доставки: от приёма груза на складе до его выдачи получателю."}
                        {props.lg === "kz" && "2005 жылдан бері біз бизнесті Қытайдан тұрақты және тиімді жеткізілімдерді ұйымдастыруға көмектесеміз. Өз инфрақұрылымымыздың, кәсіби команда мен логистика жүйесінің арқасында біз жүктің қоймада қабылдануынан бастап, оны алушыға беруіне дейінгі барлық жеткізу кезеңдерін өзіміз аламыз."}
                        {props.lg === "en" && "Since 2005, we have been helping businesses organize stable and profitable deliveries from China. Thanks to our own infrastructure, professional team and established logistics system, we take on all stages of delivery: from receiving the cargo at the warehouse to handing it over to the recipient."}
                    </div>
                    <div className="mt-[35px]">
                        <button className="flex justify-center items-center bg-[#2F7FDE] rounded-[5px] px-[40px] py-[20px] mt-[20px]">
                            <a href="tel:+77272625252" className="text-[18px] text-[#FFF3F3] font-medium ">
                                {props.lg === "ru" && "Бесплатная консультация"}
                                {props.lg === "kz" && "Тегін кеңес алу"}
                                {props.lg === "en" && "Free consultation"}
                            </a>
                        </button>
                    </div>
                </div >
                <div className="flex justify-end w-1/2">
                    <img src={RedContainer} alt="RedContainer"/>
                </div>
            </div>
        </>
    )
}