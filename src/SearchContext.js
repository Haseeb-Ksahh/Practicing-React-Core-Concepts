import { createContext, useState } from "react";

export const SearchContext = createContext()

export const SearchContextProvider = ({children}) => {

    const [searchText , setRestaurants] = useState('');

    const handleSearch = (text) => {
        setRestaurants(text)
    }

    return(
        <SearchContext.Provider value={{searchText , handleSearch}}>
            {children}
        </SearchContext.Provider>
    )
}