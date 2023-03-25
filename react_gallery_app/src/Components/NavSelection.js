import React from 'react';
import {NavLink , Outlet} from 'react-router-dom'


const SearchBar = () => {

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='cats'>cats</NavLink></li>
                <li><NavLink to='dogs'>dogs</NavLink></li>
                <li><NavLink to='computers'>Computers</NavLink></li>

            </ul>
            <Outlet/>
        </nav>
    )

}
export default SearchBar;