import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"
import "../styles/Cart.css"
import { numberFormat } from "../components/NumberFormat";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"



export default function Cart(props) {

    const { cart, setCart } = useContext(CartContext)
    const [open, setOpen] = useState(false)


    function remove(index) {
        let newCart = cart.filter(a => true)
        newCart.splice(index, 1)
        setCart(newCart)
        setOpen(false)
    }

    return (


        <div className="Cart row">




            {cart.length === 0 && <div className="col-12 text-center">
                <h1>A kosár jelenleg üres a <Link to="/guitars">gitárokhoz!</Link></h1>
            </div>}

            {cart.length !== 0 &&
                <div>
                    <div className="col-12 text-center">
                        <h2>A kosár tartalma</h2>
                    </div>




                    <div className="holder col-12">

                        {cart.map((map, index) => {
                            return (
                                <div key={index} className="card col-11 mt-1">
                                    <div className="card-left" style={{ backgroundImage: `url(${map.img})` }}>


                                    </div>
                                    <div className="card-right">
                                        <h5>A termék neve: {map.name}</h5>
                                        <h5>A termék ára: {numberFormat(map.price * map.quantity)} {map.symbol.symbol}</h5>
                                        <h5>Kiválasztott mennyiség: {map.quantity}</h5>
                                        <button className="mb-1" onClick={() => setOpen(true)} >Törlés</button>
                                    </div>

                                    <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dialog-title">
                                        <DialogTitle id="dialog-title" style={{ textAlign: "center", color: "#e74c3c", }} >Biztosan törölni szeretné az adott tételt?</DialogTitle>
                                        <DialogActions style={{ margin: "0 auto" }}>
                                            <Button variant="outlined" onClick={() => setOpen(false)}>Mégse</Button>
                                            <Button variant="outlined" color="error" autoFocus style={{ color: "#e74c3c" }} onClick={() => remove(index)} >Törlés</Button>
                                        </DialogActions>

                                    </Dialog>

                                </div>
                            )

                        })}


                        <h2 colSpan={4} align="center">Összesen: <span style={{ color: `rgba(255, 0, 0, 0.8)` }}>{numberFormat(cart.map(a => (a.price * a.quantity)).reduce((a, c) => a + c, 0))} {cart.map(a => a.symbol.symbol)[0]}</span></h2>

                    </div>


                </div>
            }




        </div>
    )


}