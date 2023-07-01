import React from "react"
import "../styles/Logo.css"
import Image from "../images/logo.jpg"
import { Link } from "react-router-dom"


export default function Logo(props) {
    return (
        <div className="Logo">

            <Link to="/"><img src={Image} className="w-25" /></Link>
        </div>
    )
}