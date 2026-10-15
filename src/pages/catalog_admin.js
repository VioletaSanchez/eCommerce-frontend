import React, { Component } from "react";
import axios from "axios";

const API_URL = ""; //* Gotta paste the url for the backend here when it's deployed **** */

export default class CatalogAdmin extends Component {
    state = {
    };

    render() {
        const products = this.props.products || [];

        return (
            <div className="catalog-wrapper">
                <h1>ADMINISTRATION: Shop's catalog</h1>
                <button onClick={() => this.props.history.push("/createProduct")}>
                        Make new product
                    </button>
                <div className="catalog">
                    {products.map((product) => (
                        <div className="product-info" key={product.id}> {/* */}
                            <h2>{product.name}</h2>
                            <p>Price: {product.price} €</p>
                            <p>Description: {product.description}</p>
                            <p>Type: {product.type}</p>
                            
                            <button
                                aria-label={`Edit ${product.name}`}
                                onClick={() => {
                                    if (this.props.onEditProduct) {
                                        this.props.onEditProduct(product.id);
                                    }
                                    this.props.history.push("/createProduct");
                                }}
                            >
                                Edit
                            </button>

                            <button
                                aria-label={`Delete ${product.name}`}
                                onClick={() => {
                                    if (this.props.onDeleteProduct) {
                                        this.props.onDeleteProduct(product.id);
                                    }
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}