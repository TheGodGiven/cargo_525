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
                    title: "Қытайдан Қазақстан мен Ресейге жылдам автотасымал",
                    description: "Жеткізу мерзімі — 7-10 күн. Шұғыл жүктер мен тұрақты жеткізілімдер үшін мінсіз.",
                },
                {
                    icon: TrainContainerIcon,
                    title: "Контейнерлерді теміржолмен жеткізу",
                    description: "Ірі партияларды тасымалдаудың үнемді тәсілі. Тұрақты жөнелтулер, тұрақты мерзімдер, тиімді тарифтер.",
                },
                {
                    icon: SeaDeliveryIcon,
                    title: "Қытайдан Дубайға теңіз тасымалы",
                    description: "Дубайдағы қоймада қабылдаумен тексерілген маршруттар бойынша теңіз тасымалдарын ұйымдастырамыз.",
                },
                {
                    icon: GlobusIcon,
                    title: "Қытайда тауарларды іздеу және сатып алу",
                    description: "Сенімді жеткізушілерді таңдаймыз, келіссөздер жүргіземіз және тауарларды сатып алуды ұйымдастырамыз.",
                },
                {
                    icon: BoxIcon,
                    title: "Жөнелту алдында тауарды тексеру",
                    description: "Сапаны, жинақтылықты тексереміз, фото және бейне есеп береміз.",
                },
                {
                    icon: PayIcon,
                    title: "Юаньмен жеткізушіге төлем",
                    description: "Қытайда тауарды тікелей төлеуге тез және қауіпсіз көмектесеміз, артық бюрократиясыз.",
                },
                {
                    icon: ConsultingIcon,
                    title: "Барлық кезеңдерде кеңес беру және қолдау",
                    description: "Сіз жалғыз емессіз — біз бірінші сұрақтан бастап жүк алғанға дейін жанымыздамыз. Қолдау 24/7.",
                },
            ],
        },
        en: {
            title: "OUR SERVICES",
            services: [
                {
                    icon: WatchIcon,
                    title: "Fast auto delivery from China to Kazakhstan and Russia",
                    description: "Delivery time — from 7 to 10 days. Ideal for urgent cargo and regular shipments.",
                },
                {
                    icon: TrainContainerIcon,
                    title: "Rail container delivery",
                    description: "An economical way to transport large batches. Regular shipments, stable terms, favorable rates.",
                },
                {
                    icon: SeaDeliveryIcon,
                    title: "Sea delivery from China to Dubai",
                    description: "We organize sea transportation along proven routes with acceptance at our own warehouse in Dubai.",
                },
                {
                    icon: GlobusIcon,
                    title: "Search and purchase of goods in China",
                    description: "We select reliable suppliers, negotiate, and organize the purchase of goods.",
                },
                {
                    icon: BoxIcon,
                    title: "Inspection of goods before shipment",
                    description: "We check quality, completeness, take photos and video reports for your peace of mind.",
                },
                {
                    icon: PayIcon,
                    title: "Payment to the supplier in yuan",
                    description: "We help you quickly and safely pay for goods directly in China, without unnecessary bureaucracy.",
                },
                {
                    icon: ConsultingIcon,
                    title: "Consultations and support at all stages",
                    description: "You are not alone — we are with you from the first question to receiving the cargo. Support 24/7.",
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
                        className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md"
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