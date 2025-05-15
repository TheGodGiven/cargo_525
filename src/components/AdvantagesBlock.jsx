import React from "react";
import ConsultingIcon from "../assets/ConsultingIcon.png";
import WatchIcon from "../assets/WatchIcon.png";
import TrainContainerIcon from "../assets/TrainContainerIcon.png";
import SeaDeliveryIcon from "../assets/SeaDeliveryIcon.png";
import GlobusIcon from "../assets/GlobusIcon.png";
import PayIcon from "../assets/PayIcon.png";
import BoxIcon from "../assets/BoxIcon.png";

export default function AdvantagesBlock(props) {
    const translations = {
        ru: {
            title: "НАШИ УСЛУГИ",
            services: [
                {
                    icon: WatchIcon,
                    title: "Быстрая автодоставка из Китая в Казахстан и Россию",
                    description: "Срок доставки — от 7 до 10 дней. Идеально для срочных грузов и регулярных поставок.",
                },
                {
                    icon: TrainContainerIcon,
                    title: "Доставка ЖД контейнерами",
                    description: "Экономичный способ перевозки крупных партий. Регулярные отправки, стабильные сроки, выгодные тарифы.",
                },
                {
                    icon: SeaDeliveryIcon,
                    title: "Морская доставка из Китая в Дубай",
                    description: "Организуем морские перевозки по проверенным маршрутам с приёмом на собственном складе в Дубае.",
                },
                {
                    icon: GlobusIcon,
                    title: "Поиск и закуп товаров в Китае",
                    description: "Подбираем надёжных поставщиков, ведём переговоры и организуем выкуп товаров.",
                },
                {
                    icon: BoxIcon,
                    title: "Проверка товара перед отправкой",
                    description: "Проверяем качество, комплектность, делаем фото и видеоотчёт для вашего спокойствия.",
                },
                {
                    icon: PayIcon,
                    title: "Оплата поставщику в юанях",
                    description: "Помогаем быстро и безопасно оплатить товар напрямую в Китае, без лишней бюрократии.",
                },
                {
                    icon: ConsultingIcon,
                    title: "Консультации и сопровождение на всех этапах",
                    description: "Вы не одни — мы рядом с первого вопроса до получения груза. Поддержка 24/7.",
                },
            ],
        },
        kz: {
            title: "БІЗДІҢ ҚЫЗМЕТТЕРІМІЗ",
            services: [
                {
                    icon: WatchIcon,
                    title: "Қытайдан Қазақстан мен Ресейге жедел автожеткізу",
                    description: "Жеткізу мерзімі — 7–10 күн. Шұғыл жүктер мен тұрақты жеткізілімдер үшін тамаша шешім.",
                },
                {
                    icon: TrainContainerIcon,
                    title: "Теміржол контейнерлерімен жеткізу",
                    description: "Ірі партияларды тасымалдаудың үнемді тәсілі. Тұрақты жөнелтулер, тұрақты мерзімдер, тиімді тарифтер.",
                },
                {
                    icon: SeaDeliveryIcon,
                    title: "Қытайдан Дубайға теңіз арқылы жеткізу",
                    description: "Дубайдағы өз қоймамыз арқылы тексерілген бағыттар бойынша теңіз тасымалдарын ұйымдастырамыз.",
                },
                {
                    icon: GlobusIcon,
                    title: "Қытайдан тауар іздеу және сатып алу",
                    description: "Сенімді жеткізушілерді таңдап, келіссөз жүргізіп, тауарды сатып алуды ұйымдастырамыз.",
                },
                {
                    icon: BoxIcon,
                    title: "Жіберер алдында тауарды тексеру",
                    description: "Сапасын, жинақтылығын тексеріп, фото және видео есеп ұсынамыз.",
                },
                {
                    icon: PayIcon,
                    title: "Жеткізушіге юаньмен төлеу",
                    description: "Қытайда тауарды тікелей, жылдам әрі қауіпсіз төлеуге көмектесеміз — артық құжатсыз.",
                },
                {
                    icon: ConsultingIcon,
                    title: "Барлық кезеңдерде кеңес беру және қолдау",
                    description: "Сіз жалғыз емессіз — алғашқы сұрақтан бастап жүктің қабылдануына дейін біз сізбен біргеміз. 24/7 қолдау.",
                },
            ],
        },
        en: {
            title: "OUR SERVICES",
            services: [
                {
                    icon: WatchIcon,
                    title: "Fast road delivery from China to Kazakhstan and Russia",
                    description: "Delivery time — 7 to 10 days. Ideal for urgent shipments and regular supplies.",
                },
                {
                    icon: TrainContainerIcon,
                    title: "Rail container delivery",
                    description: "A cost-effective solution for transporting large shipments. Regular departures, stable timelines, competitive rates.",
                },
                {
                    icon: SeaDeliveryIcon,
                    title: "Sea freight from China to Dubai",
                    description: "We organize sea transport via proven routes, with receipt at our own warehouse in Dubai.",
                },
                {
                    icon: GlobusIcon,
                    title: "Product sourcing and purchasing in China",
                    description: "We find reliable suppliers, conduct negotiations, and arrange product purchases.",
                },
                {
                    icon: BoxIcon,
                    title: "Pre-shipment product inspection",
                    description: "We check quality and completeness, and provide photo and video reports for your peace of mind.",
                },
                {
                    icon: PayIcon,
                    title: "Supplier payments in yuan",
                    description: "We help you pay Chinese suppliers quickly and securely, without unnecessary bureaucracy.",
                },
                {
                    icon: ConsultingIcon,
                    title: "Consulting and full support at every stage",
                    description: "You’re not alone — we’re with you from the first question to final delivery. 24/7 support.",
                },
            ],
        },
        ch: {
            title: "我们的服务:",
            services: [
                {
                    icon: WatchIcon,
                    title: "中国至哈萨克斯坦、俄罗斯的快速汽车运输",
                    description: "运输时效为7至10天，适合紧急货物及定期发货需求。",
                },
                {
                    icon: TrainContainerIcon,
                    title: "铁路集装箱运输",
                    description: "适用于大批量货物的经济运输方案。发货周期稳定，价格优惠。",
                },
                {
                    icon: SeaDeliveryIcon,
                    title: "中国至迪拜的海运服务",
                    description: "通过我们自有仓库接收货物，安排经可靠航线的海运运输。",
                },
                {
                    icon: GlobusIcon,
                    title: "中国商品采购与代购服务",
                    description: "协助寻找可靠供应商，谈判沟通并完成采购流程。",
                },
                {
                    icon: BoxIcon,
                    title: "发货前的质量检查",
                    description: "检查产品质量与配件齐全度，并提供照片和视频报告，确保您的安心。",
                },
                {
                    icon: PayIcon,
                    title: "支付人民币给中国供应商",
                    description: "帮助您快速、安全地完成对中国供应商的付款，无需繁琐手续。",
                },
                {
                    icon: ConsultingIcon,
                    title: "全流程咨询与支持服务",
                    description: "从第一个问题到货物签收，我们始终陪伴在侧。提供24/7全天候服务支持。",
                },
            ],
        },
    };

    const translation = translations[props.lg] || translations["ru"];

    return (
        <div className="py-16 px-8 bg-white">
            <h2 className="text-center text-[#911D16] font-bold text-[36px] mb-12">
                {translation.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {translation.services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-start bg-white p-6 rounded-lg shadow-md ${
                            index === translation.services.length - 1 ? "lg:col-span-1 lg:col-start-2" : ""
                        }`}
                    >
                        <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
                        <h3 className="text-[#911D16] font-bold text-[18px] mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-700 text-[16px]">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}