import { useEffect, useMemo, useState } from "react";
import Categories from "./Categories";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../contexts/SearchContext";

function Products() {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: 0,
    rating: null,
  });

  const products = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: 349.99,
      rating: 4.7,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format"
    },
    {
      id: "2",
      name: "4K Smart TV (55 inch)",
      category: "Electronics",
      price: 699.99,
      rating: 4.8,
      reviews: 1245,
      image: "https://images.unsplash.com/photo-1546539782-6fc531453083?w=500&auto=format"
    },

    // Clothing
    {
      id: "3",
      name: "Designer Denim Jacket",
      category: "Clothing",
      price: 199.99,
      rating: 4.5,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format"
    },
    {
      id: "4",
      name: "Premium Cotton T-Shirt Pack",
      category: "Clothing",
      price: 49.99,
      rating: 4.3,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format"
    },

    // Home & Living
    {
      id: "5",
      name: "Modern Sofa Set",
      category: "Home & Living",
      price: 899.99,
      rating: 4.6,
      reviews: 432,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format"
    },
    {
      id: "6",
      name: "Ceramic Dinnerware Set",
      category: "Home & Living",
      price: 79.99,
      rating: 4.4,
      reviews: 289,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format"
    },

    // Beauty
    {
      id: "7",
      name: "Luxury Skincare Set",
      category: "Beauty",
      price: 129.99,
      rating: 4.7,
      reviews: 876,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format"
    },
    {
      id: "8",
      name: "Professional Makeup Kit",
      category: "Beauty",
      price: 89.99,
      rating: 4.5,
      reviews: 654,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format"
    },

    // Sports
    {
      id: "9",
      name: "Professional Yoga Mat",
      category: "Sports",
      price: 59.99,
      rating: 4.6,
      reviews: 765,
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format"
    },
    {
      id: "10",
      name: "Adjustable Dumbbell Set",
      category: "Sports",
      price: 149.99,
      rating: 4.8,
      reviews: 932,
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format"
    },

    // Books
    {
      id: "11",
      name: "Bestselling Novel Collection",
      category: "Books",
      price: 39.99,
      rating: 4.7,
      reviews: 1243,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format"
    },
    {
      id: "12",
      name: "Coffee Table Photography Book",
      category: "Books",
      price: 49.99,
      rating: 4.5,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format"
    },

    // Toys & Games
    {
      id: "13",
      name: "Educational Building Blocks",
      category: "Toys & Games",
      price: 34.99,
      rating: 4.6,
      reviews: 876,
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&auto=format"
    },
    {
      id: "14",
      name: "Family Board Game Collection",
      category: "Toys & Games",
      price: 59.99,
      rating: 4.8,
      reviews: 987,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format"
    },

    // Health
    {
      id: "15",
      name: "Smart Blood Pressure Monitor",
      category: "Health",
      price: 79.99,
      rating: 4.5,
      reviews: 654,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format"
    },
    {
      id: "16",
      name: "Air Purifier with HEPA Filter",
      category: "Health",
      price: 199.99,
      rating: 4.7,
      reviews: 876,
      image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=500&auto=format"
    }
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  const { queryByProductName, queryByCategoryName, searchByName, searchByCategoryName } = useSearch();

  const [noProductsFound, setNoProductsFound] = useState(false);

  // Getting all unique categories
  const availableCategories = useMemo(() => {
    const categories = new Set(products.map(product => product.category));
    return Array.from(categories).sort();
  }, products);

  const handleCategoriesFilter = (e) => {
    const category = e.target.value;
    setFilters((prevFilters) => {
      const isCategorySelected = prevFilters.categories.includes(category);
      const isChecked = e.target.checked;

      if (isChecked && !isCategorySelected) {
        return {
          ...prevFilters,
          categories: [...prevFilters.categories, category],
        };
      } else if (!isChecked && isCategorySelected) {
        return {
          ...prevFilters,
          categories: prevFilters.categories.filter((cat) => cat !== category),
        };
      } else return prevFilters;
    });
  };

  const applyFilters = () => {
    let filtered = [...products];

    // Product Name
    if (queryByProductName) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(queryByProductName.toLowerCase()));
    }

    // Category filter - Checkboxes
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Category Filter - By Name
    if (queryByCategoryName) {
      filtered = filtered.filter(product => product.category.toLowerCase().includes(queryByCategoryName.toLowerCase()));
    }

    // Price Range filter
    if (filters.priceRange > 0) {
      filtered = filtered.filter(
        (product) => product.price <= Number(filters.priceRange)
      );
    }

    // Rating filter
    if (filters.rating) {
      filtered = filtered.filter(
        (product) => product.rating >= Number(filters.rating)
      );
    }

    setFilteredProducts(filtered);
    setNoProductsFound(filtered.length === 0)
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRange: 0,
      rating: null,
    });
    searchByName('');
    searchByCategoryName('');
  }

  useEffect(() => {
    applyFilters();
  }, [filters, queryByProductName, queryByCategoryName]);

  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-center space-y-4  my-16">
      <aside className="flex flex-col self-start bg-white p-8 shadow-md rounded-lg w-72 space-y-4 mx-auto md:mx-4">
        <h2 className="text-2xl font-bold capitalize">filters</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <p className="text-lg font-medium">Categories</p>
            <ul className="space-y-2">
              {
                availableCategories.map((category, index) => (
                  <li key={category} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={`cat-${index}`}
                      className="cursor-pointer"
                      onChange={(e) => handleCategoriesFilter(e)}
                      value={category}
                      checked={filters.categories.includes(category)}
                    />
                    <label
                      htmlFor={`cat-${index}`}
                      className="secondary-color capitalize"
                    >
                      {category}
                    </label>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-lg font-medium">Price Range</p>
            {filters.priceRange ? <p>Selected: ${filters.priceRange}</p> : ""}
            <input
              type="range"
              min={50}
              max={1000}
              step={50}
              className="w-full"
              onChange={(e) =>
                setFilters({ ...filters, priceRange: e.target.value })
              }
            />
            <div className="flex justify-between items-center -mt-2">
              <p className="light-color">$0</p>
              <p className="light-color">$1000</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-lg font-medium">Rating</p>
            <ul>
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="rating"
                  id="radio1"
                  onChange={(e) =>
                    setFilters({ ...filters, rating: e.target.value })
                  }
                  value={4}
                />
                <label htmlFor="radio1">4+ Stars</label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="rating"
                  id="radio2"
                  onChange={(e) =>
                    setFilters({ ...filters, rating: e.target.value })
                  }
                  value={3}
                />
                <label htmlFor="radio2">3+ Stars</label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="rating"
                  id="radio3"
                  onChange={(e) =>
                    setFilters({ ...filters, rating: e.target.value })
                  }
                  value={2}
                />
                <label htmlFor="radio3">2+ Stars</label>
              </li>
            </ul>
          </div>
        </form>

        <button
          type="submit"
          className="bg-[#4f46e5] py-2 px-4 rounded-xl text-white font-medium cursor-pointer"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </aside>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white p-8 rounded-2xl shadow-md items-start md:mx-4">
        {
          noProductsFound ? (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700">
                No products found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-[#4f46e5] text-white rounded hover:bg-blue-600 transition"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          )
        }
      </div>
    </section>
  );
}

export default Products;
