"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  showBottomButtons?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  showBottomButtons = true,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="animate-fadeIn fixed inset-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-25 z-50">
      <div className="bg-white rounded-xl shadow-xl min-w-96 p-8 pb-12">
        <div className="flex justify-between items-center mb-4 relative">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 absolute right-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>{children}</div>
        {showBottomButtons && (
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl"
            >
              关闭
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-global text-white rounded-xl"
            >
              确认
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
