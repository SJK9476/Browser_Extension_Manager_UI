import React, {useEffect, useState} from 'react';
import ThemeToggle from "./ThemeToggle.jsx";

const Navbar = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }  else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <div className="container mt-5">
            <div
                className="max-w-5xl mx-auto w-full flex justify-between items-center
                 bg-card px-3 py-2 rounded-[10px] shadow-md border border-border/20">
                <div>
                    {isDarkMode ? (<img src="/logo-dark.svg" alt="logo"/>) : (
                        <img src="/logo.svg" alt="logo"/>)}
                </div>
                <div className="bg-toggle-background rounded-2xl">
                    <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
