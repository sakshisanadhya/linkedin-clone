import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import"./css/feed.css"
import Post from './Post';
import { db } from './firebase';
import firebase from "./firebase"
 
function Feed() {
  const[input ,setInput] = useState();

const submitPost = (e) => {
    e.preventDefault(); // Corrected typo here
    db.collection("posts").add({
      name: "sakshi",
      description: "this is post",
      message: input,
      photoURL: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  

  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqhgsZN_p7UiwNCiwdK-EE2q3IxmAfg_YbNttMr3kcg&s"/>
        <form onSubmit={submitPost}>
            <input type="text" placeholder="start a post" value={input} onChange={e=>setInput(e.target.value)}/>
            <input type ="submit"/>
        </form>
        </div>
      <div className="feed__options">
        <div className="option">
        <InsertPhotoIcon style={{color:'#70b5f9'}}/>
        <span>Photo</span>
        </div>

        <div className="option">
        <YouTubeIcon style={{color:'#7fc15e'}}/>
        <span>Video</span>
        </div>

        <div className="option">
        <AssignmentIcon style={{color:'#e7a33e'}}/>
        <span>Write Article</span>
        </div>

        <div className="option">
        <TodayIcon style={{color:'#fc9295'}}/>
        <span>Event</span>
        </div>
      </div>
      </div>
      <Post name="sakshi" description="This is test 2" message =" we are learning"
      photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqhgsZN_p7UiwNCiwdK-EE2q3IxmAfg_YbNttMr3kcg&s"/>
    </div>
  )
}

export default Feed
