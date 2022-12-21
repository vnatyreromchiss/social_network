import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './ProfilePage.css';

const ProfilePage = () => {
    return <div className='profile_page'>
    <div className='profile_page__background'>
      <img className='profile_page__background_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUzx8tsVYmAhuUK8faUNiy8ZveK6xHqx4Yg&usqp=CAU'/>   
    </div>
    <div className='profile_page__block'>
      <div className='profile_page__avatar'>
        <img className='profile_page__avatar_image' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEXZ2dlNTU3e3t5KSkrf399HR0dERERBQUE+Pj5QUFDMzMxhYWHV1dVpaWnJycmdnZ1vb2+EhISvr6++vr5cXFyUlJR3d3e2trarq6uNjY1VVVV8fHyioqJzc3PDw8Ozs7NLrMaxAAAEjklEQVR4nO3c3ZbaIBQFYDlAovmPMYkmTuf937KJo112ZlSgZuDY/V10zeoVex2CkACrFQAAAAAAAAAAAAAAAAAAAAAAAAAAAIATuua7Mc9Hq6wv63w3iGGX12WfrV4qJKmirGQcaSmFEFLqKJZVWahXCUmqeZPRnO3a9D9vzWtkpCb/Eu8SMm/4R6SkXn+f75RxXSfMM6p+0DfzzfTQK9+N/BeqvdFBr7tqyzliHT/IN4tr3810N0YGAYWIRt8NdaRqs4BTxJplR1WtSRc9d1SOzyL15gGniD2/H41keDSKXpND4rvBtqi+/zv4ma6ZFZEamz46i5lN4FRq00dnMmU12NgNM+cishpsVGVbwqmIFaciFvYBp4iF72abo9Z0NnMtahl109yphrnvZptLXAJOEdn86tO7/Ug6i9+5dFNq7eYzF5rNg2g7Y/uTkM/MzWmgYTXU7BwT7nw33NjGKaAQG98NN+ZWwqmIvhtu7PVr6PocDr4bbsx6cXhOmPpuuCkaHX8PRy6/h//BnGbrsnialk9bLglXiWMN2awt/oP1oduDyOcxnPxySvjLd7MtkEM3lTmjEjqt8vms8E+U9cRN7ji9Lp2LuLZMuOZVwiliZ/ntqWMWcLUqhNX3Q8HohfcZ7W2mbtGeXQltNirw3arQGe/F6FgGnFSG+2kq3w11Z1TFqPPdzH9ABtu+Yj5vur+j9uLB3kSx5/oMnlHRxXf2l8ZdwbqCJ7QdbmSU8cDnvcU9RNtU6y/7vLVOty9zKoFUc0j1eav+x2Z9nR5eZB/7Ba2K/aFLh2loGdLusC9e67zFh9NJmSzLzn8BAAAAAMAi5kPqavaCp9XnZEnzfmzrcezGsW6P700yJ/XdsOcgyvq22ugoivREzv/Mf2+qts/4h5wWvmUVxV/eYXy8x4ijquS9FFZJmeu7J4FlpPMyYfo+kVQziocHneeQYuT4yoaoz9emH0n1Ou+5PZGqqe68CP6mkHHVcOqrlIwG3fNzZx35XK9AR+m0Y0geeUSkJHc7MiNEnHMoIz362nS3jCL87/nqYP0EXpPRIewBhzLDD9u3RVUWcBkpSd176IVOw30YqXhwGY1hxCHUr6aUWG2Duk2KMKtIyeY5AaeImyAjJo4nZb6NuAtxU3v+jGfwQoe3q10Z3idkKhoD+12k0nWmdktcBvUoUvPMLvpBh3XZyRNHmYugzszabCU1F9CmU2pst62bWYfTTx1PVD4SzIlLOi7RR2dRIIv+7Gmztc/kJvMdbuZ2GY2ZMK6syZaq4EkARaRyuRJORQxhZuN6vYAZ/5cQuJ5qNuX/9LN6W/QxFPLN98TG6d4yq4iej3wtO87MvI81Dpfr2ZGejww53i1gw+89BHaHDN34PZroequXDb83gNECa/vP5M5nwmyZpe/f1h7npi4XsdrzeXXrcmvfaz7XwT8x0Pgdalwu07Xn8/pd+9svnBJ6vDGDll0bXmz89dLsRwL6fJXheJuuLY+37y6+ODwn9LdELLT8CdrjIph+hr+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAEJzfafo3qQAbgdsAAAAASUVORK5CYII='/>  
      </div>
      <div className='profile_page__information'>
        <h3 className='profile_page__header' >Chiller R.</h3>
        <br/>

        <div>Date of Birth: 24 May</div>
        <div>City: Winnipeg</div>
        <div>Education: KNTU</div>
        <div>Website: https://chiller.com</div>  
      </div>
      <MyPosts/>

      </div>
  </div>
}

export default ProfilePage;