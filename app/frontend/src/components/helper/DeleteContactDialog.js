import React,{useState} from 'react'
import DialogHelper from './DialogHelper'
import { TiDelete } from "react-icons/ti"
import {connect} from 'react-redux'
import {deleteContact} from '../../redux/contact_reducer/contact_action';



function DeleteContactDialog({data ,deleteContact}) {
  const [openSingle, setOpenSingle]=useState(false)

  const handleCloseSingle=()=>setOpenSingle(!openSingle)
  const handleDelete=( id)=>{
    
    deleteContact(id)
    handleCloseSingle()
     
   }
  return (
    <>
      <button onClick={()=>setOpenSingle(!openSingle) }><TiDelete  className='size-6 bg-red-500 rounded-full text-white'/></button>
            <DialogHelper open={openSingle} onClose={handleCloseSingle} >
              <div className=' pt-3 w-fit rounded px-1 pb-3 h-fit flex flex-col shadow-lg bg-slate-100'>
                <p className='flex justify-center font-semibold p-2 rounded bg-green-500 text-white w-full mb-4 self-center'>
                  {data.fullName}
                </p>
                <div className='flex flex-row justify-between space-x-2'>
                <button className='bg-black text-white p-1 w-32 rounded' onClick={handleCloseSingle}>CLOSE</button>
                <button className="bg-red-600 text-white p-1 w-32 rounded " onClick={()=>handleDelete(data._id)}>DELETE</button>
                </div>
                </div>
            </DialogHelper>
    </>
  )
}
const mapDispatchToProps=(dispatch)=>{
  return {
    deleteContact:(id)=>dispatch(deleteContact(id)),  
  }
}
export default connect(null,mapDispatchToProps)(DeleteContactDialog)
