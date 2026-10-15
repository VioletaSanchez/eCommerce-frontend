import React, { Component } from "react";
import { Link } from "react-router-dom";

import CarrouselContainer from "./carrousel-container";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>eCommerce platform</h1>
                <p>Our mission as an eCommerce platform is to highlight the natural beauty of each and every one of our clients.</p>
                <p>We always try to make people feel comfortable and happy by allowing them to show their perfect look to the world.</p>
                
                <CarrouselContainer />

                <Link to="/catalog" className="home-button">✨ Start shopping ✨</Link>
            </div>
        );
    }
}