
import RedContainer from "../assets/RedContainer.png"

export default function InfoBlock(props) {

    return (
        <>
            <div className="md:hidden mx-[20px] mt-[50px]">
                <div>
                    <div className="text-[21px] text-[#911D16] font-semibold">
                        {props.lg === "ru" && "Cargo525 — доставка из Китая в Казахстан, Россию и ОАЭ без границ"}
                        {props.lg === "kz" && "Cargo525 — Қытайдан Қазақстанға, Ресейге және БАӘ-ге шекарасыз жеткізу"}
                        {props.lg === "en" && "Cargo525 — Cross-border delivery from China to Kazakhstan, Russia, and the UAE"}
                        {props.lg === "ch" && "Cargo525 — 无国界运输服务，从中国发往哈萨克斯坦、俄罗斯及阿联酋"}
                    </div>
                    <div className="text-[15px] font-normal mt-7px">
                        {props.lg === "ru" && "С 2005 года мы помогаем бизнесу организовывать стабильные и выгодные поставки из Китая. Благодаря собственной инфраструктуре, профессиональной команде и выстроенной системе логистики, мы берём на себя все этапы доставки: от приёма груза на складе до его выдачи получателю."}
                        {props.lg === "kz" && "2005 жылдан бері біз бизнесті Қытайдан тұрақты және тиімді жеткізілімдерді ұйымдастыруға көмектесеміз. Өз инфрақұрылымымыздың, кәсіби команда мен логистика жүйесінің арқасында біз жүктің қоймада қабылдануынан бастап, оны алушыға беруіне дейінгі барлық жеткізу кезеңдерін өзіміз аламыз."}
                        {props.lg === "en" && "Since 2005, we have been helping businesses organize stable and profitable deliveries from China. Thanks to our own infrastructure, professional team and established logistics system, we take on all stages of delivery: from receiving the cargo at the warehouse to handing it over to the recipient."}
                        {props.lg === "ch" && "自2005年以来，我们致力于帮助企业组织来自中国的稳定且高效的货物运输。依托自有的基础设施、专业团队及完善的物流体系，我们全程负责货物运输的每一个环节——从仓库接收货物到最终交付收件人。"}
                    </div>
                </div>
                <div className="mt-4 flex justify-end">
                    <img src={RedContainer} alt="RedContainer" className="w-2/3"/>
                </div>
                <div className="mt-4">
                    <button className="w-full flex justify-center items-center bg-[#2F7FDE] rounded-[5px] px-[20px] py-[10px] mt-[10px]">
                        <a href="https://wa.me/77079988525" className="text-[14px] text-[#FFF3F3] font-medium ">
                            {props.lg === "ru" && "Бесплатная консультация"}
                            {props.lg === "kz" && "Тегін кеңес алу"}
                            {props.lg === "en" && "Free consultation"}
                            {props.lg === "ch" && "免费咨询"}
                        </a>
                    </button>
                </div>
            </div>

            <div className="hidden md:container md:mx-auto md:mt-[50px] md:flex md:justify-between md:items-center md:gap-x-[40px]">
                <div className="w-1/2">
                    <div className="text-[21px] uppercase font-semibold">
                        {props.lg === "ru" && "Cargo525 — доставка из Китая в Казахстан, Россию и ОАЭ без границ"}
                        {props.lg === "kz" && "Cargo525 — Қытайдан Қазақстанға, Ресейге және БАӘ-ге шекарасыз жеткізу"}
                        {props.lg === "en" && "Cargo525 - delivery from China to Kazakhstan, Russia and the UAE without borders"}
                        {props.lg === "ch" && "Cargo525 — 无国界运输服务，从中国发往哈萨克斯坦、俄罗斯及阿联酋"}
                    </div>
                    <div className="text-[15px] font-normal mt-[17px]">
                        {props.lg === "ru" && "С 2005 года мы помогаем бизнесу организовывать стабильные и выгодные поставки из Китая. Благодаря собственной инфраструктуре, профессиональной команде и выстроенной системе логистики, мы берём на себя все этапы доставки: от приёма груза на складе до его выдачи получателю."}
                        {props.lg === "kz" && "2005 жылдан бастап біз бизнеске Қытайдан тұрақты және тиімді жеткізілімдерді ұйымдастыруға көмектесіп келеміз. Өз инфрақұрылымымыздың, кәсіби командамыздың және жақсы жолға қойылған логистика жүйесінің арқасында біз жеткізудің барлық кезеңдерін өз мойнымызға аламыз: қоймада жүкті қабылдаудан бастап, оны алушыға тапсырғанға дейін."}
                        {props.lg === "en" && "Since 2005, we’ve been helping businesses organize reliable and cost-effective shipments from China. With our own infrastructure, a professional team, and a well-established logistics system, we handle every stage of the delivery process — from receiving goods at the warehouse to final handover to the recipient."}
                        {props.lg === "ch" && "自2005年以来，我们致力于帮助企业组织来自中国的稳定且高效的货物运输。依托自有的基础设施、专业团队及完善的物流体系，我们全程负责货物运输的每一个环节——从仓库接收货物到最终交付收件人。"}
                    </div>
                    <div className="mt-[35px]">
                        <button className="flex justify-center items-center bg-[#2F7FDE] rounded-[5px] px-[40px] py-[20px] mt-[20px]">
                            <a href="https://wa.me/77079988525" className="text-[18px] text-[#FFF3F3] font-medium ">
                                {props.lg === "ru" && "Бесплатная консультация"}
                                {props.lg === "kz" && "Тегін кеңес алу"}
                                {props.lg === "en" && "Free consultation"}
                                {props.lg === "ch" && "免费咨询"}
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