import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
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

  // Brand Style Guide: Primary (solid green), Secondary Action (outline), Subtle Link (rose gold)
  const variants = {
    primary: 'bg-primary hover:bg-forest-700 text-white shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-white dark:bg-charcoal-800 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-forest-400 dark:text-forest-400 dark:hover:bg-primary dark:hover:text-white shadow-sm',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-forest-400 dark:text-forest-400 dark:hover:bg-primary dark:hover:text-white',
    ghost: 'text-charcoal-800 hover:bg-charcoal-100 dark:text-cream-100 dark:hover:bg-charcoal-800',
    link: 'text-rose-gold hover:text-rose-600 underline underline-offset-2 bg-transparent shadow-none hover:shadow-none hover:scale-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const sizeClasses = variant === 'link' ? 'px-0 py-0 text-base' : sizes[size];

  return (
    <button
      className={cn(baseStyles, variants[variant], sizeClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
}
