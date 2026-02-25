import React from 'react';
import { BookOpen } from 'lucide-react';

export const Header: React.FC = () => (
  <header className="py-12 text-center px-4">
    <div className="inline-flex items-center justify-center p-4 mb-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-indigo-100 dark:ring-indigo-800">
      <BookOpen className="w-8 h-8" strokeWidth={1.5} />
    </div>
    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
      Mappa Icone GUI
    </h1>
    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
      Esplora il linguaggio visivo delle interfacce moderne.
      Scopri il significato, la storia e l'uso delle icone più comuni su Windows, macOS, Android e iOS.
    </p>
  </header>
);
