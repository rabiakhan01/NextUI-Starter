import { NextUIProvider } from '@nextui-org/react';
import ToggleSwitch from './components/shared/ToggleSwitch';
import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
function App() {
  const [isSelected, setIsSelected] = useState(true);
  const handelOnValueChange = (value) => {
    setIsSelected(value)
  }
  return (
    <NextUIProvider>
      <div className='h-lvh w-full flex justify-center items-center'>
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
    </NextUIProvider>
  );
}

export default App;
