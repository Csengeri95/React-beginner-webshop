import React, { useContext, useState } from "react";
import { Navigate, useParams } from 'react-router-dom'
import Items from "../components/Items";
import "../styles/Guitars.css"
import { numberFormat } from "../components/NumberFormat"
import { SymbolContext } from "../contexts/SymbolContext";

const guitars = require("../datasources/guitars.json")



export default function Guitars(props) {
    const { slug } = useParams()
    const { symbol, setSymbol } = useContext(SymbolContext)




    const priceAscending = [...guitars].sort((a, b) => a.price - b.price)
    const priceDescending = [...guitars].sort((a, b) => b.price - a.price)
    const nameAscending = [...guitars].sort((a, b) => {
        let x = a.name.toLowerCase()
        let y = b.name.toLowerCase()

        if (x > y) { return 1 };
        if (x < y) { return -1 }
        return 0
    })

    const nameDescending = [...guitars].sort((a, b) => {
        let x = a.name.toLowerCase()
        let y = b.name.toLowerCase()

        if (x > y) { return -1 };
        if (x < y) { return 1 }
        return 0
    })


    const [sort, setSort] = useState(priceAscending)



    let options = [
        {
            label: "Ár szerint növekvő",
            value: "priceAsc",
        },
        {
            label: "Ár szerint csökkenő",
            value: "priceDesc",
        },

        {
            label: "Név szerint növekvő",
            value: "nameAsc",
        },

        {
            label: "Név szerint csökkenő",
            value: "nameDesc",
        },




    ]


    const [selected, setSelected] = useState(options[0].value)



    function handleChange(event) {

        setSelected(event.target.value)

        if (event.target.value === "priceAsc") {
            setSort(priceAscending)
        }

        if (event.target.value === "priceDesc") {
            setSort(priceDescending)
        }

        if (event.target.value === "nameAsc") {
            setSort(nameAscending)
        }

        if (event.target.value === "nameDesc") {
            setSort(nameDescending)
        }

    }






    if (slug) {
        let selectedGuitar = guitars.filter(e => e.slug === slug)
        if (selectedGuitar.length === 0) {
            <Navigate to="/pageNotFound"></Navigate>
        }

        let selected = selectedGuitar[0]

        return (
            <div className="selected row">
                <div className="col-12 col-xl-6 text-center">
                    <h2>{selected.name}</h2>
                    <img src={selected.img} alt="" className="w-75" />

                </div>
                <div className="col-12 col-xl-6 mt-1 text-center ">

                    <p>A termék ára:<span className="highlight"> {numberFormat(Math.round((selected.price) * 100) / 100)}</span> {symbol}</p>
                    <h4>Jellemzői:</h4>


                    <table className="text-center">

                        <tr >
                            <td>Neve:</td>
                            <td>{selected.name}</td>
                        </tr>

                        <tr>
                            <td>Hangszedő:</td>
                            <td>{selected.pickup}</td>
                        </tr>

                        <tr>
                            <td>Test:</td>
                            <td>{selected.body}</td>
                        </tr>

                        <tr>
                            <td>Nyak:</td>
                            <td>{selected.neck}</td>
                        </tr>

                        <tr>
                            <td>Bundok:</td>
                            <td>{selected.bund}</td>
                        </tr>

                        <tr>
                            <td>Színe:</td>
                            <td>{selected.color}</td>
                        </tr>


                    </table>
                </div>

            </div>
        )
    }



    return (
        <div className="Guitars">
            <div className="row">

                <div className="select">
                    <select value={selected} onChange={handleChange} >
                        {options.map((map, index) => (
                            <option key={index} value={map.value}  >{map.label}</option>
                        ))}
                    </select>


                </div>


                <div className="guitar-holder">
                    {sort.filter(a => a.status === true).map((guitar, index) => <Items key={index} guitar={guitar} />)}
                </div>

            </div>
        </div>
    )
}