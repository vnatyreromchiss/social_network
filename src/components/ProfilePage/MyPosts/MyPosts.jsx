import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className='profile_page__my_posts'>
    <h3 className='my_posts__header'>My posts</h3>
    <input type='text' className='my_posts__input' placeholder='your news..'></input>
    <div className='profile_page__posts'>
      <Post message='hello' likesCount='30'/>
      <Post message='chao' likesCount='50'/>
    </div>
  </div>
}

export default MyPosts;