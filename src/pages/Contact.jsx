import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaPencil,
} from "react-icons/fa6";
import InfoCard from "../components/InfoCard";
import FAQCard from "../components/FAQCard";

function Contact() {
  const contactIcons = [<FaLocationDot />, <FaPhone />, <FaEnvelope />];
  const contactInfo = [
    {
      name: "our location",
      desc: "123 Shopping Street New York, NY 10001",
    },
    {
      name: "phone number",
      desc: "+1 (555) 123-4567 Mon-Fri: 9am-6pm EST",
    },
    {
      name: "email address",
      desc: "support@shopease.com help@shopease.com",
    },
  ];
  const FAQs = [
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Items must be unused and in their original packaging..",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.",
    },
    {
      question: "How can I change my order?",
      answer:
        "Please contact us immediately if you need to change your order. We'll do our best to accommodate your request.",
    },
  ];

  return (
    <section className="min-h-screen flex justify-center items-center my-16">
      <div className="max-w-7xl md:p-8 space-y-18">
        {/* Contact Us */}
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold capitalize">contact us</h2>
          <p className="light-color capitalize text-lg">
            We'd love to hear from you
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8">
          {contactInfo.map((info, index) => (
            <InfoCard {...info} icon={contactIcons[index]} />
          ))}
        </div>

        {/* Send Message */}
        <div className="bg-white shadow-lg rounded-2xl px-4 md:mx-8 md:px-8 py-8">
          <p className="font-bold text-2xl">Send us a Message</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className=""
          >
            {/* Full Name */}
            <div className="my-6">
              <label
                htmlFor="nameInput"
                className="primary-color font-medium text-sm"
              >
                Full Name
              </label>
              <div className="mt-2 flex items-center border border-gray-200 focus-within:border-[#4f46e5] transition-colors duration-300 px-4 py-2 space-x-2 rounded-lg outline outline-transparent focus-within:outline-[#4f46e5]">
                <FaUser className="light-color" />
                <input
                  type="text"
                  id="nameInput"
                  placeholder="Enter your full name"
                  className="outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="my-6">
              <label
                htmlFor="emailInput"
                className="primary-color font-medium text-sm"
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
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="my-6">
              <label
                htmlFor="subjectInput"
                className="primary-color font-medium text-sm"
              >
                Subject
              </label>
              <div className="mt-2 flex items-center border border-gray-200 focus-within:border-[#4f46e5] transition-colors duration-300 px-4 py-2 space-x-2 rounded-lg outline outline-transparent focus-within:outline-[#4f46e5]">
                <FaPencil className="light-color" />
                <input
                  type="text"
                  id="subjectInput"
                  placeholder="Enter your subject"
                  className="outline-none"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="my-6">
              <label
                htmlFor="messageInput"
                className="primary-color font-medium text-sm"
              >
                Message
              </label>
              <div className="mt-2 flex items-center border border-gray-200 focus-within:border-[#4f46e5] transition-colors duration-300 px-4 py-2 space-x-2 rounded-lg outline outline-transparent focus-within:outline-[#4f46e5]">
                <textarea
                  id="messageInput"
                  rows={5}
                  className="outline-none w-full"
                ></textarea>
              </div>
            </div>

            <button
              className="capitalize text-white py-2 px-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-lg font-medium 
                        shadow-sm hover:shadow-md hover:shadow-[#4f46e5]/50 
                            hover:-translate-y-0.5 
                            transition-all duration-300 ease-in-out cursor-pointer"
            >
              send message
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <section className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center capitalize">
            frequently asked questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8">
            {FAQs.map((faq) => (
              <FAQCard {...faq} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Contact;
