import { useContext } from "react";

import { useLocation } from "react-router-dom";

import {PostsContext} from '../../context/post-context';
import './Post.css';

const Post = () => {
    const { pathname } = useLocation()
    const { getPostByIndex } = useContext(PostsContext) ;

    const parts =  pathname.split('/')
    const postIndex = parts[parts.length - 1];
    const post = getPostByIndex(postIndex);
    console.log('post: ', post);

    if (post === undefined) {
        return <h1> Loading... </h1>
    }

    return (
        <div className="postRoot">
            <h1 className="title">{post.title}</h1>
            <img src={post.imageUrl} alt="Post" />
            <p>{post.description}</p>
            <div className="expertComment">
                <h5>Expert comment</h5>
                <p>{post.expertComment}</p>
            </div>
        </div>
    );
}
 
export default Post;