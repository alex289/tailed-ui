import { cva, type VariantProps } from 'cva';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ButtonVariants = cva({
  base: 'inline-flex items-center justify-center disabled:cursor-not-allowed whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    color: {
      default:
        'hover:bg-blue-800 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      dark: 'hover:bg-gray-900 focus:ring-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
      light:
        'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 disabled:bg-gray-100 disabled:dark:bg-gray-700',
      green:
        'hover:bg-green-800 focus:ring-green-300 dark:hover:bg-green-700 dark:focus:ring-green-800',
      yellow:
        'hover:bg-yellow-800 focus:ring-yellow-300 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800',
      red: 'hover:bg-red-800 focus:ring-red-300 dark:hover:bg-red-700 dark:focus:ring-red-800',
      purple:
        'hover:bg-violet-800 focus:ring-violet-300 dark:hover:bg-violet-700 dark:focus:ring-violet-800',
    },
    size: {
      xs: 'px-3 py-2 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm ',
      lg: 'px-5 py-3 text-base',
      xl: 'px-6 py-3.5 text-base',
    },
    form: {
      pill: 'rounded-full',
    },
    outline: {
      active: '',
      inactive: '',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    outline: 'inactive',
  },
  compoundVariants: [
    {
      color: 'default',
      outline: 'active',
      class:
        'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800',
    },
    {
      color: 'dark',
      outline: 'active',
      class:
        'text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
    },
    {
      color: 'green',
      outline: 'active',
      class:
        'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
    },
    {
      color: 'red',
      outline: 'active',
      class:
        'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800',
    },
    {
      color: 'yellow',
      outline: 'active',
      class:
        'text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-yellow-800',
    },
    {
      color: 'purple',
      outline: 'active',
      class:
        'text-violet-700 hover:text-white border border-violet-700 hover:bg-violet-800 focus:ring-violet-300 dark:border-violet-500 dark:text-violet-500 dark:hover:text-white dark:hover:bg-violet-600 dark:focus:ring-violet-800',
    },
    {
      color: 'default',
      outline: 'inactive',
      class:
        'bg-blue-700 dark:bg-blue-600 text-white disabled:bg-blue-400 disabled:dark:bg-blue-500',
    },
    {
      color: 'dark',
      outline: 'inactive',
      class:
        'bg-gray-800 dark:bg-gray-800 text-white disabled:bg-gray-400 disabled:dark:bg-gray-500',
    },
    {
      color: 'green',
      outline: 'inactive',
      class:
        'bg-green-700 dark:bg-green-600 text-white disabled:bg-green-400 disabled:dark:bg-green-500',
    },
    {
      color: 'red',
      outline: 'inactive',
      class:
        'bg-red-700 dark:bg-red-600 text-white disabled:bg-red-400 disabled:dark:bg-red-500',
    },
    {
      color: 'yellow',
      outline: 'inactive',
      class:
        'bg-yellow-700 dark:bg-yellow-600 text-white disabled:bg-yellow-400 disabled:dark:bg-yellow-500',
    },
    {
      color: 'purple',
      outline: 'inactive',
      class:
        'bg-violet-700 dark:bg-violet-600 text-white disabled:bg-violet-400 disabled:dark:bg-violet-500',
    },
  ],
});

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
  loading?: boolean;
  className?: string;
} & VariantProps<typeof ButtonVariants>;

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  loading = false,
  type = 'button',
  className,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      onClick={props.onClick}
      type={type}
      className={twMerge(ButtonVariants(props), className)}>
      {loading && (
        <svg
          aria-hidden="true"
          role="status"
          className="mr-3 inline h-4 w-4 animate-spin text-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
