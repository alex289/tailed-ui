import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const AlertStyles = cva(
  ['p-4', 'mb-4', 'text-sm', 'rounded-lg', 'dark:bg-gray-800'],
  {
    variants: {
      color: {
        info: 'text-blue-700 dark:text-blue-400',
        danger: 'text-red-700 dark:text-red-400',
        success: 'text-green-700 dark:text-green-400',
        warning: 'text-yellow-700 dark:text-yellow-400',
        dark: 'text-gray-700 dark:text-gray-400',
      },
    },
    defaultVariants: {
      color: 'info',
    },
  }
);

type AlertVariantProps = VariantProps<typeof AlertStyles>;
export interface AlertProps extends AlertVariantProps {
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ children, ...props }) => {
  return (
    <div className={AlertStyles(props)} role="alert">
      <span className="font-medium">Info alert!</span> Change a few things up
      and try submitting again.
    </div>
  );
};

export default Alert;
