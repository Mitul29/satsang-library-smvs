import React from "react";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="my-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer">
        {item.title}
      </h5>
      <div className="flex mb-2 text-gray-700 text-sm">
        <p className="pr-2">
          Character: <span>{item.character}</span>
        </p>
        |
        <p className="px-2">
          Character With: <span>{item.characterWith}</span>
        </p>
      </div>

      <p className="mb-2 font-normal text-gray-700 max-h-[70px] overflow-hidden">
        {item.matter}
      </p>
      <button
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => navigate(`/matter/${item.id}`)}
      >
        Read more
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchItem;
