import React from 'react'
import NavbarComponent from './components/navbar/NavbarComponent'
import Contact from './components/contact/Contact';
import Main from './components/main/Main';
import {Provider} from 'react-redux'
import store from './redux/storeReducer'

const App=()=> {
  return (

    <Provider store={store}>
      <div className="flex flex-col p-0 pb-10 overflow-auto   bg-gray-100 h-fit">
      <NavbarComponent/>
      <section className="flex  flex-col md:flex-row  justify-evenly p-5  items-center"> 
        <Contact/>
        <Main/>
      </section>
      <div className="flex divide-x-8 divide-y-8 bg-gray-300 mx-10 h-[1px] mt-3"></div>
        <p className="mt-5 text-gray-400 px-10 self-center md:self-start">
          © 2021 Kodilux, Inc. All rights reserved.
        </p>
   </div>
    </Provider>
   
  );
}

export default App;
