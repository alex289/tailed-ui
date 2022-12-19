import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 dark:bg-red-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
