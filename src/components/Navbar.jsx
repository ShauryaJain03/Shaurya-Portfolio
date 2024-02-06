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
    { id: 2, text: "Projects", link: "projects" },
    { id: 3, text: "Contact", link: "contact" },
    {
      id: 4,
      text: "Resume",
      link: "",
    },
  ];

  return (
    <nav className="w-full flex justify-between items-center h-20 mx-auto px-8 font-bold shadow-lg min-w-[360px] max-w-[1627px] box-border font-heading top-0">
      {/* Logo */}

      <Link to="/" spy={true} smooth={true} duration={500}>
        <div className="flex items-center">
          <p className="text-2xl font-bold mx-2 text-portblue">Shaurya</p>
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
            <li className="py-2 px-4 mx-4 rounded-full m-2 cursor-pointer duration-300 border-[#3399CC] border-2 text-md text-[#3399CC] hover:bg-portblue hover:text-white">
              {item.text}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden mr-2">
        {nav ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-10"
            : "ease-in-out w-[100%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}

        <div className="flex">
          <p className="m-4 text-2xl">Shaurya</p>
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
              <li className="py-3 border-b px-5 rounded-xl duration-300 text-portblue cursor-pointer text-xl">
                {item.text}
              </li>
            </Link>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
