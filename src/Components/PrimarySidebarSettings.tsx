// src/components/PrimarySidebarSettings.tsx
import React from 'react';
import { FaCog } from 'react-icons/fa';


const PrimarySidebarSettings: React.FC = () => (
    <div className="flex primary-sidebar p-4 bg-gray-200 w-52">
        <FaCog size={18} />
        <h2 className='ml-2'>Settings</h2>
    </div>
);

export default PrimarySidebarSettings;
