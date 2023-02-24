import React from 'react';
import ProductFilter from '../filter-pages/ProductFilter';

const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 30 },
];

export default function Main() {
    return (
        <div>
            {products.map((product) => (
                <ProductFilter key={product.id} product={product} />
            ))}
        </div>
    )
}
