import { useEffect, useState } from "react"

export default function CalcButton (props) {

    const [text, setText] = useState("")

    useEffect(() => {
        if (props.summa > 0) {
            if (props.lang === "ru") {
                setText(`Сумма: ${props.summa} тенге`)
            } else if (props.lang === "kz") {
                setText(`Багасы: ${props.summa} теңге`)
            } else if (props.lang === "en") {
                setText(`Sum: ${props.summa} tenge`)
            }else
                setText(`和: ${props.summa} 坚戈`)
        } else {
            if (props.lang === "ru") {
                setText("Рассчитать стоимость")
            } else if (props.lang === "kz") {
                setText("Құнды есептеңіз")
            } else if (props.lang === "en") {
                setText("Calculate cost")
            }else
                setText("计算成本")
        }
    }, [props.summa, props.lang])

    return (
        <>
            <div className="flex justify-center lg:justify-end">
                <button onClick={props.calculator} className="bg-[#2F7FDE] px-14 py-3 text-lg font-medium text-white rounded-lg mt-5">{text}</button>
            </div>
        </>
    )
}