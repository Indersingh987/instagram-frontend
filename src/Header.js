import React from 'react'
import './Header.css'
import HomeOutlinedIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar, IconButton } from '@material-ui/core';

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <img className='header__brand'
                src='images/instagram_logo.png'
                alt='instagram'/>

                <input className='header__search' placeholder='search'/>

                <div className='header__right'>
                    <IconButton className='iconButton'>
                        <HomeOutlinedIcon />
                    </IconButton>
                    <IconButton className='iconButton'>
                        <SendIcon />    
                    </IconButton>
                    <IconButton className='iconButton'>
                        <ExploreIcon />
                    </IconButton>
                    <IconButton className='iconButton'>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <Avatar className='header__profile__img'/>
                </div>
            </div>
        </div>
    )
}

export default Header
