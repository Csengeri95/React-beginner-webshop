import "../styles/Footer.css"


const config = require("../../package.json")

export default function Footer(props) {
    return (
        <div className="Footer row">
            <div className="col-12 text-center">
                <p>Minden jog fenntartva &copy; {config.year} </p>
                <p>Készítő: {config.creator} </p>
            </div>
        </div>
    )
}