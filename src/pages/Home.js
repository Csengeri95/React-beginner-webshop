import "../styles/Home.css"
import Slider from "../components/Slider"

export default function Home(props) {


    return (
        <div className="Home">
            <div className="row">
                <div className="introduction col-12 text-center">
                    <h1> Szeretettel üdvözlöm a Csengeri Gitárszaküzlet weboldalán! </h1>

                    <p>Cégünk minőségi gitárok forgalmazásával foglalkozik ötödik esztendeje, töretlen lelkesedéssel!</p>
                    <p>Portfóliónkban a világ legnépszerűbb gitár márkái között válogathat, a minőségért garanciát vállalunk!</p>

                </div>

                <div className="col-12 mb-1">
                    <div className="images">
                    </div>
                </div>


                <div className="col-12 mt-1 mb-1 text-center">
                    <Slider />
                </div>


            </div>
        </div>
    )
}