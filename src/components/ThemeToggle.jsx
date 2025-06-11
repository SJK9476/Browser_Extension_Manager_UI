import React, {useEffect, useState} from 'react';
import {Moon, Sun} from "lucide-react";

const ThemeToggle = ({isDarkMode, toggleTheme}) => {

    return (
        <button onClick={toggleTheme} className="p-4 border-border rounded-xl cursor-pointer">
            {isDarkMode ? (
                <Sun className="h-6 w-6  text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};

export default ThemeToggle;
