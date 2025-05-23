import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import Footer from "./Footer";
import { useState } from "react";
import { useSearch } from "../contexts/SearchContext";
import CartModal from "./CartModal";
import { useCart } from "../contexts/CartContext";

function Layout() {
  const navigate = useNavigate();
  const { isAuthenticated, logout, currentUser } = useAuth();
  const [isToggled, setIsToggled] = useState(false);
  const { searchByName } = useSearch()
  const [inputQuery, setInputQuery] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { itemCount } = useCart();
  return (
    <>
      <nav className="shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-4 sticky z-40">
        {/* If I want to use gradient text: bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent */}
        <div className="flex justify-between lg:justify-center items-center md:space-x-4 relative">
          {/* Logo */}
          <p
            className="order-2 font-bold text-2xl text-[#4F46E5] hover:text-[#7C3AED] transition-all duration-300 cursor-pointer"
            onClick={() => navigate("/")}
          >
            ShopEase
          </p>

          {/* Hamburger menu */}
          <div
            className="lg:hidden order-1 text-2xl p-4 cursor-pointer"
            onClick={() => setIsToggled((prev) => !prev)}
          >
            <FaBars />
          </div>

          {/* Navbar for mobile */}
          {isToggled ? (
            <div className="lg:hidden w-full md:w-fit bg-white absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center p-8 rounded-xl space-y-4 animate-[slideIn_0.3s_ease-in_forwards] shadow-2xl ">
              {/* Nav Links */}
              <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0  md:space-x-8 font-medium capitalize secondary-color ">
                {
                  ["home", "products", "categories", "about", "contact"].map((link, index) => (
                    <li className="relative flex flex-col justify-center px-2.5 py-1.5 rounded-t-lg hover:[&>div]:w-full hover:bg-gray-200/50 hover:text-[#4F46E5] transition-all duration-300 ease-out">
                      <Link to={`/${index == 0 ? '' : link}`}>{link}</Link>
                      <div className="absolute bottom-0 left-0 -mb-1 h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] w-0 transition-all duration-300 ease-out"></div>
                    </li>
                  ))
                }
              </ul>

              {/* Search Field */}
              <form className="w-full max-w-full sm:w-fit flex justify-between items-center bg-gray-200/50 px-4 py-2.5 rounded-md border-2 border-transparent focus-within:border-[#4f46e5] transition-colors duration-300" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="search"
                  placeholder="Search products..."
                  className="outline-0"
                  onChange={(e) => setInputQuery(e.target.value)}
                />
                <button type="submit" onClick={() => {
                  navigate("/products")
                  searchByName(inputQuery);
                }}>
                  <FaSearch className="hover:text-[#4f46e5] transition-colors cursor-pointer duration-300" />
                </button>
              </form>

              {/* Login/Register Buttons */}
              <div className="flex items-center space-x-4">
                {isAuthenticated ? (
                  <>
                    <p>Welcome, {currentUser?.name}</p>
                    <button
                      className="capitalize font-medium bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:bg-gradient-to-l px-3 py-2 rounded-md transition-colors cursor-pointer"
                      onClick={() => {
                        logout();
                        navigate("/login");
                      }}
                    >
                      logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="capitalize font-medium hover:bg-gray-200/50 hover:text-[#4f46e5] px-3 py-2 rounded-md transition-colors duration-300 cursor-pointer"
                      onClick={() => navigate("/login")}
                    >
                      login
                    </button>
                    <button
                      className="capitalize font-medium bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:bg-gradient-to-l px-3 py-2 rounded-md transition-colors cursor-pointer"
                      onClick={() => navigate("/register")}
                    >
                      register
                    </button>
                  </>
                )}
              </div>
            </div>
          ) : null}

          {/* Navbar for laptop/tablet */}
          <div className="hidden lg:flex items-center text-center rounded-xl space-x-4 order-2">
            {/* Nav Links */}
            <ul className="flex flex-col md:flex-row items-center space-y-2 just md:space-y-0 md:space-x-8 font-medium capitalize secondary-color ">
              {
                ["home", "products", "categories", "about", "contact"].map((link, index) => (
                  <li className="relative flex flex-col justify-center px-2.5 py-1.5 rounded-t-lg hover:[&>div]:w-full hover:bg-gray-200/50 hover:text-[#4F46E5] transition-all duration-300 ease-out">
                    <Link to={`/${index == 0 ? '' : link}`}>{link}</Link>
                    <div className="absolute bottom-0 left-0 -mb-1 h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] w-0 transition-all duration-300 ease-out"></div>
                  </li>
                ))
              }
            </ul>

            {/* Search Field */}
            <form className="hidden xl:flex items-center bg-gray-200/50 px-4 py-2.5 rounded-md border-2 border-transparent focus-within:border-[#4f46e5] transition-colors duration-300" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                placeholder="Search products..."
                className="outline-0"
                onChange={(e) => setInputQuery(e.target.value)}
              />
              <button type="submit" onClick={() => {
                navigate("/products")
                searchByName(inputQuery);
              }}>
                <FaSearch className="hover:text-[#4f46e5] transition-colors cursor-pointer duration-300" />
              </button>
            </form>

            {/* Login/Register Buttons */}
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <p>Welcome, {currentUser?.name}</p>
                  <button
                    className="capitalize font-medium bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:bg-gradient-to-l px-3 py-2 rounded-md transition-colors cursor-pointer"
                    onClick={() => {
                      logout();
                      navigate("/login");
                    }}
                  >
                    logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="capitalize font-medium hover:bg-gray-200/50 hover:text-[#4f46e5] px-3 py-2 rounded-md transition-colors duration-300 cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    login
                  </button>
                  <button
                    className="capitalize font-medium bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:bg-gradient-to-l px-3 py-2 rounded-md transition-colors cursor-pointer"
                    onClick={() => navigate("/register")}
                  >
                    register
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Cart Button */}
          <div className="relative order-3 p-4" onClick={() => setIsCartOpen(true)}>
            <p className="w-6 h-6 bg-[#4f46e5] rounded-full flex items-center justify-center text-white absolute top-0 right-0">
              {itemCount}
            </p>
            <FaCartShopping className="hover:text-[#4f46e5] transition-colors duration-300 text-2xl cursor-pointer" />
          </div>

          {/* Cart Body */}
          <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        </div>
      </nav >
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
