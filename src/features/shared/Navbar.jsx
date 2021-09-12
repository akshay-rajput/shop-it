import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const {cartItems} = useSelector(state => state.cart);

    return (
        <nav className="pt2 pb2 pl4 pr4 bgGray6 textWhite">
            <div className="containerMid displayFlex justifyBetween ">
                <div className="">
                    <NavLink to="/" className="logo textOrange3 hover:textOrange4">Shop-it</NavLink>
                </div>
                <ul className=" displayFlex listNoStyle gridGap4 itemsCenter">
                    <li>
                        <NavLink end to={"/cart"} className="displayFlex itemsCenter" title="View Cart">
                            Cart {cartItems.length > 0 ? `(${cartItems.length})` : ""}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}