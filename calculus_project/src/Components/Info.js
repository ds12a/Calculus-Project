import React, { useState } from 'react';
import Opening from './Opening.js';
export default function Info(props) {
    const daysLeft = props.daysLeft;
    const roundID = props.round;

    return (
        <div class="mx-auto shadow-lg rounded-2xl w-11/12 p-1 mb-4 bg-white dark:bg-gray-800 fixed-bottom">
            <div class="flex align-center justify-around">
                <p class="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
                    {"Round " + roundID}
                </p>
                <p class="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
                    Days Remaining: {daysLeft}
                </p>
                <Opening/>
            </div>
            <div>
                <div class="relative w-full h-2 bg-gray-200 rounded">
                    <div class="absolute top-0 h-2 left-0 rounded bg-green-500" style={{width: (daysLeft + "%")}}>
                    </div>
                </div>
            </div>
        </div>
    );
}