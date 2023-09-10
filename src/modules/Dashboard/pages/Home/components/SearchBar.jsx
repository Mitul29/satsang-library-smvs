import Tippy from "@tippyjs/react";
import React from "react";

const searchOptions = [
  { label: "Subject", value: "subject" },
  { label: "Character", value: "character" },
  { label: "Character With", value: "character_with" },
  { label: "Matter", value: "matter" },
];

const SearchBar = ({ search, setSearch, onSearch }) => {
  return (
    <div className="my-5">
      <div className="relative flex mx-auto text-gray-600">
        <Tippy
          theme="light"
          placement="bottom"
          trigger="click"
          content={
            <div
              id="dropdown"
              className="bg-white divide-y divide-gray-100 rounded-lg shadow w-[140px] dark:bg-gray-700"
            >
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                {searchOptions.map((opt) => (
                  <li
                    key={opt.value}
                    onClick={() => {
                      setSearch((prev) => ({ ...prev, for: opt.value }));
                    }}
                  >
                    <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                      {opt.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          }
        >
          <button className="text-white bg-[#265373] w-[140px] font-medium rounded-lg text-sm mr-1 px-3 py-2 text-center inline-flex items-center">
            {searchOptions.find((opt) => opt.value === search.for).label}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </Tippy>

        <div>
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            name="search"
            placeholder="Search"
            value={search.value}
            onChange={(e) => {
              setSearch((prev) => ({ ...prev, value: e.target.value }));
            }}
          />
          <button className="right-0 top-0 mx-2" onClick={onSearch}>
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
