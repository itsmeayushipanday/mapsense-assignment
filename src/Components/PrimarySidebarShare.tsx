// src/components/PrimarySidebarShare.tsx
import React from 'react';
import { FaShareAlt } from 'react-icons/fa';


const PrimarySidebarShare: React.FC = () => (
    <div className="flex primary-sidebar p-4 bg-gray-200 w-52">
        <FaShareAlt size={18} />
        <h2 className='ml-2'>Share</h2>
    </div>
);

export default PrimarySidebarShare;
