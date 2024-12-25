// src/components/PrimarySidebarHelp.tsx
import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const PrimarySidebarHelp: React.FC = () => (
    <div className="flex primary-sidebar p-4 bg-gray-200 w-52">
        <FaQuestionCircle size={18} />
        <h2 className='ml-2'>Help</h2>
    </div>
);

export default PrimarySidebarHelp;
