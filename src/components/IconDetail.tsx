import React from 'react';
import { motion } from 'motion/react';
import { IconData } from '../types';
import { IconWrapper } from './IconWrapper';
import { X } from 'lucide-react';

interface IconDetailProps {
  icon: IconData;
  onClose: () => void;
}

export const IconDetail: React.FC<IconDetailProps> = ({ icon, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 md:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
              <IconWrapper name={icon.lucideIcon} className="w-12 h-12 md:w-16 md:h-16 text-indigo-600 dark:text-indigo-400" strokeWidth={1.5} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
            {icon.name}
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-6 text-sm uppercase tracking-wide font-medium">
            {icon.category}
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Descrizione</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {icon.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Contesto d'uso</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {icon.context}
              </p>
            </div>

            {icon.history && (
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Cenni Storici</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
                  {icon.history}
                </p>
              </div>
            )}

            {icon.variations && Object.keys(icon.variations).length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Variazioni per OS</h3>
                <div className="space-y-2">
                  {Object.entries(icon.variations).map(([os, desc]) => (
                    <div key={os} className="flex items-start gap-2 text-sm">
                      <span className="font-medium text-indigo-600 dark:text-indigo-400 min-w-[60px]">{os}:</span>
                      <span className="text-gray-600 dark:text-gray-300">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Disponibile su</h3>
              <div className="flex flex-wrap gap-2">
                {icon.osAvailability.map((os) => (
                  <span
                    key={os}
                    className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium"
                  >
                    {os}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

