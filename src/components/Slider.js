import { useEffect, useState } from "react"
import opinions from "../datasources/options2"

import "../styles/Slider.css"

export default function Slider(props) {
  const [people] = useState(opinions);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  });

  return (
    <div className="opinions col-12">
      <h1>Vélemények</h1>
      <div className="opinions-center col-12">
        {people.map((item, indexPeople) => {
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <div className="col-12" key={item.id}>
              <article className={position} >
                <img src={item.img} alt={item.name} className="person-img" />
                <h4 className="name">{item.name}</h4>
                <p className="job">{item.job}</p>
                <p className="text">{item.text}</p>
              </article>
            </div>
          );
        })}
      </div>



    </div>
  );
}
