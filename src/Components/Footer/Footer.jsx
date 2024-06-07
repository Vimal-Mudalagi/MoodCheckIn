const Footer = () => {
  return (
    <footer
      id="footer"
      className="border w-full fixed bottom-0 flex flex-col justify-center items-center text-center bg-[#f1f2ec] pt-4"
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
