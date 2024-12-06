import React, { useState, useEffect } from "react";
import { Sun, Moon } from 'lucide-react';

function Header() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;

        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e) => {
            setTheme(e.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const handleToggle = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="flex items-center">
            <button
                onClick={handleToggle}
                className="relative w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full
                transition-colors duration-300 ease-in-out flex items-center"
                aria-label="Toggle theme"
            >
                <span
                    className={`
                        absolute left-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full 
                        shadow-md transform transition-transform duration-300 ease-in-out
                        ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'}
                    `}
                >
                    {theme === 'light' ? (
                        <Sun className="w-5 h-5 text-yellow-500 m-0.5" />
                    ) : (
                        <Moon className="w-5 h-5 text-gray-700 m-0.5" />
                    )}
                </span>
            </button>
        </div>
    );
}

export default Header;