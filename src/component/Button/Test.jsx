import React from 'react'
import { RiLogoutBoxRLine } from "react-icons/ri";

const Test = () => {
  return (
    <>
      <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-10 h-10 rounded-full cursor-pointer"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl09zZ71DU947A8EzDZXyvAQvumOhsU6Lm5ow9VDc&s"
        alt="User dropdown"
        onClick={() => {
          const dropdown = document.getElementById("userDropdown");
          dropdown.classList.toggle("hidden");
        }}
      />
      {/* Dropdown menu */}
      <div
        id="userDropdown"
        className="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-55 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-lg text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          {/* Dropdown menu items */}
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>

    </>

  )
}

export default Test
