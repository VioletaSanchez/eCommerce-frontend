import React, { Component } from "react";

export default class CreateProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            price: "",
            description: "",
            type: "",
            loadedProductId: null
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.productToEdit && props.productToEdit.id !== state.loadedProductId) {
            return {
                name: props.productToEdit.name,
                price: props.productToEdit.price,
                description: props.productToEdit.description,
                type: props.productToEdit.type,
                loadedProductId: props.productToEdit.id
            };
        }
        return null;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.name.trim() === "") {
            alert("NAme cannot be empty");
            return;
        }

        if (this.props.onCreateProduct) {
            this.props.onCreateProduct(this.state);
        }

        this.setState({
            name: "",
            price: "",
            description: "Default description",
            type: "",
            loadedProductId: null
        });
    };

    render() {
        return (
            <div className="create-product">
                <h1>{this.props.isEditing ? "Edit product" : "Create product"}</h1>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="product-name">Name</label>
                    <input
                        id="product-name"
                        type="text"
                        placeholder="Product's name"
                        value={this.state.name}
                        onChange={(event) =>
                            this.setState({ name: event.target.value })
                        }
                        required
                    />
                </div>

                <div>
                    <label htmlFor="product-price">Price</label>
                    <input
                        id="product-price"
                        type="text"
                        placeholder="Product's price"
                        value={this.state.price}
                        onChange={(event) =>
                            this.setState({ price: event.target.value })
                        }
                        required
                    />
                </div>

                <div>
                    <label htmlFor="product-description">Description</label>
                    <input
                        id="product-description"
                        type="text"
                        placeholder="Product's description"
                        value={this.state.description}
                        onChange={(event) =>
                            this.setState({ description: event.target.value })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="product-type">type</label>
                    <select
                        id="product-type"
                        value={this.state.type}
                        onChange={(event) =>
                            this.setState({ type: event.target.value })
                        }
                    >
                        <option value="Tshirt">Tshirt</option>
                        <option value="Pants">Pants</option>
                        <option value="Hoodies">Hoodies</option>
                        <option value="Shoes">Shoes</option>
                    </select>
                </div>

                <button type="submit">
                    {this.props.isEditing ? "Save" : "Create product"}
                </button>
                </form>
            </div>
        );
    }
}
