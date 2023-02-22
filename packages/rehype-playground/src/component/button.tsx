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
        isActive && "ring-1 ring-gray-300 dark:ring-gray-700"
      } ${className} inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 m-2`}
    >
      {children}
    </button>
  );
}
