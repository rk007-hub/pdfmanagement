// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     onSearch(searchTerm);
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchBar;

import { useState } from "react";



export default function Home({handleSearch,searchTerm}) {
  

  return (
    <div className="flex flex-col items-center justify-center  py-2">
      <div className="w-full max-w-md">
        <div className="flex mt-10 border-2 border-gray-300 rounded-lg">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 text-sm focus:outline-none"
            placeholder="Search books..."
          />
          <button className="flex items-center justify-center px-4 bg-gray-300">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      
    </div>
  );
}