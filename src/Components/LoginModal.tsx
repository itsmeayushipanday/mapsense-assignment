// src/components/LoginModal.tsx
import React from 'react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Login</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-2xl h-16 w-16">&times;</button>
                </div>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" className="mt-1 p-2 w-full border border-black rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="mt-1 p-2 w-full border border-black rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700">Remember Me</label>
                    </div>
                    <button type="submit" className="text-white bg-gradient-to-r from-[#2E1C73] via-[#2E1C73] to-[#2E1C73] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        LOGIN
                    </button>
                </form>
                <div className="mt-4 text-sm">
                    <p>Don't have an account yet? <a href="#" className="text-blue-500 hover:underline">Register</a></p>
                    <p>Forgot Password? <a href="#" className="text-blue-500 hover:underline">Reset</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
