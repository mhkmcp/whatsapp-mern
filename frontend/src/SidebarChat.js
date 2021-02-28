import React from 'react'
import "./SidebarChat.css"

import { Avatar } from '@material-ui/core';


const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h4>Room Name</h4>
                <p>This is the Message</p>
            </div>
        </div>
    )
}

export default SidebarChat
