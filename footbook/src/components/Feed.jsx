import React from 'react'
import "../css/Feed.css"
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post
        profilePic= 'https://www.anumuseum.org.il/wp-content/uploads/Menasseh_ben_Israel-1200.jpg'
        message = 'Hello world'
        // timestamp = {timestamp}
        username = 'Yishac'
        image = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1920px-KeizersgrachtReguliersgrachtAmsterdam.jpg"
        />
        <Post/>
        <Post/>
        
    </div>
  )
}

export default Feed;