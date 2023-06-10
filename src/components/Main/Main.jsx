import { useContext } from "react";
import { Link } from "react-router-dom";
import {PostsContext} from '../../context/post-context'
import './Main.css';

const Main = () => {
    const { posts } = useContext(PostsContext);


    return ( <div className="mainRoot">
        <ul className="list">
            {posts?.map((item, index) => (
                <li className="article-item">
                        <img src={item.imageUrl} alt="Post imag" />
                    <Link to={`/post/${index}`}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div> );
}
 
export default Main;