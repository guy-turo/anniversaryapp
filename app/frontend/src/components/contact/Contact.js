import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import profile from'../../media/profile.png'
import { fetchContacts,} from '../../redux/contact_reducer/contact_action';

import DeleteContactDialog from '../helper/DeleteContactDialog';
import UpdateContactDialog from '../helper/UpdateContactDialog';
import AddContactDialog from '../helper/AddContactDialog';
import { TiEdit } from "react-icons/ti";



const Contact=({fetchContacts,contactData})=> {
  const [search, setSearch]= useState('')
  const [modify,setModify]=useState(true)
  const [filteredContacts, setFilteredContacts]=useState(contactData.data)
  
  const handleInputChange=(e)=>{
    const searchTerm= e.target.value
    setSearch(searchTerm)
    const filteredItems=contactData.data.filter((contact)=>contact.fullName.toLowerCase().includes(search.toLowerCase()))
  setFilteredContacts(filteredItems)
  }

  
  const hasNotData=contactData.data.length ===0

  useEffect(()=>{
      fetchContacts()  
  },[fetchContacts])
  
  return (
    <div className='flex space-y-4 flex-col items-center h-[500px] '>
      <div className='shadow-md w-[400px] flex flex-row justify-center items-center bg-gray-200 px-5 py-2  rounded-2xl'>
        <h4 className="font-semibold">List Contact</h4>
        <div className='px-2 '>
        
        <input  type="text" value={search} onChange={handleInputChange} className=" border-gray-400 border-2 text-gray-400  mb-3 mt-3 p-1  rounded w-full border-solid h-8 "/>
        </div>
        <div className="flex flex-row items-center hover:cursor-pointer space-x-2">
        <AddContactDialog/>
        <TiEdit  onClick={()=>setModify(!modify)} className="size-6"/>
        </div>
      </div>
     
      {<div className='shadow-md w-[400px] flex flex-col overflow-y-auto bg-gray-200 px-5 py-2 h-[400px] rounded-2xl' >
        <ul className='w-full p-0 '>
        {hasNotData && <div className="flex items-center font-semibold justify-center">Loading...</div>}
        {contactData.error && <div className='items-center font-semibold justify-center text-red-500 flex flex-col'><p>server error</p> <p>refresh again</p></div>}
       
        {search===''&&contactData && contactData.data && contactData.data?.map((e,index)=>
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
            
            {modify?'':<div className='flex flex-row space-x-2'>
            <DeleteContactDialog data={contactData.data[index]} />
            <UpdateContactDialog data={contactData.data[index]}/>
            </div>}
            
           
          </li>))}
          {search!==''&&contactData && contactData.data && filteredContacts?.map((e,index)=>
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
            
            {modify?'':<div className='flex flex-row space-x-2'>
            <DeleteContactDialog data={contactData.data[index]} />
            <UpdateContactDialog data={contactData.data[index]}/>
            </div>}
            
           
          </li>))}
        </ul>
      </div>}
      
      
    </div>
   
  )
}

const mapStateToProps=(state,filter)=>{
  const filterData=filter
  if(filterData===''){
    
  }
  
  return {
   contactData:state.contact
   
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    fetchContacts:()=>dispatch(fetchContacts()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact)
