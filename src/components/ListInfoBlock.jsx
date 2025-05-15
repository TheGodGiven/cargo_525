import React from "react";
import BackgroundImage from "../assets/ListInfoBlock.png";
import CloudBG from "../assets/CloudBG.png";

export default function ListInfoBlock(props) {
    const translations = {
        ru: {
            title: "ПОЧЕМУ ВЫБИРАЮТ НАС?",
            items: [
                "18 лет на рынке — мы знаем всё о китайской логистике и международных поставках.",
                "Собственная сеть складов в Китае, Казахстане, России и ОАЭ.",
                "Минимальный вес отправки — от 20 кг.",
                "Прозрачные тарифы — от $0.90/кг, в зависимости от категории и плотности груза",
                "Гибкие способы доставки: \n •⁠  ⁠Автодоставка — от 7–10 дней \n •⁠  ⁠ЖД контейнеры — экономичное решение для больших объемов \n •⁠  ⁠Морская доставка в Дубай — выгодно и удобно для выхода на рынок Ближнего Востока",
                "Полное сопровождение — от подбора товара до оплаты и получения",
                "Работаем без посредников — только вы и наша команда",
                "Поддержка 24/7 — всегда на связи",
            ],
        },
        kz: {
            title: "НЕЛІКТЕН Cargo525 ТАҢДАЙДЫ?",
            items: [
                "18 жылдық тәжірибе — біз Қытай логистикасы мен халықаралық жеткізілімдер туралы бәрін білеміз",
                "Қытайда, Қазақстанда, Ресейде және БАӘ-де өз қоймалар желісі",
                "Жіберілімнің ең төменгі салмағы — 20 кг",
                "Ашық тарифтер — $0.90/кг бастап, жүктің санаты мен тығыздығына байланысты",
                "Икемді жеткізу тәсілдері: \n •⁠  ⁠Автокөлікпен жеткізу — 7–10 күннен бастап \n •⁠  ⁠Теміржол контейнерлері — ірі көлемге үнемді шешім \n •⁠  ⁠Дубайға теңіз арқылы жеткізу — Таяу Шығыс нарығына шығуға тиімді жол",
                "Толық сүйемелдеу — тауар таңдаудан бастап, төлем мен қабылдауға дейін",
                "Делдалсыз жұмыс — тек сіз және біздің командамыз",
                "24/7 қолдау — әрдайым байланыстамыз",
            ],
        },
        en: {
            title: "WHY CHOOSE US?",
            items: [
                "18 years in the market — we know everything about Chinese logistics and international shipping",
                "Our own network of warehouses in China, Kazakhstan, Russia, and the UAE",
                "Minimum shipment weight — from 20 kg",
                "Transparent pricing — from $0.90/kg, depending on cargo category and density",
                "Flexible delivery options: \n•⁠  ⁠Road delivery — from 7–10 days \n •⁠  ⁠Rail containers — a cost-effective solution for large volumes \n •⁠  ⁠Sea freight to Dubai — efficient and convenient for entering the Middle Eastern market",
                "Full support — from product sourcing to payment and delivery",
                "No intermediaries — just you and our team",
                "24/7 support — always in touch",
            ],
        },
        ch: {
            title: "为什么选择我们？",
            items: [
                "18年行业经验 — 深耕中国物流与国际运输",
                "在中国、哈萨克斯坦、俄罗斯、阿联酋拥有自建仓库网络",
                "最低起运重量为20公斤",
                "透明价格 — 每公斤起价$0.90，视货物种类与密度而定",
                "多样化运输方式：\n •⁠  ⁠汽车运输 — 时效7–10天 \n •⁠  ⁠铁路集装箱 — 大宗货物的经济之选 \n •⁠  ⁠海运至迪拜 — 打开中东市场的便捷通道",
                "全程服务 — 从选品、支付到收货",
                "无中介 — 只有您与我们的团队直接合作",
                "24/7全天候支持 — 随时响应您的需求",
            ],
        },
    };

    const translation = translations[props.lg] || translations["ru"];

    return (
        <>
            <div
                className="relative hidden md:block pt-16 pb-40  px-8"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h2 className="text-center text-[#911D16] font-bold text-[36px] mb-12">
                    {translation.title}
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                    {translation.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <span className="text-[#911D16] font-bold text-[36px]">{index + 1}</span>
                            <p className="text-[18px] text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
                <div
                    className="absolute bottom-[-20px] left-0 w-full h-[100px] bg-repeat bg-center"
                    style={{
                        backgroundImage: `url(${CloudBG})`,
                        backgroundSize: "contain",
                    }}
                ></div>
            </div>
            <div className="md:hidden bg-white py-8 px-auto mx-6 text-center">
                <h2 className="text-center text-[#911D16] font-bold text-[24px] mb-6">
                    {translation.title}
                </h2>
                <ul className="flex flex-col gap-4">
                    {translation.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="text-[#911D16] font-bold text-[24px] items-center">{index + 1}</span>
                            <p className="text-[16px] text-gray-700">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}