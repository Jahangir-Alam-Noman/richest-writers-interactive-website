import React from 'react';
import './Writer.css';

const Writer = (props) => {
    const { img, name, age, sell, email, country } = props.writer;
    return (
        <div className="col-md-4 col-lg-4 pb-4 custom_card ">
            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body  text-start " >
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text ">
                        <span className="fw-bold">Age</span> : {age}
                    </p>
                    <p className="card-text">
                        <span className="fw-bold">Email</span> : {email}
                    </p>
                    <p className="card-text fw-bold">
                        Net Worth :<span className="text-primary sale"> ${sell}Million </span>
                    </p>
                    <p className="card-text">
                        <span className="fw-bold">Country</span> : {country}
                    </p>
                    <button
                        onClick={() => props.handleInvite(props.writer)}
                        className="btn">
                        Send Invitation  <i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                    <i ></i>
                </div>
            </div>
        </div>

    );
};
export default Writer;
