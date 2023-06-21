import React from 'react';

const ArrowButton = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export default ArrowButton;