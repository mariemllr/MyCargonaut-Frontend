import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>    
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/Chat">Chat</a>
                </li>
            </ul>
        </nav>
    );    
}
export default Navbar;