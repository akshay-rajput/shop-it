import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';

export default function ProductCard({product}) {
    const {cartItems} = useSelector((state)=> state.cart);
    const dispatch = useDispatch();

    function addProductToCart(){
        console.log("adding..", product._id);
        
        let updatedItem = {...product};
        updatedItem.quantity = 1;

        dispatch(addToCart(updatedItem));
    }

    // function saveProduct(){
    //     console.log("save..")
    // }

    function checkExistanceInArray(array, id){
        // returns true or false
        return !!array.find((item) => item._id === id);
    };

    return (
        <div className="displayFlex flexCol rounded border borderGray3 shadowMdGray1 mb4 p2">
            <h3 className="textGray5 fontMedium mb2">{product.name}</h3>
            <img src={product.images} alt="product" className="w24" style={{margin: "auto"}} />

            <div className="mt2 mb2 displayFlex justifyBetween itemsCenter">
                <h4 className="textGray5 mt2">$ {product.price}</h4>
                <small className="textGray5">Discount: {product.discount} %</small>
            </div>

            <div className="displayFlex justifyBetween gridGap2">
                {
                    checkExistanceInArray(cartItems, product._id) ?
                    <Link to='/cart' className="textOrange5 textCenter p2 rounded flexGrow bgGray2 border borderOrange4">
                        Go to Cart
                    </Link>
                    : 
                    <button onClick={addProductToCart} className="p2 rounded flexGrow">
                        Add to cart
                    </button>
                }
                
                {/* <button onClick={saveProduct} className="p2 rounded">Save</button> */}
            </div>
        </div>
    )
}