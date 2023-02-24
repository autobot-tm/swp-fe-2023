import ProductAPI from "./ProductAPI";
import React, { Component } from 'react'
import ProductFilter from "../components/customer-pages/filter-pages/ProductFilter";

const main = async () => {
    try {
        const response = await ProductAPI.getAll();
        console.log(response);
    } catch (error) {
        console.log('Failed to fetch list:', error);
    }
}



class ResponseAPI extends Component {
    constructor() {
        super();
        this.state = {
            list: main()
        }
    }
    render() {
        return (
            <>
                <ProductFilter list/>
            </>
        );
    }
}

export default ResponseAPI