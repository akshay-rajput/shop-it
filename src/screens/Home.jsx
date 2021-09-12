import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductListing from "../features/products/ProductListing";

export default function Home() {
    const allProducts = useSelector((state)=> state.productList.products);

    return (
        <div>
            <ProductListing productsList={allProducts} />
        </div>
    )
}
