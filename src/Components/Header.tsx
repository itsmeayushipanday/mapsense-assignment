// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
    onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => (
    <div className="flex justify-between items-center p-4 bg-white shadow">
        <div className="logo">
            <img src="/mapsense logo.png" alt="Logo" className="h-18 w-36" />
        </div>
        <div className="search flex-1 mx-4">
            <input
                className="p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Search"
            />
        </div>
        <button onClick={onLoginClick} className="text-white bg-[#2E1C73] hover:bg-[#2E1C73] focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Login
        </button>
    </div>
);

export default Header;
