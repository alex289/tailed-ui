import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export const AlertStyles = cva(
  ['flex', 'p-4', 'mb-4', 'text-sm', 'rounded-lg', 'dark:bg-gray-800'],
  {
    variants: {
      status: {
        info: 'text-blue-700 dark:text-blue-400 bg-blue-100',
        danger: 'text-red-700 dark:text-red-400 bg-red-100',
        success: 'text-green-700 dark:text-green-400 bg-green-100',
        warning: 'text-yellow-700 dark:text-yellow-400 bg-yellow-100',
        dark: 'text-gray-700 dark:text-gray-400 bg-gray-100',
      },
      border: {
        active: 'border',
        accent: 'border-t-4 rounded-none',
      },
    },
    defaultVariants: {
      status: 'info',
    },
    compoundVariants: [
      {
        status: 'info',
        border: ['active', 'accent'],
        class: 'border-blue-300 dark:border-blue-800',
      },
      {
        status: 'danger',
        border: ['active', 'accent'],
        class: 'border-red-300 dark:border-red-800',
      },
      {
        status: 'success',
        border: ['active', 'accent'],
        class: 'border-green-300 dark:border-green-800',
      },
      {
        status: 'warning',
        border: ['active', 'accent'],
        class: 'border-yellow-300 dark:border-yellow-800',
      },
      {
        status: 'dark',
        border: ['active', 'accent'],
        class: 'border-gray-300 dark:border-gray-800',
      },
    ],
  },
);

export type AlertProps = {
  children: React.ReactNode;
  title?: string;
  message?: string;
  icon?: boolean;
  showCloseButton?: boolean;
  className?: string;
} & VariantProps<typeof AlertStyles>;

const Alert: React.FC<AlertProps> = ({
  title,
  message,
  icon = true,
  showCloseButton = false,
  className,
  ...props
}) => {
  const [show, setShow] = React.useState(true);
  if (!show) {
    return null;
  }
  return (
    <div className={twMerge(AlertStyles(props), className)} role="alert">
      {icon && (
        <svg
          aria-hidden="true"
          className="mr-3 inline h-5 w-5 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"></path>
        </svg>
      )}
      <div>
        <span className="mr-1 font-medium">{title}</span>
        {message}
      </div>
      {showCloseButton && (
        <button
          type="button"
          onClick={() => setShow(false)}
          className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2 dark:bg-gray-800 dark:hover:bg-gray-700">
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
