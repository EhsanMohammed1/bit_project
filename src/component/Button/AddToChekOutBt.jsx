import React from 'react'
import { IoBagOutline, IoBag } from "react-icons/io5";
import { useState } from 'react';
const AddToChekOutBt = () => {

  const [icon, setIcon] = useState(<IoBagOutline className='w-10 h-12 ' />);
  const handleClick = () => {
    if (icon === IoBagOutline) {
      setIcon(<IoBagOutline />);
    } else {
      setIcon(<IoBag className='w-10 h-12 ' />);
    }
  };

  return (

    <div className="flex  p-2 px-0" onClick={handleClick} >
      <button
        className=" text-violet-500 hover:text-violet-800   text-center dark:text-violet-600 dark:hover:text-violet-700 dark:focus:ring-violet-800 "
      >
        <div className='px-4'>

          {icon}
        </div>
      </button>
    </div>
  )

}
export default AddToChekOutBt
