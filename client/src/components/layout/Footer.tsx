import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-gray-400 text-sm">
          © Copyright All Rights Reserved {new Date().getFullYear()}
        </p>
        <p className="text-gray-400 text-sm">
          Developed by <span className="text-[#ff5722]">Gilbert Hutapea</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;