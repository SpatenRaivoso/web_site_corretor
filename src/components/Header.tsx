
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className={`text-xl font-playfair font-bold ${isScrolled ? "text-realty-blue-dark" : "text-white text-shadow"}`}>
            Imóveis de Valor<span className="text-realty-blue-dark">.</span>
          </h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Sobre", "Regiões", "Imóveis", "Tour 3D", "Contato"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors hover:text-realty-blue-dark ${
                    isScrolled ? "text-realty-gray-medium" : "text-white text-shadow"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button className={`p-2 ${isScrolled ? "text-realty-blue-dark" : "text-white"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
