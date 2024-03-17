import React,{useState} from 'react'
import DialogHelper from './DialogHelper'
import { TiEdit } from "react-icons/ti";
import {connect} from 'react-redux'
import {updateContact,fetchContacts} from '../../redux/contact_reducer/contact_action';


function UpdateContactDialog({data, updateContact,fetchContacts}) {
  const [openSingle, setOpenSingle]=useState(false)

  const [fullNameData,setFullNameData]= useState(data.fullName)
  const handleFullName=(e)=>{
    setFullNameData(e.target.value)
  }

  const [emailAddress, setEmailAddressData]=useState(data.emailAddress)
  const handleEmailAddress=(e)=>{
    setEmailAddressData(e.target.value)
  }
  const handleCloseSingle=()=>setOpenSingle(!openSingle)
  const handleUpdateContact=(id,fullName,emailAddress)=>{
    if(fullName!==data.fullName || emailAddress!==data.emailAddress){
      updateContact(id,fullName,emailAddress)
      setEmailAddressData(null)
      setFullNameData(null)
      fetchContacts()
      handleCloseSingle()
      
    }
  }
  
  return (
    <>
      <button onClick={()=>setOpenSingle(!openSingle) }><TiEdit className='size-6 ' /></button>
            <DialogHelper open={openSingle} onClose={handleCloseSingle} >
            <div className=' pt-3 w-80 rounded px-10 pb-5 h-fit flex flex-col shadow-lg bg-slate-100'>
            <h2 className="font-semibold place-self-center mb-5">New contact</h2>
            <h3 className="font-semibold mb-2">Full name</h3>
            <input type="text" required value={fullNameData} onChange={handleFullName} className="border-gray-400 mb-3 rounded border-solid border-2 p-1 "/>
            <h3 className="font-semibold mb-2">Email address</h3>
            <input type="email" required value={emailAddress} onChange={handleEmailAddress} className="border-gray-400 mb-3 rounded border-solid border-2 p-1 "/>
            {/* <h3 className="font-semibold mb-2">Phone number</h3> */}

            {/* <PhoneInput defaultCountry="us" value={phoneData} onChange={(phone) => setPhoneData(phone)}/> */}
            <div className='flex flex-row justify-between  mt-10 space-x-2'>
              <button onClick={()=>handleUpdateContact(data._id,fullNameData,emailAddress)}  className="bg-lime-500  hover:bg-lime-700 rounded text-white w-1/2">Save</button> 
              
              <button onClick={handleCloseSingle} className="rounded w-1/2 bg-black text-white">Close</button>
               
            </div>

            
          </div>
            </DialogHelper>
    </>
  )
}
const mapStateToProps=(state)=>{
  return{
    contactData:state.contact
  }
 
}
const mapDispatchToProps=(dispatch)=>{
  return {
    fetchContacts:()=>dispatch(fetchContacts()),
    updateContact:(id,fullNameData,emailAddressData)=>dispatch(updateContact(id,fullNameData,emailAddressData))
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateContactDialog) 
