import React,{useState} from 'react'
import DialogHelper from './DialogHelper'
import { TiDelete } from "react-icons/ti"

function DeleteContactDialog({data, handleDelete}) {
  const [openSingle, setOpenSingle]=useState(false)

  const handleCloseSingle=()=>setOpenSingle(!openSingle)
  return (
    <>
      <button onClick={()=>setOpenSingle(!openSingle) }><TiDelete /></button>
            <DialogHelper open={openSingle} onClose={handleCloseSingle} >
              <div className=' pt-3 w-fit rounded px-1 pb-3 h-fit flex flex-col shadow-lg bg-slate-100'>
                <p className='flex justify-center font-semibold p-2 rounded bg-green-500 text-white w-full mb-4 self-center'>
                  {data.emailAddress}
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

export default DeleteContactDialog
