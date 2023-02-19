import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export function Button({ children, className, isActive, ...props }: Props) {
  return (
    <button
      type="button"
      {...props}
      className={`${
        isActive && "bg-gray-100"
      } inline-block px-6 py-2.5 mr-2 bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-back-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
}
