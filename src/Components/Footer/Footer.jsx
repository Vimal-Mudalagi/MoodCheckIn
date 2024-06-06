import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col justify-center items-center text-center h-44 bg-[#f1f2ec]"
    >
      <p className="font-bold text-sm">
        Made by{" "}
        <a
          href="https://twitter.com/vimalmudalagi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Vimal Mudalagi
        </a>
      </p>
      <a
        href="https://twitter.com/vimalmudalagi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-bold mb-4"
      >
        Thanks
      </a>
    </footer>
  );
};

export default Footer;
