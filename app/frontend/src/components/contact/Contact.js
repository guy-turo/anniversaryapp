import React,{useState} from 'react'
import DialogHelper from '../helper/DialogHelper';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {
  Avatar,
} from "@material-tailwind/react";
import { IoEllipsisVertical } from "react-icons/io5"


const contactList=[{
  id:"1",
  name:"john",
  number:"+243 993243234"
},
{
  id:"1",
  name:"john ricky",
  number:"+243 993243234"
},
{
  id:"1",
  name:"john",
  number:"+243 993243234"
},
{
  id:"1",
  name:"john",
  number:"+243 993243234"
}

]


const Contact=()=> {
  const [open,setOpen]=useState(false)
  const handleClose=()=>{
    setOpen(!open)
  }
  const [change,setChange]=useState()
  return (
    <div className='w-2/4  bg-gray-100 h-lvh'>
      <div className='flex items-center justify-between bg-gray-100  px-3.5 py-1  font-semibold'>
        <h4>List Contact</h4>
        <div className="flex flex-row items-center hover:cursor-pointer space-x-2">
        <button onClick={()=>setOpen(!open)}>➕</button>
        <DialogHelper open={open} onClose={handleClose} >
          <div className=' pt-3 w-80 rounded px-10 h-80 flex flex-col bg-slate-100'>
            <h2 className="font-semibold place-self-center mb-5">New contact</h2>
            <h3 className="font-semibold mb-2">Full name</h3>

            <input type="text" className="border-black mb-3 rounded border-solid border-2 p-1"/>
            <h3 className="font-semibold mb-2">Phone number</h3>

            <PhoneInput value={change} onChange={setChange} defaultCountry='US'/>
            <div className='flex flex-row justify-between  mt-10 space-x-2'>
              <button  className="bg-lime-500 hover:bg-lime-600 rounded w-1/2">Save</button>
              <button onClick={handleClose} className="rounded w-1/2 bg-black text-white">Close</button>
            </div>
          </div>
        </DialogHelper>
        <IoEllipsisVertical />
        
        </div>
      
      </div>
      <div>
      
      <ul className='w-full p-0 overflow-x-hidden overflow-y-auto'>
          {contactList?.map((e)=><li key={e.id} className="flex justify-between px-3.5 py-2 bg-slate-400 my-2 ">
            <Avatar
               variant="circular"
               size="md"
               alt="tania andrew"
               className="border rounded-full border-gray-900 p-0.5 w-10 h-10"
               src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <div>
            <h3 className='text-gray-600 font-semibold' >{e.name} </h3>
            <p className="text-gray-500">{e.number}</p>
            </div>
            
            <input type="checkbox" className="hover:" />
          </li>)}
        </ul>
      </div>
      

   
    </div>
  )
}

export default Contact
