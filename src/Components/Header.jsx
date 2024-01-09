import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <nav className="w-screen h-20 bg-blue-200">
            <ul className="w-full h-full flex justify-center items-center gap-9">
                <NavLink to="/" className={({isActive})=>(isActive?"text-orange-500":"text-slate-600")}>
                    Home
                </NavLink>
                <NavLink to="/login"  className={({isActive})=>(isActive?"text-orange-500":"text-slate-600")}>
                    Login
                </NavLink>
                <NavLink to="/signup"  className={({isActive})=>(isActive?"text-orange-500":"text-slate-600")}>
                    signup
                </NavLink>
            </ul>
        </nav>
    );
}

export default Header;