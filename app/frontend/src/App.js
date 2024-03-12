import React from 'react'
import NavbarComponent from './components/navbar/NavbarComponent'
import Contact from './components/contact/Contact';
import Main from './components/main/Main';



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
   <div>
    <NavbarComponent/>
    <section className="flex justify-between p-0"> 
      <Contact/>
      <Main/>
    </section>
   </div>
  );
}

export default App;
