import { useEffect, useState } from "react";
import CalcSelect from "./CalcSelect";
import CalcInput from "./CalcInput";
import CalcButton from "./CalcButton";
import CalcProduct from "./CalcProduct";
import clsx from "clsx";
import Auto from "./calcAssets/Auto.png";
import Train from "./calcAssets/Train.png";
import CalcBG from "./calcAssets/CalcBG.png";
import CalcResult from "./CalcResult";

export default function Calc(props) {
    const [form, setForm] = useState({
        productType: { value: "product1", city: "Единый (хозяйственные товары)" },
        to: { value: "ala", city: "Казахстан, Алматы" },
        weight: "",
        volume: "",
        width: "",
        height: "",
        length: "",
        sumofbox: "",
        name: "",
        phone: "",
        postType: false,
    });

    const [modal, setModal] = useState(false);

    const [sum, setSum] = useState(null);

    const translations = {
        ru: {
            title: "РАСЧИТАТЬ СТОИМОСТЬ\nГРУЗОПЕРЕВОЗКИ",
            subtitle: "Сроки доставки не сохраняются при сборных грузах и несвоевременном оформление груза через менеджера",
            fromCity: "Откуда(город)*",
            toCity: "Куда(город)*",
            weight: "Вес (кг) минимально 100кг!*",
            volume: "Объем, м3*",
            name: "Имя*",
            phone: "Номер телефона*",
            length: "Длина, см*",
            width: "Ширина, см*",
            height: "Высота, см*",
            sumofbox: "Количество коробок",
            calculate: "Рассчитать стоимость",
            train: "ЖД",
            auto: "Авто",
            autoDescription: "(до 15 дней от 20 кг)",
            productType: "Тип товара",
            resultKg: "Цена за 1 кг:",
            resultCube: "Цена за куб:",
            resultDensity: "Плотность:",
            resultDefault: "Стоимость доставки без упаковки*:",
            resultSimple: "Стоимость доставки с простой упаковкой:",
        },
        en: {
            title: "CALCULATE THE COST\nOF CARGO TRANSPORTATION",
            subtitle: "Delivery times are not maintained for consolidated cargo and untimely clearance of cargo through the manager",
            fromCity: "From (city)*",
            toCity: "To (city)*",
            weight: "Weight (kg), minimum 100kg!*",
            volume: "Volume, m3*",
            name: "Name*",
            phone: "Phone number*",
            length: "Length, cm*",
            width: "Width, cm*",
            height: "Height, cm*",
            sumofbox: "Sum of boxes",
            calculate: "Calculate cost",
            train: "Train",
            auto: "Auto",
            autoDescription: "(up to 15 days from 20 kg)",
            productType: "Product type",
            resultKg: "Price per 1 kg:",
            resultCube: "Price per cubic meter:",
            resultDensity: "Density:",
            resultDefault: "Delivery cost without packaging*:",
            resultSimple: "Delivery cost with simple packaging:",
        },
        kz: {
            title: "ЖҮК ТАСЫМАЛДАРЫНЫҢ\nҚҰНЫН ЕСЕПТЕУ",
            subtitle: "Біріктірілген жүктер мен жүкті басқарушы арқылы уақтылы ресімдемегені үшін жеткізу мерзімдері сақталмайды",
            fromCity: "Қайдан (қала)*",
            toCity: "Қайда (қала)*",
            weight: "Салмағы (кг), минималды 100кг!*",
            volume: "Көлем, м3*",
            name: "Аты-жөні*",
            phone: "Телефон нөмірі*",
            length: "Ұзындығы, см*",
            width: "Ені, см*",
            height: "Биіктігі, см*",
            sumofbox: "Қораптардың саны,",
            calculate: "Құнын есептеу",
            train: "ЖД",
            auto: "Авто",
            autoDescription: "(20 кг-нан 15 күнге дейін)",
            productType: "Тауар түрі",
            resultKg: "1 кг үшін баға:",
            resultCube: "Куб үшін баға:",
            resultDensity: "Тығыздық:",
            resultDefault: "Қаптамасыз жеткізу құны*:",
            resultSimple: "Қарапайым қаптамамен жеткізу құны:",
        },
        ch: {
            title: "计算货物运输的费用",
            subtitle: "无法维持合并货物的交货时间，并且无法及时通过经理清关货物",
            fromCity: "从哪里（城市）*",
            toCity: "到哪里（城市）*",
            weight: "重量（公斤），最少100公斤！*",
            volume: "体积，立方米*",
            name: "名字*",
            phone: "电话号码*",
            length: "长度，厘米*",
            width: "宽度，厘米*",
            height: "高度，厘米*",
            sumofbox: "数量",
            calculate: "计算费用",
            train: "火车",
            auto: "汽车",
            autoDescription: "(20公斤起最多15天)",
            productType: "产品类型",
            resultKg: "每公斤价格：",
            resultCube: "每立方米价格：",
            resultDensity: "密度：",
            resultDefault: "不含包装的运费*：",
            resultSimple: "含普通包装的运费：",
        },
    };

    const translation = translations[props.lg] || translations["ru"];

    const productTypes = [
        { value: "product1", city: "Единый (хозяйственные товары)" },
        { value: "product2", city: "Техника(мелкая бытовая, телефоны, компьютеры)" },
        { value: "product3", city: "Одежда (текстиль, сумки)" },
        { value: "product4", city: "Обувь" },
    ];

    const toCities = [
        { value: "ala", city: "Казахстан, Алматы" },
        { value: "msc", city: "Россия, Москва" },
    ];

    const changeForm = (name, value) => {
        if (name === "width" || name === "height" || name === "length" || name === "sumofbox") {
            const width = name === "width" ? value : form.width;
            const height = name === "height" ? value : form.height;
            const length = name === "length" ? value : form.length;
            const sumofbox = name === "sumofbox" ? value : form.sumofbox;
            
            if (width && height && length && sumofbox) {
                const calculatedVolume = ((width * height * length) / 1000000) * sumofbox;
                setForm(prev => ({
                    ...prev,
                    [name]: value,
                    volume: calculatedVolume.toFixed(3)
                }));
                return;
            }
        }

        if (name === "width" || name === "height" || name === "length" || name === "sumofbox" && value === "") {
            setSum(null);
            setForm(prev => ({
                ...prev,
                [name]: value,
                volume: ""
            }));
            return;
        }

        setForm({ ...form, [name]: value });
    };

    const calculate = () => {
        const res = CalcResult({
            r: form.productType?.value === "product1" ? 100 : form.productType?.value === "product2" ? 200 : form.productType?.value === "product3" ? 300 : form.productType?.value === "product4" ? 400 : 0,
            u: form?.to?.value === "ala" ? 100 : 200,
            s: form.postType === false ? 100 : 200,
            e: form.length,
            f: form.width,
            g: form.height,
            h: form.sumofbox, 
            i: form.weight, 
            k: form.volume
        });

        setSum(res);
    };

    return (
        <>
            <div className="container mx-auto pt-5 px-5 md:px-0 md:hidden">
                <div className="mt-5 border border-[#E0E0E0] rounded-[16px] py-5 px-7">
                    <div className="text-[#911D16] text-[21px] font-semibold text-center">
                        {translation.title}
                    </div>
                    <div className="">
                        <div className="ml-3 mt-4">
                            {props.lg === "ru" ? "Способ доставки:" : props.lg === "en" ? "Delivery method" : props.lg === "kz" ? "Жеткізу әдісі" : "配送方式"}
                        </div>
                        <div className="flex items-center gap-x-3 ml-1">
                            <div className="rounded-full max-w-max ml-1 border border-[#949393] p-[2px] mt-1 hover:cursor-pointer">
                                <div className="rounded-full bg-[#911D16] w-3 h-3"></div>
                            </div>
                            <div className="mt-1">{props.lg === "ru" ? "Авто:" : props.lg === "en" ? "Auto" : props.lg === "kz" ? "Авто" : "汽车"} {translation.autoDescription}</div>
                        </div>

                        <div className="mt-2 ml-2 text-sm text-[#8f8d8d]">
                            {props.lg === "ru" ? "ЖД доставка рассчитывается индивидуально от 500кг" : 
                                props.lg === "kz" ? "Теміржол арқылы жеткізу 500 кг-нан жеке есептеледі" : 
                                props.lg === "en" ? "Railway delivery is calculated individually from 500 kg" : "铁路运输500公斤起单独计算"
                            }
                        </div>
                        <div className="text-sm mt-1 ml-2">
                            {translation.subtitle}
                        </div>
                        
                        <CalcSelect
                            title={translation.productType}
                            cities={productTypes}
                            onHandleChange={changeForm}
                            name="productType"
                        />
                        <CalcSelect
                            title={translation.toCity}
                            cities={toCities}
                            onHandleChange={changeForm}
                            name="to"
                        />
                        <CalcInput
                            title={translation.width}
                            onHandleChange={changeForm}
                            type="N"
                            value={form.width}
                            name="width"
                        />
                        <CalcInput
                            title={translation.height}
                            onHandleChange={changeForm}
                            type="N"
                            value={form.height}
                            name="height"
                        />
                        <CalcInput
                            title={translation.length}
                            onHandleChange={changeForm}
                            type="N"
                            value={form.length}
                            name="length"
                        />
                        <CalcInput
                            title={translation.sumofbox}
                            onHandleChange={changeForm}
                            type="N"
                            value={form.sumofbox}
                            name="sumofbox"
                        />
                        <CalcInput
                            title={translation.weight}
                            onHandleChange={changeForm}
                            type="N"
                            value={form.weight}
                            name="weight"
                        />
                        <CalcInput
                            title={translation.volume}
                            onHandleChange={changeForm}
                            type="N"
                            value={form.volume}
                            name="volume"
                        />

                        <div className="flex justify-center">
                            <button onClick={calculate} className="bg-[#2F7FDE] px-14 py-3 text-lg font-medium text-white rounded-lg mt-5">
                                {translation.calculate}
                            </button>
                        </div>

                        {sum !== null && <div className="mt-2">
                            <div className="flex items-start justify-between gap-x-2">
                                <div>{translation.resultKg}</div>
                                <div>{sum.kgPrice}$</div>
                            </div>

                            <div className="flex items-start justify-between gap-x-2">
                                <div>{translation.resultCube}</div>
                                <div>{sum.kubePrice}$</div>
                            </div>

                            <div className="flex items-start justify-between gap-x-2">
                                <div>{translation.resultDensity}</div>
                                <div>{sum.density}п</div>
                            </div>

                            <div className="flex items-start justify-between gap-x-2">
                                <div>{translation.resultDefault}</div>
                                <div>{sum.defaultPrice}$</div>
                            </div>

                            <div className="flex items-start justify-between gap-x-2">
                                <div>{translation.resultSimple}</div>
                                <div>{sum.simplePrice}$</div>
                            </div>
                        </div>
                        }

                        <div className="flex justify-center">
                            <button className="bg-[#26c85f] px-14 py-3 font-medium text-white rounded-lg mt-5">
                                <a href="https://wa.me/77079988525">
                                    {props.lg === "ru" ? "Связаться с менеджером" : props.lg === "kz" ? "Менеджерге хабарласу" : props.lg === "en" ? "Contact with manager" : "联系管理员"}
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block container mx-auto mt-10">
                <div className="border border-[#E0E0E0] rounded-[19px] py-[30px] px-10 lg:py-[43px] lg:px-[80px] relative overflow-hidden">
                    <div className="text-[#911D16] text-[21px] md:text-[30px] font-semibold">
                        {translation.title}
                    </div>

                    <div className="mt-1 text-sm">
                        {translation.subtitle}
                    </div>

                    <div className="">
                        <div className="flex justify-between gap-x-10 w-full">
                            <div className="w-1/2">
                                <CalcSelect
                                    title={translation.productType}
                                    cities={productTypes}
                                    onHandleChange={changeForm}
                                    name="productType"
                                />
                                <CalcSelect
                                    title={translation.toCity}
                                    cities={toCities}
                                    onHandleChange={changeForm}
                                    name="to"
                                />
                            </div>
                            <div className="mt-5 w-1/2">
                                <div className="flex items-start justify-center gap-x-3 mb-9">
                                    <div className="flex flex-col items-center md:w-[45%] lg:w-[100%]">
                                        <p className="text-[18px] font-light texy-[#2E363E]">
                                            {translation.train}
                                        </p>
                                        {/* <p className="text-sm text-[#7d7b7b]">
                                            {translation.trainDescription}
                                        </p> */}
                                        <button
                                            className={clsx(
                                                "px-8 py-2.5 w-[140px] lg:w-[180px] text-center mt-1 rounded-lg border border-[#E0E0E0] hover:cursor-pointer",
                                                {
                                                    "bg-[#911D16] text-white": form.postType,
                                                }
                                            )}
                                            onClick={() => {props.changeModalState()}}
                                        >
                                            <img src={Train} alt="Train" />
                                        </button>
                                        <div 
                                            onClick={() => {props.changeModalState()}} 
                                            className="rounded-full border border-[#949393] p-[2px] mt-1 hover:cursor-pointer"
                                        >
                                            <div className="rounded-full w-3 h-3"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center md:w-[100%] lg:w-[130%]">
                                        <p className="text-[18px] font-light texy-[#2E363E]">
                                            {translation.auto}
                                        </p>
                                        {/* <p className="text-sm text-[#7d7b7b]">
                                            {translation.autoDescription}
                                        </p> */}
                                        <button
                                            className={clsx(
                                                "px-8 py-2.5 w-[140px] lg:w-[180px] text-center mt-1 rounded-lg border border-[#E0E0E0] hover:cursor-pointer",
                                                {
                                                    "bg-[#911D16] text-white": !form.postType,
                                                }
                                            )}
                                            onClick={() => {
                                                if (form.postType) {
                                                    setForm({ ...form, postType: !form.postType });
                                                }
                                            }}
                                        >
                                            <img src={Auto} alt="Auto" />
                                        </button>
                                        <div className="rounded-full border border-[#949393] p-[2px] mt-1 hover:cursor-pointer">
                                            <div className="rounded-full bg-[#911D16] w-3 h-3"></div>
                                        </div>
                                        <div>
                                            {translation.autoDescription}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-x-10 w-full">
                            <div className="w-1/2">
                                <CalcInput
                                    title={translation.width}
                                    onHandleChange={changeForm}
                                    type="N"
                                    value={form.width}
                                    name="width"
                                />
                                <CalcInput
                                    title={translation.height}
                                    onHandleChange={changeForm}
                                    type="N"
                                    value={form.height}
                                    name="height"
                                />
                                <CalcInput
                                    title={translation.weight}
                                    onHandleChange={changeForm}
                                    type="N"
                                    value={form.weight}
                                    name="weight"
                                />
                            </div>
                            <div className="w-1/2">
                                <CalcInput
                                    title={translation.length}
                                    onHandleChange={changeForm}
                                    type="N"
                                    value={form.length}
                                    name="length"
                                />
                                <CalcInput
                                    title={translation.sumofbox}
                                    onHandleChange={changeForm}
                                    type="N"
                                    value={form.sumofbox}
                                    name="sumofbox"
                                />
                                <CalcInput
                                    title={translation.volume}
                                    onHandleChange={changeForm}
                                    type="N"
                                    value={form.volume}
                                    name="volume"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button className="bg-[#26c85f] px-14 py-3 text-lg font-medium text-white rounded-lg mt-5">
                                <a href="https://wa.me/77079988525">
                                    {props.lg === "ru" ? "Связаться с менеджером" : props.lg === "kz" ? "Менеджерге хабарласу" : props.lg === "en" ? "Contact with manager" : "联系管理员"}
                                </a>
                            </button>
                            <button onClick={calculate} className="bg-[#2F7FDE] px-14 py-3 text-lg font-medium text-white rounded-lg mt-5">
                                {translation.calculate}
                            </button>
                        </div>

                        {sum !== null && <div className="mt-3 w-[40%] ml-auto">
                            <div className="flex items-start justify-between gap-x-2">
                                <div>{translation.resultKg}</div>
                                <div>{sum.kgPrice}$</div>
                            </div>

                            <div className="flex items-start justify-between gap-x-2">
                                <div>{translation.resultCube}</div>
                                <div>{sum.kubePrice}$</div>
                            </div>

                            <div className="flex items-start justify-between gap-x-2">
                                <div>{translation.resultDensity}</div>
                                <div>{sum.density}п</div>
                            </div>

                            <div className="flex items-start justify-between gap-x-2">
                                <div>{translation.resultDefault}</div>
                                <div>{sum.defaultPrice}$</div>
                            </div>

                            <div className="flex items-start justify-between gap-x-2">
                                <div>{translation.resultSimple}</div>
                                <div>{sum.simplePrice}$</div>
                            </div>
                        </div>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    );
}