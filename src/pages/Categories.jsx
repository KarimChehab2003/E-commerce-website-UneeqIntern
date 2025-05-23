import {
  FaMobileScreen,
  FaShirt,
  FaHouse,
  FaFaceSmile,
  FaFootball,
  FaBookOpen,
  FaGamepad,
  FaHeartPulse,
} from "react-icons/fa6";
import CategoryCard from "../components/CategoryCard";
import { useSearch } from "../contexts/SearchContext";

function Categories() {
  const categories = [
    {
      name: "Electronics",
      desc: "Discover the latest gadgets and tech",
      icon: <FaMobileScreen />,
    },
    {
      name: "Clothing",
      desc: "Trendy fashion for everyone",
      icon: <FaShirt />,
    },
    {
      name: "Home & Living",
      desc: "Everything for your home",
      icon: <FaHouse />,
    },
    {
      name: "Beauty",
      desc: "Skincare and cosmetics",
      icon: <FaFaceSmile />,
    },
    {
      name: "Sports",
      desc: "Sports equipment and gear",
      icon: <FaFootball />,
    },
    {
      name: "Books",
      desc: "Best sellers and new releases",
      icon: <FaBookOpen />,
    },
    {
      name: "Toys & Games",
      desc: "Fun for all ages",
      icon: <FaGamepad />,
    },
    {
      name: "Health",
      desc: "Wellness and healthcare",
      icon: <FaHeartPulse />,
    },
  ];

  return (
    <section className="min-h-screen flex justify-center items-center my-16">
      <div className="space-y-8 text-center">
        <h2 className="text-4xl font-bold capitalize">browse categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
