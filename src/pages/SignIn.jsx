import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaEnvelope, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function SignIn() {
  const [isHidden, setIsHidden] = useState(true);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginDetails);

    // Logic to find user in database...
    login(loginDetails);
  };
  return (
    <section className="min-h-screen h-full flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="w-full h-1.5 bg-gradient-to-r from-[#4f46e5] to-[#7C3AED] rounded-t-2xl"></div>
        <div className="w-full sm:w-md bg-white shadow-xl rounded-b-2xl space-y-6 py-8 px-4 sm:px-8">
          <div className="flex flex-col justify-center items-center my-4">
            <h2 className="text-3xl font-bold primary-color mb-4">
              Welcome Back
            </h2>
            <p className="light-color text-sm">Login to your account</p>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* Email */}
            <div className="my-6">
              <label
                htmlFor="emailInput"
                className="secondary-color font-medium text-sm"
              >
                Email
              </label>
              <div className="mt-2 flex items-center border border-gray-200 focus-within:border-[#4f46e5] transition-colors duration-300 px-4 py-2 space-x-2 rounded-lg outline outline-transparent focus-within:outline-[#4f46e5]">
                <FaEnvelope className="light-color" />
                <input
                  type="email"
                  id="emailInput"
                  placeholder="Enter your email"
                  className="outline-none"
                  value={loginDetails.email}
                  onChange={(e) =>
                    setLoginDetails({ ...loginDetails, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="my-6">
              <label
                htmlFor="passwordInput"
                className="secondary-color font-medium text-sm"
              >
                Password
              </label>
              <div className="mt-2 flex items-center border border-gray-200 focus-within:border-[#4f46e5] transition-colors duration-300 px-4 py-2 space-x-2 rounded-lg outline outline-transparent focus-within:outline-[#4f46e5]">
                {isHidden ? (
                  <FaEyeSlash
                    className="light-color cursor-pointer"
                    onClick={() => setIsHidden(false)}
                  />
                ) : (
                  <FaEye
                    className="light-color cursor-pointer"
                    onClick={() => setIsHidden(true)}
                  />
                )}
                <input
                  type={isHidden ? "password" : "text"}
                  id="passwordInput"
                  placeholder="Enter your password"
                  className="outline-none"
                  value={loginDetails.password}
                  onChange={(e) =>
                    setLoginDetails({
                      ...loginDetails,
                      password: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="my-6 flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="checkInput" required />
                <label htmlFor="checkInput">Remember me</label>
              </div>
              <a
                href="#"
                className="text-[#4f46e5] font-medium hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="text-white py-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] w-full rounded-lg font-medium 
                            shadow-md hover:shadow-lg hover:shadow-[#4f46e5]/50 
                            hover:-translate-y-0.5 
                            transition-all duration-300 ease-in-out cursor-pointer"
            >
              Login
            </button>
          </form>

          <hr className="text-gray-300" />

          <div className="space-y-4">
            <p className="light-color text-sm text-center">
              Don't have an account ?{" "}
              <Link to="/register" className="font-medium text-[#4f46e5]">
                Register
              </Link>
            </p>
            <p className="light-color text-sm text-center">Or login with</p>
            <div className="flex justify-center items-center space-x-4">
              <button className="flex justify-center items-center text-[#db4437] border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                <FaGoogle className="me-2" /> Google
              </button>

              <button className="flex justify-center items-center text-[#4267B2] border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                <FaFacebookF className="me-2" /> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
