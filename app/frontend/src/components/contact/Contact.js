import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import profile from'../../media/profile.png'
import { fetchContacts,addContact ,deleteContact} from '../../redux/contact_reducer/contact_action';

import DeleteContactDialog from '../helper/DeleteContactDialog';
import DialogHelper from '../helper/DialogHelper';
import { IoEllipsisVertical } from "react-icons/io5"


const Contact=({fetchContacts,contactData, addContact, deleteContact})=> {
  const [open,setOpen]=useState(false)
  
  const handleClose=()=>setOpen(!open)
  const [search, setSearch]= useState('Search your contact')

  const [fullNameData, setFullNameData]=useState('')
  const [emailAddressData, setEmailAddressData]=useState('')


  const hasNotData=contactData.data.length ===0
  console.log(fullNameData,emailAddressData)
  console.log(contactData )

  const handleDelete=( id)=>{
    
   deleteContact(id)
    
  }
  const handleSave=(e)=>{
    e.preventDefault()
    if(fullNameData!==null && emailAddressData !==null){
      addContact( fullNameData, emailAddressData)
    }
 
      setFullNameData('')
      setEmailAddressData('')
      fetchContacts()
      handleClose()
     
  }
  useEffect(()=>{
      fetchContacts()  
  },[fetchContacts])
  
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
          <form method="POST" onSubmit={handleSave} >
          <div className=' pt-3 w-80 rounded px-10 pb-5 h-fit flex flex-col shadow-lg bg-slate-100'>
            <h2 className="font-semibold place-self-center mb-5">New contact</h2>
           
            <h3 className="font-semibold mb-2">Full name</h3>
            <input type="text" required value={fullNameData} onChange={e=>setFullNameData(e.target.value)} className="border-gray-400 mb-3 rounded border-solid border-2 p-1 "/>
            <h3 className="font-semibold mb-2">Email address</h3>
            <input type="email"required value={emailAddressData} onChange={e=>setEmailAddressData(e.target.value)} className="border-gray-400 mb-3 rounded border-solid border-2 p-1 "/>
            {/* <h3 className="font-semibold mb-2">Phone number</h3> */}

            {/* <PhoneInput defaultCountry="us" value={phoneData} onChange={(phone) => setPhoneData(phone)}/> */}
            <div className='flex flex-row justify-between  mt-10 space-x-2'>
              <button type='submit' value='Submit'  className="bg-lime-500  hover:bg-lime-700 rounded text-white w-1/2">Save</button> 
              <button onClick={handleClose} className="rounded w-1/2 bg-black text-white">Close</button>
               
            </div>

            {contactData.loading &&<p className="flex self-center pt-2 font-semibold ">creating...</p>}
            {contactData.error!=='' &&<p className="flex self-center pt-2 text-red-600">Failed</p>}
            {contactData.data.length>0 &&<p className="flex self-center pt-2 text-green-600">created</p>}
          </div>

          </form>
          
        </DialogHelper>
        <IoEllipsisVertical />
        </div>
      </div>
     
      {<div className='shadow-md w-[400px] flex flex-col overflow-y-auto bg-gray-200 px-5 py-2 h-[400px] rounded-2xl' >
        <ul className='w-full p-0 '>
        {hasNotData && <div className="flex items-center font-semibold justify-center">Loading...</div>}
      {contactData.error && <div className='flex items-center font-semibold justify-center text-red-500'>some error</div>}
          {contactData && contactData.data && contactData.data?.map((e,index)=>
          (<li key={index} className="flex space-x-2 justify-between px-3.5 py-2 bg-white my-2 rounded ">
              <div className="flex flex-row justify-between overflow-clip  items-center space-x-3">
                <div className="border rounded-full border-gray-900 p-0.5 w-10 h-10">
                  <img src={profile} alt="" className='rounded-full w-full h-full'/>
                </div>
                <div className="overflow-auto w-fit ">
                  <h3 className='text-gray-600 font-semibold overflow-clip' >{e.fullName} </h3>
                  <p className="text-gray-500">{e.emailAddress}</p>
                </div>
              </div>
            
            <DeleteContactDialog data={contactData.data[index]} handleDelete={handleDelete}/>
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
    addContact:(fullNameData,emailAddressData)=>dispatch(addContact(fullNameData,emailAddressData)),
    deleteContact:(id)=>dispatch(deleteContact(id))
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact)
