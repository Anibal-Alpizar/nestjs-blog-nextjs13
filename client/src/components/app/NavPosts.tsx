'use client';

import React, { useState } from 'react';
import Link from 'next/link';

function NavPosts(): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" passHref>
            <span className="flex items-center cursor-pointer">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Blog!
              </span>
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="relative group">
                <button
                  onClick={toggleDropdown}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:outline-none"
                >
                  Options
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 ml-1 transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <ul
                  className={`absolute left-0 mt-2 py-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md ${
                    isDropdownOpen
                      ? 'visible opacity-100'
                      : 'invisible opacity-0'
                  } group-hover:visible group-hover:opacity-100 transition-all duration-300`}
                >
                  <li>
                    <Link href="/create" passHref>
                      <span className="block py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Crear post
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/edit" passHref>
                      <span className="block py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Editar post
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/delete" passHref>
                      <span className="block py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Eliminar post
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="https://github.com/anibal-alpizar" passHref>
                  <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/anibal-alpizar/nestjs-blog-react"
                  passHref
                >
                  <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">
                    Code Source
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavPosts;
