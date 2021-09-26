import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import CartInfo from '../CartInfo/CartInfo';

const Cart = (props) => {
    const { cart } = props;
    const totalReducer = (previous, current) => previous + current.sell;
    const total = cart.reduce(totalReducer, 0);
    return (
        <div >
            <div className="row py-2 addInfo">
                <div className="col-md-1">
                    <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                </div>
                <div className="col-md-11">
                    <h4>Writers Added : {cart.length}</h4>
                    <h4>Total Worth: ${total.toFixed(2)}M</h4>
                </div>
            </div>
            <div className="row py-5">
                <h3>Invited Writers List : </h3>
                <div>
                    {
                        cart.map(person => <CartInfo
                            key={person.id}
                            img={person.img}
                            name={person.name}
                        ></CartInfo>)
                    }
                </div>

            </div>

        </div>
    );
};
export default Cart;