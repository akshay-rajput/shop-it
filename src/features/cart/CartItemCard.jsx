import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateItemInCart, removeFromCart, saveProduct, unsaveProduct } from './cartSlice';

export default function CartItemCard({product}) {
    const {cartItems, savedItems} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function checkExistanceInArray(array, id){
        // returns true or false
        return !!array.find((item) => item._id === id);
    };

    function saveItem(){
        dispatch(removeFromCart(product));
        dispatch(saveProduct(product));
    }

    function moveToCart(){
        dispatch(addToCart(product));
        dispatch(unsaveProduct(product));
    }
    
    function incrementItemQty(){
        let updatedProduct = {...product};
        updatedProduct.quantity += 1;
        dispatch(updateItemInCart(updatedProduct));
    }

    function decrementItemQty(){
        let updatedProduct = {...product};
        updatedProduct.quantity -= 1;
        dispatch(updateItemInCart(updatedProduct));
    }
    
    function removeItem(){
        dispatch(removeFromCart(product));
    }

    return (
        <div className=" displayFlex border borderGray3 rounded p2 gridGap4 wFull mb4">
            <img src={product.images} alt="product image" className="w24" />
            
            <div className="displayFlex flexCol flexGrow">
                <strong className="fontMedium">{product.name}</strong>
                <div className="displayFlex gridGap4 pt4">
                    <small className="">Discount: {product.discount} %</small>
                    {
                        checkExistanceInArray(cartItems, product._id) ? 
                        <div className="displayFlex itemsCenter justifyBetween">
                            <button onClick={decrementItemQty} disabled={product.quantity < 2} className="border pl1 pr1 rounded">-</button>
                            &nbsp;&nbsp;<small className="">{product.quantity}</small>&nbsp;&nbsp;
                            <button onClick={incrementItemQty}  disabled={product.quantity >= 5} className="border pl1 pr1 rounded">+</button>
                        </div>
                        :
                        null
                    }
                </div>

                <div className="displayFlex justifyBetween">
                    <span>$ {product.price * product.quantity}</span>

                    {
                        checkExistanceInArray(cartItems, product._id) ?
                        <button onClick={saveItem} className="p1 border borderGray4 rounded">Save item</button>
                        :
                        <button onClick={moveToCart} className="p1 border borderGray4 rounded">Move to cart</button>
                    }
                </div>
            </div>
        </div>
    )
}
