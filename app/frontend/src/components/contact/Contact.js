import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'

import { fetchContacts,addContact } from '../../redux/contact_reducer/contact_action';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import DialogHelper from '../helper/DialogHelper';
import { IoEllipsisVertical } from "react-icons/io5"





const Contact=({fetchContacts,contactData, addContact})=> {
  const [open,setOpen]=useState(false)
  const handleClose=()=>setOpen(!open)
  const [search, setSearch]= useState('Search your contact')
  const [phoneData,setPhoneData]=useState('')
  const [fullNameData, setFullNameData]=useState('')
  const [emailAddressData, setEmailAddressData]=useState('')
  

  const hasNotData=contactData.data.length ===0
  console.log(fullNameData,phoneData,emailAddressData)
  console.log(contactData )
  const handleSave=()=>{
   
      addContact( fullNameData,phoneData, emailAddressData)
    
    setPhoneData()
    setFullNameData('')
    setEmailAddressData('')
    handleClose()
  }
  const fetchData=()=>{
    
    fetchContacts()
  }
  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div className='flex space-y-4 flex-col items-center h-[500px] '>
      <div className='shadow-md w-[400px] flex flex-row justify-center items-center bg-gray-200 px-5 py-2  rounded-2xl'>
        <h4 className="font-semibold">List Contact</h4>
        <div className='px-2 '>
        <input  type="text" value={search} onChange={e=>setSearch(e.target.value)} className=" border-gray-400 border-2 text-gray-400  mb-3 mt-3 p-1  rounded w-full border-solid h-8 "/>
        </div>
        <div className="flex flex-row items-center hover:cursor-pointer space-x-2">
        <button onClick={()=>setOpen(!open)}>➕</button>
        <DialogHelper open={open} onClose={handleClose} >
          <div className=' pt-3 w-80 rounded px-10 pb-5 h-fit flex flex-col shadow-lg bg-slate-100'>
            <h2 className="font-semibold place-self-center mb-5">New contact</h2>
            <h3 className="font-semibold mb-2">Full name</h3>
            <input type="text" value={fullNameData} onChange={e=>setFullNameData(e.target.value)} className="border-gray-400 mb-3 rounded border-solid border-2 p-1 "/>
            <h3 className="font-semibold mb-2">Email address</h3>
            <input type="email" value={emailAddressData} onChange={e=>setEmailAddressData(e.target.value)} className="border-gray-400 mb-3 rounded border-solid border-2 p-1 "/>
            <h3 className="font-semibold mb-2">Phone number</h3>

            <PhoneInput
        defaultCountry="ua"
        value={phoneData}
        onChange={(phone) => setPhoneData(phone)}
      />
            <div className='flex flex-row justify-between  mt-10 space-x-2'>
              <button onClick={handleSave}   className="bg-lime-500  hover:bg-lime-600 rounded text-white w-1/2">Save</button> 
              <button onClick={handleClose} className="rounded w-1/2 bg-black text-white">Close</button>
               
            </div>

            {contactData.loading &&<p className="flex self-center pt-2 font-semibold ">creating...</p>}
            {contactData.error!=='' &&<p className="flex self-center pt-2 text-red-600">Failed</p>}
            {contactData.data.length!==0 &&<p className="flex self-center pt-2 text-green-600">created</p>}
          </div>
        </DialogHelper>
        <IoEllipsisVertical />
        </div>
      </div>
      {hasNotData && <div className="flex items-center font-semibold justify-center">Loading</div>}
      {contactData.error && <div>some error</div>}
      {<div className='shadow-md w-[400px] flex flex-col overflow-y-auto bg-gray-200 px-5 py-2 h-[400px] rounded-2xl' >
        <ul className='w-full p-0 '>
          {contactData&&contactData.data&&contactData.data?.map((e,index)=>
          (<li key={index} className="flex justify-between px-3.5 py-2 bg-white my-2 rounded ">
            <div className="flex flex-row  items-center space-x-4">
            <div className="border rounded-full border-gray-900 p-0.5 w-10 h-10">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="tania andrew" className='rounded-full'/>
            </div>
            <div className="overflow-clip">
            <h3 className='text-gray-600 font-semibold' >{e.fullName} </h3>
            <p className="text-gray-500">{e.phoneNumber}</p>
            </div>
            </div>
            <input value={e.selected} type="checkbox" />
          </li>))}
        </ul>
      </div>}
      
      
    </div>
   
  )
}

const mapStateToProps=(state)=>{
  return {
   contactData:state.contact
   
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    fetchContacts:()=>dispatch(fetchContacts()),
    addContact:(fullNameData, phoneData,emailAddressData)=>dispatch(addContact(fullNameData,phoneData,emailAddressData))
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact)
