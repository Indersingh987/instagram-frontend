import { FavoriteBorderOutlined } from '@material-ui/icons'
import React from 'react'
import './Comment.css'

const Comment = () => {
    return (
        <div className='comment'>
            <strong className='comment__user'>friend_name</strong>
            <p className='comment__text'>comment</p>
            <FavoriteBorderOutlined />
        </div>
    )
}

export default Comment
