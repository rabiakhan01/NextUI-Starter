import { useContext } from "react";
import { AccordionContext } from "../../../../App";

const Header = ({ title, subtitle, units, desc }) => {
    const { selected } = useContext(AccordionContext);
    return (
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 xl:gap-12 justify-between w-full pl-2'>
            <div className='flex sm:flex-col lg:flex-row justify-between sm:justify-start lg:justify-between lg:items-center w-full sm:w-[60%] lg:w-[65%] '>
                <div>
                    <p className="text-base">{title}</p>
                    <p className="text-xs text-zinc-300">{subtitle}</p>
                </div>
                <p className="text-[15px] text-zinc-400 hidden lg:flex">{desc}</p>
                <div className="flex lg:hidden gap-5 sm:pt-2">
                    <p className="text-[15px] text-zinc-400">{desc}</p>
                    <p className="text-[15px] text-zinc-400">{units} Unit</p>
                </div>
            </div>
            <div className={`${selected ? 'hidden' : 'flex'} sm:flex w-full sm:w-[40%] lg:w-[35%] justify-center sm:justify-end lg:justify-between items-center sm:items-start lg:items-center`}>
                <p className="text-[15px] text-zinc-400 hidden lg:flex w-full">{units} Unit</p>
                <div className="flex gap-2 w-full justify-center sm:justify-end">
                    <span className="flex py-1 px-4 border-1 border-blue-700 rounded-md text-blue-700 justify-center w-[50%] sm:w-20 h-8" onClick={(event) => {
                        event.stopPropagation()
                        console.log("child event", event)
                    }}>Details</span>
                    <span className="flex py-1 px-4 border-1 border-blue-700 rounded-md text-blue-700 sm:w-32 w-[50%] justify-center h-8" onClick={(event) => {
                        console.log("child event", event)
                    }}>Performance</span>
                </div>
            </div>
        </div>
    )
}


export default Header;