import { Input, NextUIProvider } from '@nextui-org/react';
import ToggleSwitch from './components/shared/ToggleSwitch';
import { useState } from 'react';
import { SearchIcon } from './assets/images/images';
import SearchBar from './components/shared/SearchBar';

function App() {
  const [isSelected, setIsSelected] = useState(true);
  const [search, setSearch] = useState('');

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
      </div>
    </NextUIProvider>
  );
}

export default App;
