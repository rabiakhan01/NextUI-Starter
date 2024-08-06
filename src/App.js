import { Input, NextUIProvider } from '@nextui-org/react';
import ToggleSwitch from './components/shared/ToggleSwitch';
import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
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
              inputWrapper: "border-1 bg-white border-grayColor group-data-[hover=true]:bg-white group-data-[focus=true]:bg-white",
            }}
          />
        </div>
        <div className='flex justify-center items-center mt-96'>
          <ToggleSwitch
            startContent={<p>yes</p>}
            endContent={<p>no</p>}
            size=""
            selected={isSelected}
            className={
              {
                wrapper: "group-data-[selected]:pl-5 h-[34px] w-[65px] !bg-grayColor group-data-[selected]:!bg-greenColor !uppercase",
                startContent: "!text-[20px] text-white",
                endContent: "!text-[20px] !text-white",
              }
            }
            onValueChange={handelOnValueChange}
          />
          <ToggleSwitch
            startContent={<p>yes</p>}
            endContent={<p>no</p>}
            size=""
            selected={isSelected}
            color='success'
            className={
              {
                wrapper: "group-data-[selected]:pl-5 h-[34px] w-[65px] !uppercase",
                startContent: "!text-[20px] text-white",
                endContent: "!text-[20px] !text-white",
              }
            }
            onValueChange={handelOnValueChange}
            thumbIcon={isSelected
              ?
              <LightModeIcon sx={{
                width: '10px',
                height: '10px'
              }} />
              :
              <DarkModeIcon sx={{
                width: '10px',
                height: '10px'
              }} />}
          />

          <ToggleSwitch
            startContent={<LightModeIcon />}
            endContent={<DarkModeIcon />}
            size="xl"
            color='warning'
            className={
              {
                wrapper: "group-data-[selected]:pl-5 h-[34px] w-[65px] !uppercase",
                startContent: "!text-[20px] text-white",
                endContent: "!text-[20px] !text-white",
              }
            }
          />

          <div className={`h-16 w-64 flex justify-end rounded-xl border-2 border-lime-200 ${isSelected ? 'bg-white' : 'bg-zinc-700'}`}>
            <ToggleSwitch
              startContent={<LightModeIcon />}
              endContent={<DarkModeIcon />}
              selected={isSelected}
              onValueChange={handelOnValueChange}
              color='secondary'
              className={
                {
                  wrapper: "group-data-[selected]:pl-2 h-[34px] w-[55px] !uppercase",
                  startContent: "!text-[20px]",
                  endContent: "!text-[20px]",
                }
              }
            />
          </div>
          <div className={`h-16 w-64 flex justify-end rounded-xl border-2 border-lime-200 ml-2 ${isSelected ? 'bg-white' : 'bg-zinc-700'}`}>
            <ToggleSwitch
              startContent={<LightModeIcon />}
              endContent={<DarkModeIcon />}
              selected={isSelected}
              onValueChange={handelOnValueChange}
              color='warning'
              className={
                {
                  wrapper: "h-[34px] w-[34px] rounded-lg ",
                  startContent: " text-white",
                  thumb: "hidden",
                  endContent: " text-black",
                }
              }
            />
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
