export default function CalcProduct (props) {
    return (
        <>
            <div>
                <div className="mt-5 ml-3 text-sm lg:text-[18px] md:text-[16px] text-[#2E363E]">{props.title}</div>
                <select name="productType" className="border border-[#E0E0E0] rounded-[5px] px-3 py-1.5 w-full mt-1">
                    <option value="product1">Единый (хозяйственные товары)</option>
                    <option value="product2">Техника(мелкая бытовая, телефоны, компьютеры)</option>
                    <option value="product3">Одежда (текстиль, сумки)</option>
                    <option value="product4">Обувь</option>
                </select>
            </div>
        </>
    )
}