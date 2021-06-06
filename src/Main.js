import React from 'react'
import './Main.css'
import Status from './Status'
import Post from './Post'

const Main = () => {
    return (
        <div className='main'>
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
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Main
