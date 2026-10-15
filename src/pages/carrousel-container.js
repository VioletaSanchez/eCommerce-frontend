import React, { Component } from "react";
import Carrousel from "./carrousel";

import carrouselImage1 from "../../static/assets/carrousel/image_1.jpg"
import carrouselImage2 from "../../static/assets/carrousel/image_2.jpg"
import carrouselImage3 from "../../static/assets/carrousel/image_3.png"
import carrouselImage4 from "../../static/assets/carrousel/image_4.jpg"
import carrouselImage5 from "../../static/assets/carrousel/image_5.jpg"
import carrouselImage6 from "../../static/assets/carrousel/image_6.jpg"
import carrouselImage7 from "../../static/assets/carrousel/image_7.jpg"

export default class CarrouselContainer extends Component {
    render() {
        const slides = [
            {url: carrouselImage1, title: "Clothes"},
            {url: carrouselImage2, title: "Clothes"},
            {url: carrouselImage3, title: "Clothes"},
            {url: carrouselImage4, title: "Clothes"},
            {url: carrouselImage5, title: "Clothes"},
            {url: carrouselImage6, title: "Clothes"},
            {url: carrouselImage7, title: "Clothes"}
        ];

        return (
            <div className="carrousel-wrapper">
                <Carrousel slides={slides} />
            </div>
        );
    }
}