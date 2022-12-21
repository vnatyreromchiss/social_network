import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ProfilePage from '../ProfilePage/ProfilePage';
import Dialogs from '../Dialogs/Dialogs';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import {
  createRoutesFromElements,
  createBrowserRouter
} from "react-router-dom";


 const router = createBrowserRouter(
    createRoutesFromElements(
    <Route 


    >
        <Route
          path="/ProfilePage/"
          element={<ProfilePage />} 
        />
        <Route
          path="/Dialogs/"         
          element={<Dialogs />}
          
        />
    </Route>  

)
);


const Main = (props) => {
  return <main className='main'>
    <div className='main__container'>

      <section className='main__content'>

        <Sidebar />

        

        {/* const router = createBrowserRouter(
        createRoutesFromElements(
        <Route>
          <Route
            path="/"
            element={<ProfilePage />}
          />
          <Route
            path="/dialogs"
            element={<Dialogs />}
          />
        </Route>

        )
        ); */}




        {/* <BrowserRouter>
                <Routes>  */}
        {/* <Route path='/dialogs' element={<Dialogs/>}/>
                  <Route path='/profile' element={<ProfilePage/>}/>   */}
        {/* <ProfilePage /> */}
        {/* <Dialogs/>   */}

        {/* </Routes> 
              </BrowserRouter>  */}


      </section>
    </div>
  </main>

}

export default Main;
