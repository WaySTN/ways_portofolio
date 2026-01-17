import { useState, useEffect } from "react";

const NavItem = ({ href, children }) => {
  return (
    <li className="relative">
      <a
        href={href}
        className="relative sm:text-base text-sm font-medium px-4 py-2 rounded-full
                   transition-all duration-300 ease-out
                   text-zinc-400 hover:text-white
                   hover:bg-white/10
                   active:scale-95 active:bg-white/20
                   border border-transparent md:hover:border-white/10
                   outline-none"
      >
        {children}
      </a>
    </li>
  );
};

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar relative z-50 py-7 flex items-center justify-between px-6 md:px-12">
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold text-white p-1 md:bg-transparent md:text-white">
          Portofolio
        </h1>
      </div>

      {/* Menu */}
      <ul
        className={`flex items-center gap-1 
            md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 
            md:opacity-100 bg-zinc-900/90 backdrop-blur-md 
            md:bg-transparent md:backdrop-blur-none
            p-1.5 rounded-full border border-white/5 md:border-transparent
            transition-all md:transition-none shadow-lg md:shadow-none
            ${active ? "top-4 opacity-100" : "-top-20 opacity-0"}`}
      >
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#project">Project</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
