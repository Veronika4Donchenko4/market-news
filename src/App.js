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
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(posts => addPostsFromApi(posts))
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
