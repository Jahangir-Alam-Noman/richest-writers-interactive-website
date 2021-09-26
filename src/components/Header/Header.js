import React from 'react';
import './Header.css';

const Header = (props) => {
    const { richestCount } = props;
    return (
        <div className="header mx-auto text-center rounded w-75 py-5">
            <h2> The Richest Writers in the World </h2>
            <h5 className="text-muted">
                Some of the most popular writers in the
                world are worth more than a billion dollars!
                We’ve decided to compile a list of the {richestCount} richest
                writers worldwide, along with their current net worth, and a short bio.
            </h5>
            <h3>Let see top<span className="fw-bold top_writers"> {richestCount} </span>  Richest Writers...</h3>
        </div>
    );
};
export default Header;