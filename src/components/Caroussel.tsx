import React, { useState } from "react";
import {Carousel} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";


export const CarouselMod = () => {

    /** stokcage image renvoie vers comp
     * const image = require("./assets/cat.jpg").default;
export default class testComponent extends Component {
  render() {
    return (
      <div>
        <img src={image} />
      </div>
    );
  }
}
     */

    return (

<Carousel>
  <Carousel.Item className="slide" interval={2000}>
<<<<<<< HEAD
  <Link to={("/concert")}><img className="d-block w-60" src="../images/958-orelsan.jpg" alt="First slide" /> </Link>
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slide" interval={2000}>
   <Link to={("/concert")}><img className="d-block w-60" src="../images/car_ic_musica-ete_dizier2022.jpg" alt="Second slide"/></Link>
    <Carousel.Caption>

    </Carousel.Caption>
=======
  <Link to={("/concert/pop")}><img className="d-block w-60" src="../images/pop1.png" alt="First slide" /> </Link>
  </Carousel.Item>
  <Carousel.Item className="slide" interval={2000}>
   <Link to={("/concert/electro")}><img className="d-block w-60" src="../images/electro1.png" alt="Second slide"/></Link>  
>>>>>>> c74cb3b366dcbfe6c773a6ad33d351b42a8b25ef
  </Carousel.Item>
  <Carousel.Item className="slide" interval={2000}>
  <Link to={("/concert/urbain")}> <img
      className="d-block w-60"
      src="../images/urba.png"
      alt="Third slide"
    /> </Link>
<<<<<<< HEAD
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slide" interval={2000}>
  <Link to={("/concert")}><img
      className="d-block w-60"
      src="../images/car_ic_tiken_jah_fakoli_avril_2022_new.jpg"
      alt="Third slide"
    /> </Link>
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slide" interval={2000}>
  <Link to={("/concert")}><img className="d-block w-60" src="../images/car_ic_zucchero_tour_2022.jpg"
      alt="Third slide"
    /> </Link>
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slide" interval={2000}>
  <Link to={("/concert")}> <img className="d-block w-60" src="../images/958-the-rabeats.jpg" alt="Third slide" /> </Link>
    <Carousel.Caption>

    </Carousel.Caption>
=======
  </Carousel.Item>
  <Carousel.Item className="slide" interval={2000}>
  <Link to={("/concert/classique")}><img className="d-block w-60" src="../images/classique1.png"
      alt="Forth slide"
    /> </Link>
  </Carousel.Item>
  <Carousel.Item className="slide" interval={2000}>
  <Link to={("/concert/hardrock")}> <img className="d-block w-60" src="../images/hard1.png" alt="Fifth slide" /> </Link>
>>>>>>> c74cb3b366dcbfe6c773a6ad33d351b42a8b25ef
  </Carousel.Item>
</Carousel>
        );
    }

    export default CarouselMod;