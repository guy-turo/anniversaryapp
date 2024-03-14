import React from 'react'
import NavbarComponent from './components/navbar/NavbarComponent'
import Contact from './components/contact/Contact';
import Main from './components/main/Main';
import {Provider} from 'react-redux'
import store from './redux/storeReducer'


const fakeProfileDB= {
    name:'Guy rogue',
    lastName:"JAMES",
    profileImgUrl:"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    birthDate:"01/02/2000",
    address: "RDCongo, uvira",
    phoneNumber:"0901922343",
    email:"admin@admin.com",
    media:[''],
    contact:[
      {
        name:"harvey",
        phoneNumber:"21323243"
      },
      {
        name:'john',
        phoneNumber:'232334'
      },
      {
        name:"richard",
        phoneNUmber:"23342345"
      }
    ]
  }


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
        <p className="mt-5 text-gray-400 px-10">
          © 2021 Kodilux, Inc. All rights reserved.
        </p>
   </div>
    </Provider>
   
  );
}

export default App;
