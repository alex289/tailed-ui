import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children = null, ...props }) => {
  return (
    <button
      {...props}
      type={props.type || 'button'}
      className={`mx-3 mb-2 rounded-lg bg-violet-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-700 disabled:cursor-not-allowed dark:bg-violet-700 hover:dark:bg-violet-900`}>
      {children}
    </button>
  );
};

export default Button;
