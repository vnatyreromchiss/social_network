import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return <div className='sidebar'>
    <ul className='menu__list'>
      <li className='menu__link'>
        <a className='menu__item' href='/ProfilePage/'>Profile</a>
      </li>
      <li className='menu__link'>
        <a className='menu__item' href='/Dialogs/'>Messages</a>
      </li>
      <li className='menu__link'>
        <a className='menu__item' href='#'>News</a>
      </li>
      <li className='menu__link'>
        <a className='menu__item' href='#'>Music</a>
      </li>
      <br/>
      <li className='menu__link'>
        <a className='menu__item' href='#'>Settings</a>
      </li>    
    </ul>
  </div>
}

export default Sidebar;