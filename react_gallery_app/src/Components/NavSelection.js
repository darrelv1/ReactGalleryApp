import React from 'react';
import { NavLink } from 'react-router-dom'


const SearchBar = ( ) =>{





    return (

        <nav className="main-nav">
            <ul>
                <li><NavLink to='cats'>Cats</NavLink></li>
                <li><NavLink to='dogs'>dogs</NavLink></li>
                <li><NavLink to='computers'>Computers</NavLink></li>

            </ul>
        </nav>


    )

}
export default SearchBar;