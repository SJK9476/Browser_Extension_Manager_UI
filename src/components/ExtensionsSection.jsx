import React, {useState} from 'react';
import {cn} from "../lib/utils.js";
import ToggleSwitch from "./ToggleSwitch.jsx";

const categories = ["All", "Active", "Inactive"];

const allExtensions = [
    {
        "logo": "/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
]

const ExtensionsSection = () => {
    // state to track current active tab
    const [activeCategory, setActiveCategory] = useState("All");
    // state to track current active extensions
    const [extensions, setExtensions] = useState(allExtensions);


    // function to handle toggling isActive property of extension based on
    // its name

    const handleToggle = (extensionName) => {
        setExtensions(prevExtensions =>
            prevExtensions.map(ext =>
                ext.name === extensionName ? { ...ext, isActive: !ext.isActive } : ext
            )
        );
    };

    // function to remove extension from list held in extensions useState
    // using the extensions name

    const handleRemove = (extensionName) => {
        setExtensions(prevExtensions => prevExtensions.filter(ext => ext.name !== extensionName));
    };

    const filteredExtensions = extensions.filter(extension => {
        if (activeCategory === "Active") {
            return extension.isActive;
        }
        if (activeCategory === "Inactive") {
            return !extension.isActive;
        }
        return true;

    });


    return (
        <section className="container">
            <div
                className="flex items-center justify-center w-full flex-col md:flex-row md:justify-between mt-10 gap-6">
                <h1 className="text-preset-1 text-heading">Extensions List</h1>
                <div className="flex items-center justify-center gap-2.5">
                    {categories.map((category, key) => (
                        <button key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn("px-5 py-2 rounded-full" +
                                    " cursor-pointer" +
                                    " transition-colors duration-300" +
                                    " border border-button-text/20" +
                                    " shadow-border" +
                                    "", activeCategory === category ? "bg-active" +
                                    " text-white dark:text-blue-950 text-preset-3" : "bg-card" +
                                    " text-button-text text-preset-3")}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
                {filteredExtensions.map((extension, key) => (
                    <div key={key}
                         className="flex flex-col gap-10 bg-card border border-border/50 p-4 rounded-[20px]">
                        <div className="flex flex-row gap-6">
                            <div className="h-[60px] w-[60px] flex-shrink-0">
                                <img src={extension.logo} alt="extension-logo"
                                     className="w-full h-full"/>
                            </div>
                            <div
                                className="flex flex-col gap-3 justify-baseline text-left ">
                                <h3 className="text-preset-2">{extension.name}</h3>
                                <p className="text-preset-5">{extension.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <button
                                className="border border-border/30 rounded-full py-2 px-5 cursor-pointer transition-colors duration-300 hover:bg-active hover:text-white  text-preset-6 hover:border-active"
                                onClick={() => handleRemove(extension.name)}
                            >Remove
                            </button>
                            <div className="flex items-center">
                                <ToggleSwitch extensionActive={extension.isActive}
                                              onToggle={() => handleToggle(extension.name)}
                                />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExtensionsSection;
