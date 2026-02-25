import React from 'react';
import { IconData } from '../types';
import { IconWrapper } from './IconWrapper';
import { motion } from 'motion/react';

interface IconGridProps {
  icons: IconData[];
  onSelect: (icon: IconData) => void;
}

export const IconGrid: React.FC<IconGridProps> = ({ icons, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md cursor-pointer border border-gray-100 dark:border-gray-700 transition-colors flex flex-col items-center justify-center gap-4 group"
          onClick={() => onSelect(icon)}
        >
          <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
            <IconWrapper
              name={icon.lucideIcon}
              className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
            />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
            {icon.name}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            {icon.category}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
