import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search.js'




function Home() {
    return (
     <div className="home">
        <div className="header">
            <div className="header_left">
                <Link to='/about'>About</Link>
                <Link to='/store'>Store</Link>
            </div>
            <div className="header_right">
            <Link to='/shmail'>Shmail</Link>
            <Link to='/images'>Images</Link>
            <AppsIcon />
            <AccountCircleIcon />
            </div>
        </div>
        <div className='home_body'>
            <img src="https://internship.sidehustle.ng/img/logo-dark.64d45129.png" alt="" />
            <div className="Input">
                <Search />
            </div>
        </div>
    </div>
    )
}

export default Home
