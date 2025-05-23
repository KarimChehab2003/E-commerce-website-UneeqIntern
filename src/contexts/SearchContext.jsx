import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [queryByProductName, setQueryByProductName] = useState('')
    const [queryByCategoryName, setQueryByCategoryName] = useState('')

    const searchByName = (productName) => {
        setQueryByProductName(productName)
    }

    const searchByCategoryName = (categoryName) => {
        setQueryByCategoryName(categoryName);
    }


    return <SearchContext.Provider value={{ queryByProductName, queryByCategoryName, searchByName, searchByCategoryName }}>{children}</SearchContext.Provider>
}

export const useSearch = () => useContext(SearchContext);