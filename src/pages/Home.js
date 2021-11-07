import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useState} from 'react';
import logo from '../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';



const Home = () => {

    const [textEntered, setTextEntered] = useState(logo);

    const textHandler = (e) => {
        setTextEntered(e.target.value);
    }

    return (
     <div className="home">
        <div className="header">
            <div className="header_left">
                <Link to='/about'>About</Link>
                <Link to='/store'>Store</Link>
            </div>
            <div className="header_right">
            <Link to='/shmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
            <AppsIcon />
            <AccountCircleIcon />
            </div>
        </div>
        <div className='home_body'>

            {textEntered ? <p>{textEntered}</p> : <img src={logo} />}
            
            <div className="Input">

            <div className="search">
            <div className="search_input">
                <SearchIcon className="search_icon" />
                <input type="text" placeholder="enter your text" onChange={textHandler} />
                <MicIcon /> 
            </div>
            <div className="search_btn">
                <Button variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </div>

            </div>
        </div>
    </div>
    )
}

export default Home;
