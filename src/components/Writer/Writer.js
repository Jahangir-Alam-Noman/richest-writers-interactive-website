import React from 'react';
import './Writer.css';

const Writer = (props) => {
    // console.log(props.writer);

    const { img, name, age, sell, email, country } = props.writer;
    return (
        <div className="col-md-4 pb-5 ">
            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body bg-white text-start " >
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text ">
                        <span className="fw-bold">Age</span> : {age}
                    </p>
                    <p className="card-text">
                        <span className="fw-bold">Email</span> : {email}
                    </p>
                    <p className="card-text fw-bold">
                        Sell :<span className="text-danger"> ${sell} </span>
                    </p>
                    <p className="card-text">
                        <span className="fw-bold">Country</span> : {country}
                    </p>
                    <button
                        onClick={() => props.handleInvite(props.writer)}

                        className="btn btn-primary">
                        Send Invitation  <i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                    <i ></i>


                </div>
            </div>
        </div>

    );
};
export default Writer;
