
import React,{useState ,useEffect} from 'react';
import './App.css'
import { Message } from './Message';
import  db  from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { FormControl, IconButton,Input } from '@mui/material'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';





const App = () => {
  const [input,setInput] = useState('');
    const [messages ,setMessages]=useState([{username:'Ankur', message:'hey guys'},{username:'Ayush',message:'happy'}]);
    const [username, setUsername]=useState();
    useEffect(()=>{      
      db.collection('messages')
      .orderBy('timestamp','desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc =>({id:doc.id, message:doc.data()})));
      })

    },[])

    useEffect(() => {
      setUsername(prompt('Enter your name to Chat'));
      
    }, [])

    const sendmessage= (event) =>{
      event.preventDefault();
      db.collection('messages').add({
        message:input,
        username:username,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
     setInput('');
    }

   return(  <div className="App">
   <div className="header">
     <h1 className="logo">LET'S
     <h2>TALK</h2>    
     </h1> 
     <h2 className="welcome">Welcome {username}</h2>
     <div className="contact">
     <a href="https://www.linkedin.com/in/ankur-yadav-905b77217/"  className="linkedin" rel="linkedin" target="_blank">
       <LinkedIn />
     </a>
     
     
     <a href="https://github.com/Ankur9767" className="github" rel="Github">
     <GitHub />
     </a>       
    
     <a href="https://www.instagram.com/ankuryadav__/" className="insta" rel="Instagram">     
     <Instagram />  
     </a>
    
     </div>

     
     </div>
     <p>{sendmessage}</p>
     
     <form className="form">
     <FormControl className="form_control">
     <Input type="text" className="app_input" value={input} placeholder='Enter messages.......' onChange={event =>setInput(event.target.value)} />
     <IconButton className="send_button" onClick={sendmessage} type="submit">
     <SendIcon />
     </IconButton>
     </FormControl>
     </form> 
     
     <FlipMove>
     {
       messages.map(({id,message}) =>(
        <Message key={id} username={username} message={message} />
       ))
     }
     </FlipMove>
     </div>
   );
}

export default App;
