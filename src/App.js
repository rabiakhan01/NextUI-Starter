import { NextUIProvider } from '@nextui-org/react';
import { useState } from 'react';
import Accordion, { AccordionItem } from './components/shared/Accordion'
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
          <Accordion>
            <AccordionItem value={"1"} trigger={
              <div className='w-full'>

                <div className='flex gap-2 items-center justify-between'>
                  <div>
                  </div>
                  <div>Description</div>
                </div>

              </div>}
            >
              <div>lorem  ipsum dolor sit amet</div>
            </AccordionItem>
            <AccordionItem value={"2"} trigger={
              <div className='w-full'>

                <div className='flex gap-2 items-center justify-between'>
                  <div> Property 1</div>
                  <div>Description</div>
                </div>

              </div>}
            >
              <div>lorem  ipsum dolor sit amet</div>
            </AccordionItem>
          </Accordion>
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
    </NextUIProvider>
  );
}

export default App;
