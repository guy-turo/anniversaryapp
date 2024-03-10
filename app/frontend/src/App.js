import React ,{useState} from 'react'
import Navbar from './components/navbar/Navbar'
import Contact from './components/contact/Contact';
import Main from './components/main/Main';
import './App.css';


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
  const [profile,setProfile]= useState(fakeProfileDB);
  
  const clickMe=()=>{
    setProfile('')
  }

  return (
    <div className="App" >
      <Navbar name={profile.name} 
        nameLink={profile.profileImgUrl} 
        clickMe={clickMe}/>
      <Contact/>
      <Main/>
    </div>
  );
}

export default App;
