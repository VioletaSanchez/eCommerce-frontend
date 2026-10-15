import React, { Component } from "react";
import axios from "axios";

const API_URL = ""; //* Gotta paste the url for the backend here when it's deployed **** */

export default class Catalog extends Component {
    state = {
    };

    render() {
        const products = this.props.products || [];

        return (
            <div className="catalog-wrapper">
                <h1>Shop's catalog</h1>
                <div className="catalog">
                    {products.map((product) => (
                        <div className="product-info" key={product.id}> {/* */}
                            <h2>{product.name}</h2>
                            <p>Price: {product.price} €</p>
                            <p>Description: {product.description}</p>
                            <p>Type: {product.type}</p>

                            <button
                                className="disabled-button"
                                disabled
                                aria-label={`Buy ${product.name}`}
                                onClick={() => {
                                    if (this.props.onDeleteProduct) {
                                        this.props.onDeleteProduct(product.id);
                                    }
                                }}
                            >
                                Buy
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}