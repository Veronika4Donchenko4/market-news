import { createContext, useState } from "react";

export const PostsContext = createContext();

export const GlobalContext = ({children}) => {
    const [posts, setPosts] = useState([]);

    const addPostsFromApi = (postsFromApi) => setPosts(postsFromApi)

    const getPostByIndex = (index) => posts[index];

    return <PostsContext.Provider value={{posts, addPostsFromApi, getPostByIndex}}>
        {children}
    </PostsContext.Provider>
}
