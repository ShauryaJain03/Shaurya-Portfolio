import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "About" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Contact" },
  ];

  return (
    <nav className="w-full flex justify-between items-center h-20 mx-auto px-4 bg-slate-50 font-bold shadow-lg">
      {/* Logo */}

      <div className="flex items-center">
        <p className="text-xl mx-2">Shaurya</p>
      </div>


      {/* Desktop Navigation */}
      <ul className="hidden md:flex mr-1">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-blue-600 text-lg"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden mr-2">
        {nav ? (
          <div
          >hi</div>
        ) : (
          <div>close</div>
        )}
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
          <img
            src="../logo.png"
            alt=""
            height={30}
            width={60}
            className="m-3"
          />
        </div>

        {/* Mobile Navigation Items */}
        <div className="my-5">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="py-3 border-b px-5 rounded-xl duration-300 hover:text-white cursor-pointer border-stone-300 text-medBlue-200"
            >
              {item.text}
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
