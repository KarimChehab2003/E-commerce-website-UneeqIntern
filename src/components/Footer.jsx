import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPinterest,
  FaTwitter,
  FaX,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="w-full bg-[#1a1a1a] p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-start text-white space-y-8">
          {/* ShopEase Logo */}
          <div>
            <h2 className="text-[#4f46e5] font-semibold capitalize text-2xl mb-2">
              ShopEase
            </h2>
            <p>Your one-stop shopping destination for all your needs.</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[#4f46e5] font-semibold capitalize text-lg mb-2">
              quick links
            </p>
            <ul className="light-color">
              <li className="capitalize hover:text-[#4f46e5] transition-colors duration-300 cursor-pointer my-1">
                <Link to="/">home</Link>
              </li>
              <li className="capitalize hover:text-[#4f46e5] transition-colors duration-300 cursor-pointer my-1">
                <Link to="/products">products</Link>
              </li>
              <li className="capitalize hover:text-[#4f46e5] transition-colors duration-300 cursor-pointer my-1">
                <Link to="/categories">categories</Link>
              </li>
              <li className="capitalize hover:text-[#4f46e5] transition-colors duration-300 cursor-pointer my-1">
                <Link to="/about">about</Link>
              </li>
              <li className="capitalize hover:text-[#4f46e5] transition-colors duration-300 cursor-pointer my-1">
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[#4f46e5] font-semibold capitalize text-lg mb-2">
              contact us
            </p>
            <p className="flex items-center space-x-2">
              <FaEnvelope />
              <span>karimchehab2018@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhone />
              <span> +201008408815</span>
            </p>
          </div>
          <div>
            <p className="text-[#4f46e5] font-semibold capitalize text-lg mb-2">
              follow us
            </p>
            <div className="flex items-center space-x-2 text-lg">
              <FaFacebook className="text-[#4f46e5] cursor-pointer hover:text-[#7c3aed] transition-colors duration-300" />
              <FaTwitter className="text-[#4f46e5] cursor-pointer hover:text-[#7c3aed] transition-colors duration-300" />
              <FaInstagram className="text-[#4f46e5] cursor-pointer hover:text-[#7c3aed] transition-colors duration-300" />
              <FaPinterest className="text-[#4f46e5] cursor-pointer hover:text-[#7c3aed] transition-colors duration-300" />
            </div>
          </div>
        </div>
        <p className="light-color text-center">
          © 2024 ShopEase. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
