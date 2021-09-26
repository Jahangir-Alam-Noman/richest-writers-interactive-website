import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writer from '../Writer/Writer';
import './Writers.css';

const Writers = () => {
    const [writers, setWriters] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('writers.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])
    const handleInvite = (info) => {
        const newCart = [...carts, info];
        setCarts(newCart);
    }
    return (
        <div>
            <div className="row writers">
                <div className="col-md-9 ">
                    <div className="row  px-5 py-5">
                        {
                            writers.map(writer => <Writer
                                key={writer.id}
                                writer={writer}
                                handleInvite={handleInvite}
                            ></Writer>)
                        }

                    </div>
                </div>
                <div className="col-md-3 py-5">
                    <Cart cart={carts}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Writers;

