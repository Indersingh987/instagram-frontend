import React,{  } from 'react'
import './Main.css'
import Status from './Status'
import Post from './Post'
import { Avatar } from '@material-ui/core'
import Suggestion from './Suggestion'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>
                <div className='main__status-bar'>
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                </div>
                <div className='main__post'>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
            
            <div className='main__sidebar'>
                <div className='main__sidebar__header'>
                    <Avatar className='main__sidebar__img'/>
                    <div className='main__sidebar__info'>
                        <strong>user_id</strong>
                        <p>user_name</p>
                    </div>
                    <a className='main__sidebar__switch' href='#'>
                        switch
                    </a>
                </div>

                <div className='main__sidebar__suggestions'>
                    <div className='main__sidebar__suggestions__header'>
                        <p>Suggestions For You</p>
                        <a  href='#'>See All</a>
                    </div>
                    <Suggestion />
                    <Suggestion />
                    <Suggestion />
                    <Suggestion />
                    <Suggestion />
                    <div className='main__sidebar__suggestions__fotter' >
                        &copy; 2021 INSTAGRAM FROM FACEBOOK
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
