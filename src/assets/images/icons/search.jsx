import * as React from "react";
const SearchIcon = (props) => (
    <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_6437_28987)">
            <path
                opacity={0.5}
                d="M9.58329 17.4998C13.9555 17.4998 17.5 13.9554 17.5 9.58317C17.5 5.21092 13.9555 1.6665 9.58329 1.6665C5.21104 1.6665 1.66663 5.21092 1.66663 9.58317C1.66663 13.9554 5.21104 17.4998 9.58329 17.4998Z"
                stroke="#262626"
                strokeWidth={1.5}
            />
            <path
                d="M15.4166 15.4165L18.3333 18.3332"
                stroke="#262626"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_6437_28987">
                <rect width={20} height={20} fill="white" />
            </clipPath>
        </defs>
    </svg>
);
export default SearchIcon;
