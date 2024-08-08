import { NextUIProvider } from '@nextui-org/react';
import ToggleSwitch from './components/shared/ToggleSwitch';
import { useState } from 'react';
import { IndicatorIcon, SearchIcon } from './assets/images/images';
import SearchBar from './components/shared/SearchBar';
import CustomeAccordion, { CustomeAccordionItem } from './components/shared/Accordion';
// import CustomeAccordionItem from './components/shared/AccordionItem';
function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [search, setSearch] = useState('');

  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

  const handelOnValueChange = (value) => {
    setIsSelected(value)
  }

  const handelSearchOnChange = (event) => {
    // console.log("🚀 ~ handelSearchOnChange ~ event:", event)
    setSearch(event)
  }

  const handelSearchClick = (event) => {
    if (event.keyCode === 13 && search?.length) {
      console.log("search:", search)
    }
  }


  return (
    <NextUIProvider>
      <div className='h-lvh w-full flex flex-col'>
        {/*search component 
        <div className='m-4'>
          <SearchBar
            value={search}
            placeholder="Search"
            startContent={<SearchIcon />}
            onValueChange={handelSearchOnChange}
            onKeyDown={handelSearchClick}
            radius="sm"
            className={{
              input: "placeholder:text-grayColor placeholder:text-lg",
              inputWrapper: "border-1 bg-white border-grayColor group-data-[hover=true]:bg-white group-data-[focus=true]:bg-white drop-shadow-none",
            }}
          />
        </div>
        */}
        {/* accordian component */}
        <div className='m-4'>

          <CustomeAccordionItem
            key={1}
            title={<div className='flex justify-between'>
              <div>
                <p className="text-base">3162 Priwinkle Street</p>
                <p className="text-xs text-zinc-300">4205 Delaney Lock, Fort Litzy 35188</p>
              </div>
              <div className="flex gap-7 items-center">
                <div className="flex gap-7">
                  <p className="text-base text-zinc-400">Single Family Home</p>
                  <p className="text-base text-zinc-400">1 Unit</p>
                </div>
                <div className="flex gap-2">
                  <span className="flex py-1 px-4 border-1 border-blue-700 rounded-md text-blue-700" onClick={(event) => {
                    event.stopPropagation()
                    console.log("child event", event)
                  }}>Details</span>
                  <span className="flex py-1 px-4 border-1 border-blue-700 rounded-md text-blue-700">Performance</span>
                </div>
              </div>
            </div>}
            classNames={{
              title: "!pl-4",
              base: "!rounded-lg !relative !shadow-none !border-1 !border-grayColor !p-0 group-data-[pressed=true]:!border-4 ",
              heading: "!px-4",
              indicator: "!rotate-0 data-[open=true]:!-rotate-180 !absolute",
            }}
            textValue='Accordion 1'
            indicator={<IndicatorIcon />}
            onPress={(event) => { console.log("parent event: ", event) }}
            content={<div>
              <div>
                <p>Units</p>
                <p>3162 Priwinkle Street</p>
              </div>
              <div></div>
            </div>}
          />
        </div>
        {/*toggle switch 
        <div className='flex m-4'>
          <ToggleSwitch
            startContent={<p>yes</p>}
            // endContent={<p>no</p>}
            selected={isSelected}
            className={
              {
                wrapper: "group-data-[selected]:pl-[14px] h-[28px] w-[55px] !bg-grayColor group-data-[selected]:!bg-greenColor !uppercase",
                startContent: "!text-[16px] text-white",
                endContent: "!text-[16px] !text-white",
                thumb: '!h-4 !w-4'
              }
            }
            onValueChange={handelOnValueChange}
          />
        </div>
        */}
      </div>
    </NextUIProvider >
  );
}

export default App;
