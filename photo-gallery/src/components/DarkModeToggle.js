import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../redux/theme/themeSlice';

function DarkModeToggle() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMode());
  }
  return (
    <div className= {`flex cursor-pointer justify-center gap-3 font-mono px-2 py-2 my-2 mx-2 border ${darkMode ? "border-white, text-white" : "border-black, text-black"}`}
      onClick={handleClick}
    >
      <div>{darkMode ? "Dark" : "Light"}</div>
    </div>
  )
}

export default DarkModeToggle;

// rfce