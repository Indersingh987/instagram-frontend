import { Avatar } from '@material-ui/core'
import React from 'react'
import './Suggestion.css'

const Suggestion = () => {
    return (
        <div className='suggestion'>
            <Avatar />
            <div className='suggestion__info'>
                <strong>user_id</strong>
                <p>fowlled by others</p>
            </div>
            <a href='#'>Follow</a>
        </div>
    )
}

export default Suggestion
