import {
  FaCheck,
  FaHandHoldingDollar,
  FaHeart,
  FaShield,
  FaTruck,
} from "react-icons/fa6";
import InfoCard from "../components/InfoCard";

function About() {
  const values = [
    {
      name: "customer first",
      desc: "Your satisfaction is our top priority",
    },
    {
      name: "trust & security",
      desc: "Safe and secure shopping experience",
    },
    {
      name: "fast delivery",
      desc: "Quick and reliable shipping",
    },
    {
      name: "best value",
      desc: "Quality products at great prices",
    },
  ];
  const valuesIcons = [
    <FaHeart />,
    <FaShield />,
    <FaTruck />,
    <FaHandHoldingDollar />,
  ];
  const teamMembers = [
    {
      name: "john doe",
      desc: "Founder & CEO",
    },
    {
      name: "jane smith",
      desc: "Head of Operations",
    },
    {
      name: "mike johnson",
      desc: "Customer Experience Lead",
    },
  ];
  return (
    <section className="min-h-screen h-full flex justify-center items-center my-16">
      <div className="max-w-7xl p-8 space-y-12">
        {/* About ShopEase */}
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold">About ShopEase</h2>
          <p className="light-color capitalize text-lg">
            your trusted shopping destination
          </p>
        </div>

        {/* Our Story */}
        <div className="space-y-6">
          <div className="max-w-fit space-y-2 hover:[&>div]:w-full">
            <p className="text-3xl font-bold capitalize">our story</p>
            <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] h-1 w-2/5 transition-all duration-300"></div>
          </div>
          <p className="secondary-color">
            Founded in 2024, ShopEase was born out of a simple idea: to make
            online shopping easier, more enjoyable, and more accessible for
            everyone. We believe that shopping should be a seamless experience,
            whether you're looking for everyday essentials or special treats.
          </p>
        </div>

        {/* Our Mission */}
        <div className="space-y-6">
          <div className="max-w-fit space-y-2 hover:[&>div]:w-full">
            <p className="text-3xl font-bold capitalize">our mission</p>
            <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] h-1 w-2/5 transition-all duration-300"></div>
          </div>
          <p className="secondary-color">
            At ShopEase, we're committed to providing our customers with:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaCheck className="text-[#4f46e5]" />
              <p className="secondary-color">
                High-quality products at competitive prices
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-[#4f46e5]" />
              <p className="secondary-color">Exceptional customer service</p>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-[#4f46e5]" />
              <p className="secondary-color">
                A secure and user-friendly shopping experience
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-[#4f46e5]" />
              <p className="secondary-color">Fast and reliable delivery</p>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-[#4f46e5]" />
              <p className="secondary-color">Easy returns and exchanges</p>
            </li>
          </ul>
        </div>

        {/* Our Values */}
        <div className="space-y-6">
          <div className="max-w-fit space-y-2 hover:[&>div]:w-full">
            <p className="text-3xl font-bold capitalize">our values</p>
            <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] h-1 w-2/5 transition-all duration-300"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {values.map((value, index) => (
              <InfoCard {...value} icon={valuesIcons[index]} />
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="space-y-6">
          <div className="max-w-fit space-y-2 hover:[&>div]:w-full">
            <p className="text-3xl font-bold capitalize">our team</p>
            <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] h-1 w-2/5 transition-all duration-300"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <InfoCard {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
