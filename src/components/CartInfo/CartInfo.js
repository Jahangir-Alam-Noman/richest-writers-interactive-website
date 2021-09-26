import React from 'react';
import './CartInfo.css';
const CartInfo = (props) => {
    const { name, img } = props;
    return (
        <div className="cart_info m-4 rounded-3">
            <img src={img} alt="" />
            <span className="fw-bold px-2">{name} </span>

        </div>
    );
};
export default CartInfo;