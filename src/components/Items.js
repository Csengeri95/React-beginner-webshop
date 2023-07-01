import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { numberFormat } from "./NumberFormat";
import { SymbolContext } from "../contexts/SymbolContext";
import { Snackbar, Alert } from "@mui/material"

export default function Items({ guitar }) {

    const navigate = useNavigate();
    const { cart, setCart } = useContext(CartContext)
    const [count, setCount] = useState(1);
    const { symbol, setSymbol } = useContext(SymbolContext)
    const [open, setOpen] = useState(false)


    let formatted = (numberFormat(Math.round(guitar.price * 100) / 100))





    function addToCart() {
        const elementsInCart = cart.filter(a => true)
        elementsInCart.push({
            name: guitar.name,
            img: guitar.img,
            price: Math.round(guitar.price * 100) / 100,
            quantity: count,
            symbol: { symbol }

        })

        setCart(elementsInCart)
        setOpen(true)




    }

    function inc() {
        setCount(count + 1);
    }

    function dec() {
        if (count > 1) {
            setCount(count - 1)
        }

    }

    function handleClose(event, reason) {
        if (reason === "clickaway") {
            return
        }

        setOpen(false)
    }


    return (

        <div className="Products col-12 text-center">
            <Snackbar
                autoHideDuration={3000}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
            >
                <Alert severity="success" style={{ fontSize: "1.3rem", color: "#000" }}>
                    A terméket sikeresen a kosárba tette!
                </Alert>

            </Snackbar>

            <h4 onClick={() => navigate("/guitars/" + guitar.slug)}>{guitar.name}</h4>
            <img style={{ borderRadius: "10px" }} src={guitar.img} alt="guitar" className="w-50" onClick={() => navigate("/guitars/" + guitar.slug)} />
            <p>{(formatted)} {symbol}</p>

            <button className="btn mt-1" onClick={() => addToCart()} >Kosárba</button>
            <div className="mt-1">
                <form>
                    <button style={{ cursor: "pointer" }} type="button" onClick={() => dec()}>-</button>
                    <input style={{ textAlign: "center" }} name="quantity" min={1} className="w-10 text-center mb-1"  value={count} onChange={event => setCount(event.target.value)} />
                    <button style={{ cursor: "pointer" }} type="button" onClick={() => inc()}>+</button>
                </form>
            </div>


        </div>



    )
}