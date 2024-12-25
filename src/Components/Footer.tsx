// src/components/Footer.tsx
import React from 'react';
import { MdDomainVerification } from "react-icons/md";


const Footer: React.FC = () => (
    <div className="text-white footer flex justify-between items-center p-2 bg-[#2E1C73] text-sm font-sans fixed bottom-0 left-0 w-full">
        <div className="left-section">
            <MdDomainVerification size={18} />
        </div>
        <div className="right-section">
            Ln 17 Col 3, Spaces: 2, UTF-8, LF, TypeScript
        </div>
    </div>
);

export default Footer;
