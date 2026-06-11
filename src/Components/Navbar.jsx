import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Get the current location/path
  const location = useLocation();

  // Check if the current location's pathname matches the link
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle menu
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Helper function to check if the current path matches a specific set of routes
  const isActivePage = (routes) => {
    return routes.some(route => location.pathname.startsWith(route));
  };

  return (
    <header
      className={`flex justify-between items-center py-5 px-12 top-0 w-full fixed z-50 ${
        isSticky ? "bg-bgSecondary duration-300 ease-in-out" : ""
      }`}
    >
      <div className="flex gap-2 items-center text-4xl font-extrabold text-bgPrimary">
        <i className="fa-solid fa-utensils"></i>
        <h1>Restoran</h1>
      </div>
      <nav>
        <ul
          className={`flex flex-col md:flex-row text-white text-sm gap-6 font-semibold md:top-6 top-20 absolute w-[96%] left-0 md:justify-end md:p-0 p-5 bg-red-00 items-center ${
            toggle ? "top-20" : "top-[-490px]"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={location.pathname === "/" ? "text-bgPrimary" : "text-white"}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={location.pathname === "/about" ? "text-bgPrimary" : "text-white"}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={location.pathname === "/services" ? "text-bgPrimary" : "text-white"}
            >
              SERVICE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={location.pathname === "/menu" ? "text-bgPrimary" : "text-white"}
            >
              MENU
            </NavLink>
          </li>

          <div className="flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
            <li>
              <NavLink
                className={isActivePage(["/booking", "/team", "/test"]) ? "text-bgPrimary" : "text-bgTertiary"}
              >
                PAGES
              </NavLink>
            </li>
            <i className="fa-solid fa-caret-down text-xs"></i>
            {isOpen && (
              <ul className="absolute top-14 bg-[#f8f9fa] text-bgSecondary p-3 rounded-sm text-base">
                <li>
                  <NavLink
                    to="/booking"
                    className={location.pathname === "/booking" ? "text-bgPrimary" : "text-bgSecondary"}
                  >
                    Booking
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    to="/team"
                    className={location.pathname === "/team" ? "text-bgPrimary" : "text-bgSecondary"}
                  >
                    Our Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/test"
                    className={location.pathname === "/test" ? "text-bgPrimary" : "text-bgSecondary"}
                  >
                    Testimonials
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <li>
            <NavLink
              to="/contact"
              className={location.pathname === "/contact" ? "text-bgPrimary" : "text-white"}
            >
              CONTACT
            </NavLink>
          </li>
          <button className="px-6 py-2 rounded-sm bg-bgPrimary text-bgTertiary font-semibold">
            Book a Table
          </button>
        </ul>
      </nav>
      <p className="md:hidden flex text-bgTertiary" onClick={handleToggle}>
        {toggle ? (
          <i className="fa-solid fa-x text-2xl"></i>
        ) : (
          <i className="fa-solid fa-bars text-2xl"></i>
        )}
      </p>
    </header>
  );
}
