import { createContext, useContext, useRef, useEffect, useState } from "react"
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

export const AccordionItem = ({ value, key, title, subtitle, desc, units, propertyFinancials, ...props }) => {
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
                <Trigger
                    title={title}
                    subtitle={subtitle}
                    desc={desc}
                    units={units}
                />
            </header>
            <div
                className={`overflow-y-hidden transition-all duration-500 ${open ? "border-t h-[230px] sm:h-[130px]" : "border-none h-0"}`}
            // style={{ height: open ?  ref.current?.offsetHeight || 0 : 0 }}
            >
                <div className="px-0 py-4 sm:p-4 h-auto" ref={ref} onClick={() => setSelected(open ? null : value)}>
                    <Content
                        propertyFinancials={propertyFinancials}
                        unitName={title}
                    />
                </div>
            </div>
        </div>
    )
}

export const Trigger = ({ title, subtitle, units, desc }) => {
    const { selected, setSelected } = useContext(AccordionContext);
    return (
        <div className='flex flex-col sm:flex-row justify-between w-full'>
            <div className='flex sm:flex-col lg:flex-row justify-between w-full sm:w-[70%]'>
                <div>
                    <p className="text-base">{title}</p>
                    <p className="text-xs text-zinc-300">{subtitle}</p>
                </div>
                <div className="flex sm:gap-3 lg:gap-7 flex-col sm:flex-row sm:items-center sm:pt-2 lg:pt-0">
                    <p className="text-[15px] text-zinc-400">{desc}</p>
                    <p className="text-[15px] text-zinc-400">{units} Unit</p>
                </div>
            </div>
            <div className={`${selected ? 'hidden' : 'flex'} sm:flex gap-2 w-full sm:w-[30%] justify-end lg:items-center pt-3 sm:pt-0`}>
                <span className="flex py-1 px-4 border-1 border-blue-700 rounded-md text-blue-700 justify-center w-[50%] sm:w-20 h-8" onClick={(event) => {
                    event.stopPropagation()
                    console.log("child event", event)
                }}>Details</span>
                <span className="flex py-1 px-4 border-1 border-blue-700 rounded-md text-blue-700 sm:w-32 w-[50%] justify-center h-8" onClick={(event) => {
                    event.stopPropagation()
                    console.log("child event", event)
                }}>Performance</span>
            </div>
        </div>
    )
}


export const Content = ({ propertyFinancials, unitName }) => {
    const { selected, setSelected } = useContext(AccordionContext);

    return (
        <div className='flex flex-col sm:flex-row gap-2 !h-auto justify-between w-full'>
            <div className='hidden sm:flex sm:flex-col w-[30%] '>
                <p className="text-sm text-zinc-500">Units</p>
                <p className='text-base'>3162 Periwinkle Street</p>
            </div>
            <div className='w-full px-4 pb-3 mb-0.5 sm:mb-0 sm:pb-0 sm:px-0 sm:w-[70%] text-sm text-zinc-400 border-b-1 sm:border-b-0'>
                <p className=' pb-2'>Property Financials</p>
                <div className=' h-auto sm:h-[5rem] flex flex-col gap-x-8 lg:gap-x-10 flex-wrap'>
                    {
                        propertyFinancials?.map((item) => {
                            return (
                                <div className='flex justify-between p-0'>
                                    <p>{item.name}</p>
                                    <p className='text-base text-zinc-700'>{item?.value.includes('-') ? '' : '$'}{item.value}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${selected ? 'flex sm:hidden' : 'hidden'} gap-2 w-full sm:w-[30%] justify-center items-center px-4 `}>
                <span className="flex py-1 px-4 border-1 border-blue-700 rounded-md text-blue-700 justify-center w-[50%] sm:w-20 h-8" onClick={(event) => {
                    event.stopPropagation()
                    console.log("child event", event)
                }}>Details</span>
                <span className="flex py-1 px-4 border-1 border-blue-700 rounded-md text-blue-700 sm:w-32 w-[50%] justify-center h-8" onClick={(event) => {
                    event.stopPropagation()
                    console.log("child event", event)
                }}>Performance</span>
            </div>
        </div>
    )
}