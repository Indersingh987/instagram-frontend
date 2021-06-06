import { Avatar,IconButton } from '@material-ui/core'
import { BookmarkBorderOutlined, FavoriteBorderOutlined, ModeCommentOutlined, Send, SentimentSatisfied } from '@material-ui/icons';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react'
import './Post.css'
import Comment from './Comment'

const Post = () => {
    return (
        <div className='post'>

            {/* header */}
            <div className='post__header'>
                <div className='post__header__left'>
                    <Avatar />
                    <div className='post__header__user-info'>
                        <p>user_name </p>
                        <span>location</span>
                    </div>
                    
                </div>
                <div className='post__header__right'>
                    <IconButton >
                        <MoreHorizIcon />
                    </IconButton>
                </div>
            </div>

            {/* post image */}
            <img className='post__img' src='https://www.polyeyes.com/dynamicresize.php?img=article_pic/3100.jpg&w=599&h=450&option=resize5' alt='post_img'/>

            {/* post icons */}
            <div className='post__icons'>
                <IconButton >
                    <FavoriteBorderOutlined />
                </IconButton>
                <IconButton >
                    <ModeCommentOutlined />
                </IconButton>
                <IconButton >
                    <Send />
                </IconButton>
                <IconButton className='post__icon__right'>
                    <BookmarkBorderOutlined />
                </IconButton>
            </div>

            {/* post info */}
            <div className='post__info'>
                <div className='post__info__likes'>
                    <Avatar className='post__info__img' />
                    <p>Liked by friend_name and 266 others</p>
                </div>
                <div className='post__info__discription'>
                    <strong>user_name</strong>
                    <p>description</p>
                </div>
            </div>

            {/* post comments */}
            <div className='post__comments'>
                <Comment />
                <Comment />
            </div>

            {/* post footer */}
            <div className='post__footer'>
                <IconButton >
                    <SentimentSatisfied />
                </IconButton>
                <input type='text' placeholder='Add a comment..' />
            </div>
        </div>
    )
}

export default Post
