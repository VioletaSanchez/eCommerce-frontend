import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./pages/home";
import Catalog from "./pages/catalog";
import CatalogAdmin from "./pages/catalog_admin";
import CreateProduct from "./pages/create_product";

const API_URL = "https://ecommerce-backend-wfro.onrender.com/products";

export default class App extends Component {
    state = {
        products: [],
        editingId: null
    };

    componentDidMount() {
        axios
            .get(API_URL)
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(error => {
                console.error("Component mount error", error);
            });
    }

    handleCreateProduct = (newProduct) => {
        if (this.state.editingId !== null) {
            axios
                .put(`${API_URL}/${this.state.editingId}`, newProduct)
                .then(response => {
                    const updatedProducts = this.state.products.map(product =>
                        product.id === this.state.editingId ? response.data : product
                    );
                    this.setState({ products: updatedProducts, editingId: null });
                })
                .catch(error => {
                    console.error("Product edit error", error);
                });
        } else {
            axios
                .post(API_URL, newProduct)
                .then(response => {
                    this.setState({ products: [...this.state.products, response.data] });
                })
                .catch(error => {
                    console.error("Product creation error", error);
                });
        }
    };

    handleEditProduct = (id) => {
        this.setState({ editingId: id });
    };

    onDeleteProduct = (id) => {
        axios
            .delete(`${API_URL}/${id}`)
            .then(() => {
                const updatedProducts = this.state.products.filter(product => product.id !== id);
                this.setState({ products: updatedProducts });
            })
            .catch(error => {
                console.error("Product deletion error", error);
            });
    };

    render() {
        const productToEdit = this.state.editingId !== null ?
        this.state.products.find(product => product.id === this.state.editingId) :
        null;

        return (
            <Router>
                <div className="app">
                    <nav className="navigation" >
                        <Link to="/" >Landing page</Link>
                        <Link to="/catalog" >Go to the catalog</Link>
                    </nav>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        
                        {/* This is the one for everyone*/}
                        <Route
                            path="/catalog"
                            render={(routeProps) => (
                                <Catalog
                                    {...routeProps}
                                    products={this.state.products}
                                    onEditProduct={this.handleEditProduct}
                                    onDeleteProduct={this.onDeleteProduct}
                                />
                            )}
                        />

                        {/* This is the one for admin people*/}
                        <Route
                            path="/catalog_admin"
                            render={(routeProps) => (
                                <CatalogAdmin
                                    {...routeProps}
                                    products={this.state.products}
                                    onEditProduct={this.handleEditProduct}
                                    onDeleteProduct={this.onDeleteProduct}
                                />
                            )}
                        />

                        <Route
                            path="/createProduct"
                            render={(routeProps) => (
                                <CreateProduct
                                {...routeProps}
                                onCreateProduct={this.handleCreateProduct}
                                productToEdit={productToEdit}
                                isEditing={this.state.editingId !== null}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}