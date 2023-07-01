import "../styles/Contact.css"



export default function Contact(props) {
    return (
        <div className="contact row">
            <div className="col-12 col-xl-5 text-center">
                <h1>Elérhetőségünk</h1>
                <a href="tel:"> <h2> 06-90-444-44-44</h2> </a>
                <a href="mailto:"><h2>csengeriguitar@gmail.com</h2></a>
                <h2>5711, Gyula, Teszt Elek utca 25.</h2>
            </div>

            <iframe className="col-11 col-xl-6 mt-1" style={{ textAlign: "center" }} src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10956.60010912326!2d21.3391588!3d46.6435518!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shu!2shu!4v1671548164822!5m2!1shu!2shu" width="550" height="400"></iframe>



        </div>
    )
}