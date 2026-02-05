import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-forest-600 hover:bg-forest-700 text-white shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl hover:scale-105',
    outline: 'border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white dark:border-forest-400 dark:text-forest-400 dark:hover:bg-forest-600',
    ghost: 'text-charcoal-700 hover:bg-charcoal-100 dark:text-cream-100 dark:hover:bg-charcoal-800',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
