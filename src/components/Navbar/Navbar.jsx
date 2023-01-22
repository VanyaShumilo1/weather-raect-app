import React, {useState} from 'react';
import logo from '../../img/logo.png'
import {Link} from "react-router-dom";
import SearchInput from "../UI/SearchInput/SearchInput";
import './navbar.scss'
import SearchButton from "../UI/SearchButton/SearchButton";
import {FaSearch} from "react-icons/fa";
import CurrentWeather from "../CurrentWeather/CurrentWeather";

const Navbar = () => {

    const [value, setValue] = useState('')

    return (
        <div className='navbar'>
            <div className="navbar__logo">
                <Link to='/'>
                    <img src={logo} alt="logo"/>
                </Link>
            </div>

            <div className="navbar__search">
                <SearchInput value={value} placeholder='Search city...' onChange={(e) => setValue(e.target.value)}/>
                <SearchButton to={`/weather/${value}`}>
                    <FaSearch/>
                </SearchButton>
            </div>

            <div className="navbar__weather">
                <CurrentWeather/>
            </div>


        </div>
    );
};

export default Navbar;