import { useContext } from "react";
import { AccordionContext } from "../../../../App";

const Content = ({ propertyFinancials, unitName }) => {
    const { selected } = useContext(AccordionContext);
    // console.log("🚀 ~ Content ~ selected:", selected)

    return (
        <div className='flex flex-col sm:flex-row sm:gap-4 md:gap-6 xl:gap-12 justify-between w-full'>
            <div className='flex justify-between w-full md:w-[65%] px-4 sm:px-0 gap-3 lg:gap-0'>
                <div className="w-[45%] xl:w-[30%] hidden md:flex sm:flex-col ">
                    <p className="text-sm text-zinc-500">Units</p>
                    <p className='text-base'>{unitName}</p>
                </div>
                <div className='text-sm text-zinc-400 w-full md:w-[55%] xl:w-[70%] '>
                    <p className=' pb-2'>Property Financials</p>
                    <div className=' h-auto sm:h-[5rem] flex flex-col gap-x-8 lg:gap-x-10 flex-wrap'>
                        {
                            propertyFinancials?.map((item, index) => {
                                if (index < 3) {
                                    return (
                                        <div className='flex justify-between p-0'>
                                            <p>{item.heading}</p>
                                            <p className='text-base text-zinc-700'>{item.price}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='text-sm text-zinc-400 border-b-1 sm:border-b-0 sm: w-full md:w-[35%] px-4 lg:px-0 lg:pl-2 pb-2 sm:pb-0 sm:pt-[30px]'>
                {
                    propertyFinancials?.map((item, index) => {
                        if (index > 2) {
                            return (
                                <div className='flex justify-between p-0'>
                                    <p>{item.heading}</p>
                                    <p className='text-base text-zinc-700'>{item.price}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className={`${selected ? 'flex sm:hidden' : 'hidden'} gap-2 w-full sm:w-[30%] justify-center items-center px-4 pt-3`}>
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

export default Content;