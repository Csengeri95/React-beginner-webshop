import "../styles/Header.css"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"
import { useContext } from "react";

export default function Header({ menu }) {
    const location = useLocation();

    return (
        <div className="Header row p-2">

            <div className="col-12 col-xl-2 col-xxl-1" ><Logo /></div>
            <div className="menu col-12 col-xl-10 col-xxl-11 mt-1" >
                {menu.filter(a=>a.menubar===true).map((element, index) => {
                    let classes = ""
                    if (element.path === location.pathname) {
                        classes += "active"
                    }
                    return (
                        <div className={classes} key={index}>
                            <Link to={element.path} >{element.name}</Link>




                        </div>


                    )
                })}


            </div>
        </div>
    )
}