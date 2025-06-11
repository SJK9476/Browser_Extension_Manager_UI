import React from 'react';
import {cn} from "../lib/utils.js";


const ToggleSwitch = ( {extensionActive = true, onToggle} ) => {
    return (
        <div onClick={onToggle}
            className={cn("cursor-pointer opacity-75 hover:opacity-100" +
            " h-[20px] w-[36px] flex items-center rounded-full px-1" +
            " bg-main-text/20", extensionActive ? "bg-active" : "bg-main-text/20")}>
            <div className={cn("h-[16px] w-[16px] bg-white rounded-full" +
                " transition-transform", extensionActive ? "translate-x-3" : "translate-x-0")} />


        </div>
    );
};

export default ToggleSwitch;
