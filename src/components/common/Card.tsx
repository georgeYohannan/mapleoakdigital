import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.03, y: -8 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        'bg-white dark:bg-charcoal-900 rounded-xl shadow-lg overflow-hidden',
        'border border-charcoal-100 dark:border-charcoal-800',
        hover && 'hover:shadow-2xl transition-shadow duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
