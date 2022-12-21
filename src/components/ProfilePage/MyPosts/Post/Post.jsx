import React from 'react';
import './Post.css';

const Post = (props) => {
    return <div className='item'>
      {props.message}
      <br/>
      {props.likesCount} <span>likes</span>
    </div>
      
    
}

export default Post;