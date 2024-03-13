import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "About", link: "about" },
    { id: 2, text: "Skills", link: "projects" },
    { id: 3, text: "Projects", link: "projects" },
    { id: 4, text: "Experience", link: "projects" },
    { id: 5, text: "Education", link: "contact" },
    { id: 6, text: "Contact", link: "contact" },
  ];

  return (
    <nav className="w-full flex justify-between items-center h-20 mx-auto px-8 font-bold shadow-lg min-w-[360px] max-w-[1627px] box-border font-heading top-0 bg-white">
      {/* Logo */}

      <Link to="/" spy={true} smooth={true} duration={500}>
        <div className="flex items-center">
          <p className="text-2xl font-bold mx-2 text-portdarkpurple">Shaurya</p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex mr-1">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={`${item.link}`}
            spy={true}
            smooth={true}
            duration={500}
          >
            {" "}
            <li className="py-2 px-3 mx-3 rounded-full m-2 cursor-pointer duration-300 text-lg text-porttext hover:bg-porttext hover:text-white">
              {item.text}
            </li>
          </Link>
        ))}
        <a
          href="https://www.linkedin.com/in/shaurya--jain/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <button className="py-2 px-3 mx-3 rounded-full m-2 cursor-pointer duration-300 border-portdarkpurple border-2 text-lg text-portdarkpurple">
            Resume
          </button>
        </a>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden mr-2">
        {nav ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-portlight ease-in-out duration-500 z-10"
            : "ease-in-out w-[100%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}

        <div className="flex">
          <p className="m-4 text-2xl text-portdarkpurple">Shaurya</p>
        </div>

        {/* Mobile Navigation Items */}
        <div className="my-5">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`${item.link}`}
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              <li className="py-3 border-b px-5 rounded-xl duration-300 text-porttext cursor-pointer text-xl">
                {item.text}
              </li>
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/shaurya--jain/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <button className="py-3 border-b px-5 rounded-xl duration-300 text-porttext cursor-pointer text-xl w-full text-left">
              Resume
            </button>
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
