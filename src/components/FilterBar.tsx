import React from 'react';
import { OS } from '../types';
import { motion } from 'motion/react';

interface FilterBarProps {
  selectedOS: OS | 'All';
  onSelect: (os: OS | 'All') => void;
}

const osOptions: (OS | 'All')[] = ['All', 'Windows', 'macOS', 'Android', 'iOS'];

export const FilterBar: React.FC<FilterBarProps> = ({ selectedOS, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {osOptions.map((os) => (
        <button
          key={os}
          onClick={() => onSelect(os)}
          className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
            ${selectedOS === os ? 'text-white' : 'text-gray-600 hover:bg-gray-100'}
          `}
        >
          {selectedOS === os && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-indigo-600 rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{os === 'All' ? 'Tutti' : os}</span>
        </button>
      ))}
    </div>
  );
};
