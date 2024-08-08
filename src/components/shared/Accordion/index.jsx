import { createContext, useContext, useRef, useEffect, useState } from "react"
import { IndicatorIcon } from "../../../assets/images/images"

const AccordionContext = createContext()

export default function Accordion({ children, value, onChange, ...props }) {
    const [selected, setSelected] = useState(value)

    useEffect(() => {
        onChange?.(selected)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    return (
        <ul {...props}>
            <AccordionContext.Provider value={{ selected, setSelected }}>
                {children}
            </AccordionContext.Provider>
        </ul>
    )
}

export function AccordionItem({ children, value, trigger, ...props }) {
    const { selected, setSelected } = useContext(AccordionContext)
    const open = selected === value

    const ref = useRef(null)

    return (
        <li className="border rounded-lg bg-white mb-2" {...props}>
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
                className={`overflow-y-hidden transition-all duration-500 ${open ? "border-t" : "border-none"}`}
                style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
            >
                <div className="pt-2 p-4" ref={ref} onClick={() => setSelected(open ? null : value)}>
                    {children}
                </div>
            </div>
        </li>
    )
}