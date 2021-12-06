import React,{ forwardRef } from 'react'
import './Message.css'
import { Card, CardContent, Typography } from "@mui/material"

export const Message = forwardRef(({username, message},ref) => {
    const isUser=username===message.username; 
    return (
        <div ref={ref} className={`message ${isUser && 'message_user' }`}>        
        
           
            <Card className={isUser ? "message_usercard":"message_guestcard"}>
            <CardContent>
            <Typography
            color="white"
            variant="h5"
            component="h2"
            >
            </Typography>
            
             {!isUser &&`${message.username||'Unknown User'}:`} {message.message}
            </CardContent>
            </Card>
            
        
    </div>

    )
 
}
 )
 
