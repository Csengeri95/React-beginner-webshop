import { Route, Routes, useLocation } from "react-router-dom"
import Guitars from "../pages/Guitars"


export default function Content({ routes }) {


    const location = useLocation();
    return (


        <Routes location={location} key={location.pathname} >
            {routes.map(route => (
                <Route key={route.path} path={route.path} element={route.element}  />
            ))}
            <Route path="/guitars/:slug" element={<Guitars />} ></Route>
        </Routes>
    )


}