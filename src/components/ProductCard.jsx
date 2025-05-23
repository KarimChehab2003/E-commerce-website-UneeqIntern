import { FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { useCart } from "../contexts/CartContext";

function ProductCard({ id, name, category, price, rating, image, reviews }) {
    const { addToCart } = useCart();

    const handleStarPrinting = (rating) => {
        const isHalfStar = rating % 1 >= 0.5 ? true : false;
        const flooredRating = Math.floor(rating);
        let stars = [];

        // Full stars
        for (let i = 0; i < flooredRating; i++) {
            stars.push(<FaStar key={`full-${i}`} className="text-[#fdcb6e] text-lg" />);
        }

        // Half stars
        isHalfStar ? stars.push(<FaRegStarHalfStroke key={"half"} className="text-[#fdcb6e] text-lg" />) : null

        // Empty stars
        for (let i = stars.length; i < 5; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="text-[#fdcb6e] text-lg" />)
        }
        return stars;
    }


    return (
        <div className="max-w-xs rounded-2xl shadow-md group hover:-translate-y-1 transition-all hover:shadow-xl duration-300 self-start h-full">
            <div className="relative " >
                <img src={image} alt={"picture of " + name} className="w-full h-48 rounded-t-2xl object-cover" />
                <div className="w-full flex items-center justify-center absolute bottom-0">
                    <button className="w-full mx-12 py-2.5 px-4 mb-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg font-medium cursor-pointer hover:-translate-y-0.5 transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100"
                        onClick={() => addToCart({
                            name, image, id, price
                        })}>Add to Cart</button>
                </div>
            </div>

            {/* // Products Grid */}
            <div className="p-8 space-y-2 rounded-b-2xl">
                <p className="capitalize font-light">{category}</p>
                <p className="capitalize font-semibold text-xl">{name}</p>
                <div className="flex items-center space-x-2">
                    {
                        handleStarPrinting(rating)
                    }
                    <span className="text-sm light-color">({reviews})</span>
                </div>
                <p className="text-2xl font-bold text-[#4f46e5]">${price}</p>
            </div>
        </div>
    );
}

export default ProductCard;