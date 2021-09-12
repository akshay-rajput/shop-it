import React from 'react';
import { useSelector } from 'react-redux';
import CartItemCard from '../features/cart/CartItemCard';
import SavedItemCard from '../features/cart/SavedItemCard';

export default function Cart() {
    const {cartItems, savedItems} = useSelector(state => state.cart);

    return (
        <div className="displayGrid gridCols6 gridGap4">
            <div className="gridColSpan4 pt4">
                {/* cart */}
                <div className="p2">
                    <h3 className="mb2">Cart {cartItems.length ? `(${cartItems.length} items)`: ""}</h3>
                    {
                        cartItems.length > 0 ?
                        cartItems.map(item => {
                            return (
                                <CartItemCard key={item._id} product={item} />
                            )
                        })
                        :
                        <div className=""> Your cart is empty</div>
                    }
                </div>

                {/* saved */}
                <div className=" mt4 bgGray1 p2 rounded">
                    <h3 className="mb2">Saved {savedItems.length ? `(${savedItems.length} items)` : ""}</h3>
                    {
                        savedItems.length > 0 ?
                        savedItems.map(item => {
                            return (
                                <CartItemCard key={item._id} product={item} />
                            )
                        })
                        :
                        <div className="displayFlex rounded pt2 pb2"> No saved items here</div>
                    }
                </div>
            </div>
            <div className="pt4 gridColSpan2">
                <h3 className="mb2">Order Summary</h3>
                {
                    cartItems.length > 0 ?
                    <div className=" displayFlex flexCol gridGap3 p2 border borderGray3 rounded mt4">
                        <ul className="listNoStyle displayFlex flexCol gridGap4">
                            {
                                cartItems.map(item => {
                                    return(
                                        <li key={item._id} className="displayFlex flexCol rounded">
                                            <strong className="textGray4 fontMedium mb2">{item.name} {item.quantity > 1 ? `(x ${item.quantity})`: ""}</strong>
                                            <small>Price: {item.price * item.quantity}</small>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <hr />

                        <div className="">
                            Total: {
                                cartItems.reduce((acc, value) => {
                                    return acc + (value.price * value.quantity);
                                }, 0)
                            }
                        </div>
                    </div>
                    :
                    <div className="">
                        Cart is empty
                    </div>
                }

            </div>
        </div>
    )
}
