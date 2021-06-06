import { Avatar } from '@material-ui/core'
import React from 'react'
import './Status.css'

const Status = () => {
    return (
        <div className='status'>
            <Avatar className='status__img'/>
            <div className='status__name'>
                user_name_large</div>
        </div>
    )
}

export default Status
