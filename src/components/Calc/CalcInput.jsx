export default function CalcInput(props) {
    return (
        <>
            <div className="mt-5 ml-3 text-sm md:text-[16px] lg:text-[18px] text-[#2E363E]">{props.title}</div>

            <input 
                className="border border-[#E0E0E0] rounded-[5px] px-3 py-1.5 w-full mt-1"
                value={props.value}
                onChange={
                    (event) => {
                        if (props.type === "N") {
                            if (/^\d*$/.test(event.target.value)) {
                                props.onHandleChange(props.name, event.target.value)
                            }
                        } else {
                            props.onHandleChange(props.name, event.target.value)
                        }
                    }   
                }
            />
        </>
    )
}