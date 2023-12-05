import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// Step1
export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null);

    // Data Filling
    async function fetchBlogPosts(page = 1) {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data)
            setPage(data?.page);
            setPosts(data?.posts);
            setTotalPages(data?.totalPages);
        }
        catch (e) {
            console.log("Error in fetch Data")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }


    function handlerPageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }


    const value = { //!value 1 object darsha raha hai jaha per sara ka sara requide data hai{jo data creat kiye wahi hai}
        posts,
        setPosts,   
        page,             //! is puri value ko context bolte hai
        setPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        handlerPageChange,
        fetchBlogPosts
    };
    
    // Step2
    return <AppContext.Provider value={value}>  //!ya pura syntex same name change ho sakte hai 
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;