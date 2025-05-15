export default function CalcSelect(props) {
    return (
        <>
            <div className="mt-5 ml-3 text-sm lg:text-[18px] md:text-[16px] text-[#2E363E]">{props.title}</div>

            <select 
                className="border border-[#E0E0E0] rounded-[5px] px-3 py-1.5 w-full mt-1"
                onChange={(event) => {
                    props.onHandleChange(props.name, event.target.value)
                }}
            >
                {props.cities.map((item, index) => {
                    return <option key={index} value={item.value}>{item.city}</option>
                })}
            </select>
        </>
    )
}