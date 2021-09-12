import React from 'react'
import ProductCard from './ProductCard';

export default function ProductListing({productsList}) {
    return (
        <div className="product-list containerMid mt8 mb8 displayGrid gridCols1 md:gridCols4 gridGap4">
            {
                productsList.map(product => {
                    return(
                        <ProductCard key={product._id} product={product} />
                    )
                })
            }
        </div>
    )
}