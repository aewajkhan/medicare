import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("=-=-=-", user?.user);
  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MediCare
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8 text-gray-700 font-medium">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            {isAuthenticated ? (
              <>
                <span className="text-blue-600 font-bold">
                  Hello, {user?.user?.firstName}
                </span>
                <img
                  src={user?.user?.profileImage}
                  alt="img"
                  className="w-10 h-10 rounded-full"
                />
                <button
                  onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                  }}
                  className="text-white hover:text-pink-200 bg-red-500 px-3 py-1 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 bg-white shadow-md text-gray-700 space-y-3 font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {isAuthenticated ? (
            <>
              <span className="text-blue-600 font-bold">
                Hello, {user?.user?.firstName}{" "}
              </span>
              <img
                src={user?.user?.profileImage}
                alt="img"
                className="w-10 h-10 rounded-full"
              />

              <button
                onClick={() => {
                  dispatch(logout());
                  navigate("/login");
                }}
                className="text-white hover:text-pink-200 bg-red-500 px-3 py-1 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                onClick={() => setMenuOpen(false)}
                to="/login"
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/signup"
                className="bg-blue-600 w-[70px]  text-white px-1 py-1 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
