import React, { useState, useMemo } from 'react';
import { icons } from './data/icons';
import { IconData, OS } from './types';
import { FilterBar } from './components/FilterBar';
import { IconGrid } from './components/IconGrid';
import { IconDetail } from './components/IconDetail';
import { Header } from './components/Header';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedOS, setSelectedOS] = useState<OS | 'All'>('All');
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);

  const filteredIcons = useMemo(() => {
    if (selectedOS === 'All') return icons;
    return icons.filter((icon) => icon.osAvailability.includes(selectedOS));
  }, [selectedOS]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />
        
        <FilterBar selectedOS={selectedOS} onSelect={setSelectedOS} />
        
        <IconGrid icons={filteredIcons} onSelect={setSelectedIcon} />
        
        <footer className="mt-16 text-center text-sm font-medium">
          <p className="bg-gradient-to-r from-orange-500 to-sky-400 bg-clip-text text-transparent">
            © 2026 Mappa Icone GUI. Progetto didattico per studenti di informatica. By Indennitate Maria Grazia. VeravoxDev
          </p>
        </footer>

        <AnimatePresence>
          {selectedIcon && (
            <IconDetail 
              key="modal" 
              icon={selectedIcon} 
              onClose={() => setSelectedIcon(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
