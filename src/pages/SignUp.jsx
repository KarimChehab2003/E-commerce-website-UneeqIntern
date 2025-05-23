import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaUser,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function SignUp() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
  const [registerDetails, setRegisterDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerDetails);

    //post new data into database after verifying passwords match
    //retrieved data is put into login function as parameter
    // login()
  };

  return (
    <section className="min-h-screen h-full flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="w-full h-1.5 bg-gradient-to-r from-[#4f46e5] to-[#7C3AED] rounded-t-2xl"></div>
        <div className="w-full max-w-lg bg-white shadow-xl rounded-b-2xl space-y-6 py-8 px-4 sm:px-8">
          <div className="flex flex-col justify-center items-center my-4">
            <h2 className="text-3xl font-bold primary-color mb-4">
              Create Account
            </h2>
            <p className="light-color text-sm">Join ShopEase today</p>
          </div>

          <form onSubmit={(e) => handleSubmit(e)}>
            {/* Name */}
            <div className="my-6 grid grid-cols-2 gap-x-4">
              <label className="secondary-color font-medium text-sm col-span-2">
                Full Name
              </label>

              {/* First Name */}
              <div className="mt-2 flex items-center border border-gray-200 focus-within:border-[#4f46e5] transition-colors duration-300 px-4 py-2 rounded-lg outline outline-transparent focus-within:outline-[#4f46e5]">
                <input
                  type="text"
                  id="emailInput"
                  placeholder="First Name"
                  className="outline-none w-full"
                  value={registerDetails.fname}
                  onChange={(e) =>
                    setRegisterDetails({
                      ...registerDetails,
                      fname: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Last Name */}
              <div className="mt-2 flex items-center border border-gray-200 focus-within:border-[#4f46e5] transition-colors duration-300 px-4 py-2 rounded-lg outline outline-transparent focus-within:outline-[#4f46e5]">
                <input
                  type="text"
                  id="emailInput"
                  placeholder="Last Name"
                  className="outline-none w-full"
                  value={registerDetails.lname}
                  onChange={(e) =>
                    setRegisterDetails({
                      ...registerDetails,
                      lname: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

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
                  value={registerDetails.email}
                  onChange={(e) =>
                    setRegisterDetails({
                      ...registerDetails,
                      email: e.target.value,
                    })
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
                {isPasswordHidden ? (
                  <FaEyeSlash
                    className="light-color cursor-pointer"
                    onClick={() => setIsPasswordHidden(false)}
                  />
                ) : (
                  <FaEye
                    className="light-color cursor-pointer"
                    onClick={() => setIsPasswordHidden(true)}
                  />
                )}
                <input
                  type={isPasswordHidden ? "password" : "text"}
                  id="passwordInput"
                  placeholder="Enter your password"
                  className="outline-none"
                  value={registerDetails.password}
                  onChange={(e) =>
                    setRegisterDetails({
                      ...registerDetails,
                      password: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="my-6">
              <label
                htmlFor="passwordInput"
                className="secondary-color font-medium text-sm"
              >
                Confirm Password
              </label>
              <div className="mt-2 flex items-center border border-gray-200 focus-within:border-[#4f46e5] transition-colors duration-300 px-4 py-2 space-x-2 rounded-lg outline outline-transparent focus-within:outline-[#4f46e5]">
                {isConfirmPasswordHidden ? (
                  <FaEyeSlash
                    className="light-color cursor-pointer"
                    onClick={() => setIsConfirmPasswordHidden(false)}
                  />
                ) : (
                  <FaEye
                    className="light-color cursor-pointer"
                    onClick={() => setIsConfirmPasswordHidden(true)}
                  />
                )}
                <input
                  type={isConfirmPasswordHidden ? "password" : "text"}
                  id="passwordInput"
                  placeholder="Enter your password"
                  className="outline-none"
                  value={registerDetails.confirmPassword}
                  onChange={(e) =>
                    setRegisterDetails({
                      ...registerDetails,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="my-6 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="checkInput" required />
                <label htmlFor="checkInput" className="light-color">
                  I agree to the{" "}
                  <span className="text-[#4f46e5] hover:underline">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-[#4f46e5] hover:underline">
                    Privacy Policy
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="text-white py-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] w-full rounded-lg font-medium 
                            shadow-md hover:shadow-lg hover:shadow-[#4f46e5]/50 
                            hover:-translate-y-0.5 
                            transition-all duration-300 ease-in-out cursor-pointer"
            >
              Create Account
            </button>
          </form>

          <hr className="text-gray-300" />

          <div className="space-y-4">
            <p className="light-color text-sm text-center">
              Already have an account ?{" "}
              <Link to="/login" className="font-medium text-[#4f46e5]">
                Login
              </Link>
            </p>
            <p className="light-color text-sm text-center">Or register with</p>
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

export default SignUp;
