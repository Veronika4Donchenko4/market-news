import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Post from "./components/Post/Post";
import { useContext, useEffect } from "react";
import {PostsContext} from './context/post-context';
import './App.css';

const App = () => {
  const { addPostsFromApi } = useContext(PostsContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid content type, expecting JSON");
        }

        const posts = await response.json();
        addPostsFromApi(posts);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [addPostsFromApi]);

  return (
   <div className="app"> 
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Main />}/>
        <Route path="/post/:id" element={<Post />}/>
          </Route>
    </Routes>
   </div>
  )
}

export default App;
