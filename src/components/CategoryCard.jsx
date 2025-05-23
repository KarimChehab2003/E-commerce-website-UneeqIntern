import { useNavigate } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";

function CategoryCard({ name, desc, icon }) {

    const { searchByCategoryName } = useSearch();
    const navigate = useNavigate();
    return (
        <div className="group flex flex-col items-center hover:-translate-y-0.5 shadow-md hover:shadow-xl transition-all duration-300 relative bg-white p-12 rounded-xl space-y-6">
            <div className="absolute top-0 left-0 h-1 rounded-t-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            <div className="w-20 h-20  bg-gray-200/50 rounded-full group-hover:bg-[#4f46e5] transition-all group-hover:scale-110 duration-300 flex items-center justify-center">
                <span className="text-[#4f46e5] text-4xl group-hover:text-white transition-colors duration-300">{icon}</span>
            </div>
            <p className="text-2xl font-bold capitalize">{name}</p>
            <p className="light-color text-sm">{desc}</p>
            <button className="texlt-[#4f46e5] capitalize px-4.5 py-2.5 font-medium bg-gray-200/50 rounded-full group-hover:bg-[#4f46e5] group-hover:text-white transition-colors duration-300 cursor-pointer" onClick={() => { navigate("/products"); searchByCategoryName(name) }}>view products</button>
        </div>
    );
}

export default CategoryCard;