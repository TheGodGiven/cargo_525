import { useEffect, useState } from "react";
import CalcSelect from "./CalcSelect";
import CalcInput from "./CalcInput";
import CalcButton from "./CalcButton";
import CalcProduct from "./CalcProduct";
import clsx from "clsx";
import Auto from "./calcAssets/Auto.png";
import Train from "./calcAssets/Train.png";
import CalcBG from "./calcAssets/CalcBG.png";

export default function Calc(props) {
    const [form, setForm] = useState({
        productType: "product1",
        from: "ala",
        to: "ala",
        weight: "",
        volume: "",
        width: "",
        height: "",
        length: "",
        sumofbox: "",
        name: "",
        phone: "",
        postType: true,
    });

    const [sum, setSum] = useState(0);

    const translations = {
        ru: {
            title: "РАСЧИТАТЬ СТОИМОСТЬ\nГРУЗОПЕРЕВОЗКИ",
            fromCity: "Откуда(город)*",
            toCity: "Куда(город)*",
            weight: "Вес (кг) минимально 100кг!*",
            volume: "Объем, м3*",
            name: "Имя*",
            phone: "Номер телефона*",
            length: "Длина, см*",
            width: "Ширина, см*",
            height: "Высота, см*",
            sumofbox: "Колтичество коробок",
            calculate: "Рассчитать стоимость",
            train: "ЖД",
            auto: "Авто",
            productType: "Тип товара",
        },
        en: {
            title: "CALCULATE THE COST\nOF CARGO TRANSPORTATION",
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
            productType: "Product type",
        },
        kz: {
            title: "ЖҮК ТАСЫМАЛДАРЫНЫҢ\nҚҰНЫН ЕСЕПТЕУ",
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
            train: "Поезд",
            auto: "Авто",
            productType: "Тауар түрі",
        },
        ch: {
            title: "计算货物运输的费用",
            fromCity: "从哪里（城市）*",
            toCity: "到哪里（城市）*",
            weight: "重量（公斤），最少100公斤！*",
            volume: "体积，立方米*",
            name: "名字*",
            phone: "电话号码*",
            length: "长度，厘米*",
            width: "宽度，厘米*",
            height: "高度，厘米*",
            sumofbox: "Колтичество коробок",
            calculate: "计算费用",
            train: "火车",
            auto: "汽车",
            productType: "产品类型",
        },
    };

    const translation = translations[props.lg] || translations["ru"];

    const productTypes = [
        { value: "product1", city: "Единый (хозяйственные товары)" },
        { value: "product2", city: "Техника(мелкая бытовая, телефоны, компьютеры)" },
        { value: "product3", city: "Одежда (текстиль, сумки)" },
        { value: "product4", city: "Обувь" },
    ];

    const fromCities = [
        { value: "Yiwu", city: "Yiwu" },
        { value: "Guangzhou", city: "Guangzhou" },
        { value: "Shenzhen", city: "Shenzhen" },
    ];

    const toCities = [
        { value: "ala", city: "Almaty" },
        { value: "ast", city: "Astana" },
        { value: "krg", city: "Karaganda" },
        { value: "msc", city: "Moscow" },
    ];

    const changeForm = (name, value) => {
        setForm({ ...form, [name]: value });
    };

    const calculate = () => {
        const asd = form.weight * form.volume;
        setSum(asd);
    };

    return (
        <>
            <div className="container mx-auto pt-5 px-5 md:px-0 md:hidden">
                <div className="mt-5 md:mt-[50px] border border-[#E0E0E0] rounded-[16px] py-5 px-7 md:py-[43px] md:px-[80px]">
                    <div className="text-[#911D16] text-[21px] md:text-[30px] font-semibold text-center md:text-left">
                        {translation.title}
                    </div>

                    <div className="md:hidden">
                         <CalcSelect
                            title={translation.productType}
                            cities={productTypes}
                            onHandleChange={changeForm}
                            name="productType"
                        />
                        <CalcSelect
                            title={translation.fromCity}
                            cities={fromCities}
                            onHandleChange={changeForm}
                            name="from"
                        />
                        <CalcSelect
                            title={translation.toCity}
                            cities={toCities}
                            onHandleChange={changeForm}
                            name="to"
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
                        <CalcInput
                            title={translation.name}
                            onHandleChange={changeForm}
                            type="S"
                            value={form.name}
                            name="name"
                        />
                        <CalcInput
                            title={translation.phone}
                            onHandleChange={changeForm}
                            type="N"
                            value={form.phone}
                            name="phone"
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

                        <div className="flex items-center justify-center gap-x-3">
                            <button
                                className={clsx(
                                    "px-8 py-2.5 max-w-max text-lg text-center mt-5 rounded-lg border border-[#E0E0E0]",
                                    {
                                        "bg-[#911D16] text-white": form.postType,
                                    }
                                )}
                                onClick={() => {
                                    if (!form.postType) {
                                        setForm({ ...form, postType: !form.postType });
                                    }
                                }}
                            >
                                {translation.train}
                            </button>

                            <button
                                className={clsx(
                                    "px-8 py-2.5 max-w-max text-lg text-center mt-5 rounded-lg border border-[#E0E0E0]",
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
                                {translation.auto}
                            </button>
                        </div>

                        <div className="flex justify-center" onClick={calculate}>
                            <button className="bg-[#2F7FDE] px-14 py-3 text-lg font-medium text-white rounded-lg mt-5">
                                {translation.calculate}
                            </button>
                        </div>

                        {sum > 0 && (
                            <div className="mt-5 text-center text-lg font-medium">{sum} тенге</div>
                        )}
                    </div>
                </div>
            </div>
            <div className="hidden md:block container mx-auto mt-10">
                <div className="border border-[#E0E0E0] rounded-[19px] py-[30px] px-10 lg:py-[43px] lg:px-[80px] relative overflow-hidden">
                    <div className="text-[#911D16] text-[21px] lg:text-[30px] font-semibold">
                        {translation.title}
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
                                    title={translation.fromCity}
                                    cities={fromCities}
                                    onHandleChange={changeForm}
                                    name="from"
                                />
                                <CalcSelect
                                    title={translation.toCity}
                                    cities={toCities}
                                    onHandleChange={changeForm}
                                    name="to"
                                />
                            </div>
                            <div className="mt-5 w-1/2">
                                <div className="flex items-center justify-center gap-x-3 mb-9">
                                    <div className="flex flex-col items-center md:w-[45%] lg:w-[100%]">
                                        <p className="text-[18px] font-light texy-[#2E363E]">
                                            {translation.train}
                                        </p>
                                        <button
                                            className={clsx(
                                                "px-8 py-2.5 w-[140px] lg:w-[180px] text-center mt-1 rounded-lg border border-[#E0E0E0]",
                                                {
                                                    "bg-[#911D16] text-white": form.postType,
                                                }
                                            )}
                                            onClick={() => {
                                                if (!form.postType) {
                                                    setForm({ ...form, postType: !form.postType });
                                                }
                                            }}
                                        >
                                            <img src={Train} alt="Train" />
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-center md:w-[100%] lg:w-[130%]">
                                        <p className="text-[18px] font-light texy-[#2E363E]">
                                            {translation.auto}
                                        </p>
                                        <button
                                            className={clsx(
                                                "px-8 py-2.5 w-[140px] lg:w-[180px] text-center mt-1 rounded-lg border border-[#E0E0E0]",
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-x-10 w-full">
                            <div className="w-1/2">
                                <CalcInput
                                    title={translation.weight}
                                    onHandleChange={changeForm}
                                    type="N"
                                    value={form.weight}
                                    name="weight"
                                />
                                <CalcInput
                                    title={translation.name}
                                    onHandleChange={changeForm}
                                    type="S"
                                    value={form.name}
                                    name="name"
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
                            </div>
                            <div className="w-1/2">
                                <CalcInput
                                    title={translation.volume}
                                    onHandleChange={changeForm}
                                    type="N"
                                    value={form.volume}
                                    name="volume"
                                />
                                <CalcInput
                                    title={translation.phone}
                                    onHandleChange={changeForm}
                                    type="N"
                                    value={form.phone}
                                    name="phone"
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
                            </div>
                        </div>
                        <CalcButton summa={sum} calculator={calculate} lang={props.lg} />
                    </div>
                </div>
            </div>
        </>
    );
}