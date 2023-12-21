import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (  
        <>
        <header>
        <div className="logo">
            <Link className="navbar" to= '/'>
                <span >
                    Market.
                </span>
                <span>com</span>
            </Link>
        </div>
        </header>  
        <Outlet/>
    </>)
}
 
export default Header;