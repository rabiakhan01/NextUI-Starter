import { Accordion, AccordionItem, NextUIProvider } from '@nextui-org/react';
import ToggleSwitch from './components/shared/ToggleSwitch';
import { useState } from 'react';
import { IndicatorIcon, SearchIcon } from './assets/images/images';
import SearchBar from './components/shared/SearchBar';
function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [search, setSearch] = useState('');

  const [selectedKeys, setSelectedKeys] = useState(new Set([0]));
  // console.log("🚀 ~ App ~ isOpen:", isOpen)
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

  const handelAccordion = () => {
    let classname;
    classname = document.getElementById('startContent');
    console.log("🚀 ~ handelAccordion ~ classname:", classname)
    // if (boolVal)
    //   classname.classList.add('rotate-180')
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
          <Accordion variant="splitted"
            className='!flex !gap-2'
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      duration: 0.5,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 2.5,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.4,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.2,
                    },
                  },
                },
              },
            }}
          >
            <AccordionItem
              key="1"
              title={<div className='flex justify-between'>
                <p>Accordion 1</p>
                <span className='bg-red-400 rounded-md p-1' onClick={(event) => { event.stopPropagation() }}>Press Me</span>
              </div>}
              classNames={{
                title: "!pl-6",
                base: "!rounded-md !relative !shadow-none !border-1 !border-grayColor !p-0 group-data-[pressed=true]:!border-4 ",
                heading: "!px-4",
                indicator: "!rotate-90 data-[open=true]:!-rotate-90 !absolute",
              }}
              onPress={handelAccordion}
            >
              <hr></hr>
              <p className='p-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                a mauris ligula. Ut viverra hendrerit tellus, eget malesuada
                metus tempor quis. Pellentesque non nisi non diam feugiat placerat
                faucibus nec tortor. Vestibulum vitae felis nec nisi pellentesque
                pharetra. Curabitur tincidunt velit lectus, in egestas quam pharetra vitae.
                Curabitur hendrerit, sem a sollicitudin euismod, risus quam mollis felis,
                a hendrerit felis magna et neque. Duis accumsan sapien magna. Nam nec lacus nunc
                Nunc accumsan ultrices eros, id tempus sapien. Morbi tincidunt dolor sed augue
                volutpat gravida. Pellentesque ut accumsan tortor, iaculis porta tellus. Maecenas
                rutrum iaculis massa, quis efficitur tellus convallis ut. Etiam fringilla leo lorem,
                id ultrices risus euismod a
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              title={<div className='flex justify-between'>
                <p>Accordion 2</p>
                <span className='bg-red-400 rounded-md p-1' onClick={(event) => { event.stopPropagation() }}>Press Me</span>
              </div>}
              classNames={{
                title: "!pl-6",
                base: "!rounded-md !relative !shadow-none !border-1 !border-grayColor !p-0 !bg-white",
                heading: "!px-4",
                indicator: "!rotate-90 data-[open=true]:!-rotate-90 !absolute",
              }}
              onPress={handelAccordion}
            >
              <hr></hr>
              <p className='p-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                a mauris ligula. Ut viverra hendrerit tellus, eget malesuada
                metus tempor quis. Pellentesque non nisi non diam feugiat placerat
                faucibus nec tortor. Vestibulum vitae felis nec nisi pellentesque
                pharetra. Curabitur tincidunt velit lectus, in egestas quam pharetra vitae.
                Curabitur hendrerit, sem a sollicitudin euismod, risus quam mollis felis,
                a hendrerit felis magna et neque. Duis accumsan sapien magna. Nam nec lacus nunc
                Nunc accumsan ultrices eros, id tempus sapien. Morbi tincidunt dolor sed augue
                volutpat gravida. Pellentesque ut accumsan tortor, iaculis porta tellus. Maecenas
                rutrum iaculis massa, quis efficitur tellus convallis ut. Etiam fringilla leo lorem,
                id ultrices risus euismod a
              </p>
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
    </NextUIProvider >
  );
}

export default App;
