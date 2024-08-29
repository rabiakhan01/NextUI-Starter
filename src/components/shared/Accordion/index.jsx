import { useContext, useRef, useEffect, useState } from "react"
import { IndicatorIcon } from "../../../assets/images/images"
import { AccordionContext } from "../../../App"


export default function Accordion({ children, value, onChange, ...props }) {
    const [selected, setSelected] = useState(value)

    useEffect(() => {
        onChange?.(selected)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    return (
        <div className="" {...props}>
            {children}
        </div>
    )
}

export const AccordionItem = ({ value, key, trigger, children, ...props }) => {
    const { selected, setSelected } = useContext(AccordionContext)
    const open = selected === value
    const ref = useRef(null)
    // console.log(ref.current?.offsetHeight)

    return (
        <div className="border rounded-lg  mb-2" {...props}>
            <header
                role="button"
                onClick={() => setSelected(open ? null : value)}
                className="flex items-center sm:gap-2 gap-1 sm:p-4 p-2"
            >
                <IndicatorIcon
                    className={`transition-transform self-start h-10 ${open ? "rotate-180" : ""}`}
                />
                {trigger}
            </header>
            <div
                className={`overflow-y-hidden transition-all duration-500 cursor-pointer ${open ? "border-t h-[230px] sm:h-[130px]" : "border-none h-0"}`}
            // style={{ height: open ?  ref.current?.offsetHeight || 0 : 0 }}
            >
                <div className="px-0 py-4 sm:p-4 h-auto" ref={ref} onClick={() => setSelected(open ? null : value)}>
                    {children}
                </div>
            </div>
        </div>
    )
}