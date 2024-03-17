import React ,{useState}from 'react'
import DialogHelper from '../helper/DialogHelper';
import {connect} from 'react-redux'
import {addContact} from '../../redux/contact_reducer/contact_action';


function AddContactDialog({addContact}) {
  const [open,setOpen]=useState(false)
  
  
  const handleClose=()=>setOpen(!open)
  const [fullNameData, setFullNameData]=useState('')
  const [emailAddressData, setEmailAddressData]=useState('')
  const handleSave=(e)=>{
    
    e.preventDefault()
    if(fullNameData!==null && emailAddressData !==null){
      addContact( fullNameData, emailAddressData)
    }
      setFullNameData('')
      setEmailAddressData('')
      
      handleClose()
     
  }
  return (
    <>
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
              </div>
          </form>
        </DialogHelper>
    </>
  )
}
const mapDispatchToProps=(dispatch)=>{
  return {
    addContact:(fullName,emailAddress)=>dispatch(addContact(fullName,emailAddress)),  
  }
}
export default connect(null,mapDispatchToProps)(AddContactDialog)

