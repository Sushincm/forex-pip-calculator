import React from 'react';

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="flex justify-between items-center py-6 border-b border-gray-200 dark:border-gray-800 mb-8">
      <h1 className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
        FX Momentum
      </h1>
    </header>
  );
}
