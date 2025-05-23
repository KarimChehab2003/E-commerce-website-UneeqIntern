import {
  FaMobileScreen,
  FaShirt,
  FaHouse,
  FaFaceSmile,
  FaTruck,
  FaShield,
  FaArrowRotateLeft,
  FaHeadset,
} from "react-icons/fa6";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import InfoCard from "../components/InfoCard";

function Home() {
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
  ];

  const products = [
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      category: "electronics",
      price: 99.99,
      rating: 4.5,
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
    },
    {
      id: "2",
      name: "Organic Cotton T-Shirt",
      category: "clothing",
      price: 24.99,
      rating: 4.2,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
    },
    {
      id: "3",
      name: "Stainless Steel Water Bottle",
      category: "home",
      price: 19.99,
      rating: 4.7,
      reviews: 215,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format",
    },
    {
      id: "4",
      name: "Smart Fitness Watch",
      category: "electronics",
      price: 129.99,
      rating: 4.4,
      reviews: 342,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format",
    },
  ];

  const values = [
    {
      name: "Fast Delivery",
      desc: "Quick and reliable shipping to your doorstep",
      icon: <FaTruck />,
    },
    {
      name: "Secure Shopping",
      desc: "Safe and protected transactions",
      icon: <FaShield />,
    },
    {
      name: "Easy Returns",
      desc: "Hassle-free return policy",
      icon: <FaArrowRotateLeft />,
    },
    {
      name: "24/7 Support",
      desc: "Always here to help you",
      icon: <FaHeadset />,
    },
  ];
  return (
    <main className="space-y-24">
      {/* Hero */}
      <section className="hero relative h-[400px]">
        <div className="absolute top-0 left-0 w-full h-full text-white bg-gradient-to-r from-[#4F46E5]/85 to-[#7C3AED]/85 flex flex-col justify-center items-center z-10">
          <div className="text-center max-w-3xl space-y-12 my-1 px-4">
            <h1 className="text-4xl md:text-6xl font-semibold text-shadow-lg">
              Welcome to ShopEase
            </h1>
            <p className="text-md md:text-lg">
              Your one-stop destination for all your shopping needs. Discover
              amazing products at unbeatable prices.
            </p>
            <button className="text-md md:text-xl bg-white text-[#4f46e5] font-semibold px-8 py-3 rounded-full capitalize shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              shop now
            </button>
          </div>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="flex justify-center items-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold capitalize mb-16">
            shop by category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-8 ">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="flex justify-center items-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-semibold capitalize mb-16 text-center">
            feautred products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ShopEase? */}
      <section className="flex justify-center items-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl font-semibold capitalize mb-16">
            why choose shopEase?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-8">
            {values.map((value, index) => (
              <InfoCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Newsletter */}
      <section className="text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex flex-col justify-center items-center">
        <div className="my-18 mx-8 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm">
            Stay updated with our latest products and offers
          </p>
          <div className="flex justify-center items-center space-x-2 sm:space-x-4 ">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-3 bg-white outline-none text-black rounded-full border border-transparent focus:border-[#4f46e5] transition-all duration-300 w-full flex "
            />
            <button className="text-[#7C3AED] bg-white rounded-full px-4 py-3 capitalize shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 cursor-pointer">
              subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
