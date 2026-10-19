
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HeartPlus, Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    `text-xl lg:text-xl tracking-tight transition-colors duration-200 ${
      isActive
        ? "text-blue-500"
        : "text-black hover:text-blue-500"
    }`;

  return (
    <header className="relative fixed z-50 w-full  bg-white">
      <nav className="mx-auto flex min-h-18 max-w-[1800px] items-center justify-between px-5 py-4 sm:px-8 lg:min-h-20 lg:px-[4.5%]">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4380ff] text-white sm:h-11 sm:w-11">
            <HeartPlus size={24} strokeWidth={1.3} />
          </span>

          <span className="text-2xl font-normal tracking-tight text-black sm:text-2xl">
            Vital+Flow
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={getLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-[#4380ff] px-8 py-4 text-lg font-medium text-white transition duration-300 hover:bg-blue-600 md:inline-flex lg:px-9 lg:text-xl"
        >
          Book a call
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-black hover:bg-gray-100 md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full border-t border-gray-200 bg-white p-5 shadow-lg md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-lg transition ${
                      isActive
                        ? "bg-blue-50 text-blue-500"
                        : "text-black hover:bg-gray-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-[#4380ff] px-2 py-1 text-center font-medium text-white hover:bg-blue-600"
              >
                Book a call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

