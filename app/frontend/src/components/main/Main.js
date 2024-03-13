import React, {useState} from 'react'
import DialogHelper from '../helper/DialogHelper'

const Main=()=> {
  const [message,setMessage] = useState('Enter the message')
  const [open,setOpen]=useState(false)
  const handleClose=()=>{
    setOpen(!open)
  }
  const [gptMessage,setGptMessage]= useState('Enter some  key ')
  return (
    <div className='flex flex-col shadow-md justify-around items-center bg-gray-200 h-[480px]  rounded-2xl'>
     <div className=" flex flex-row justify-center items-center  py-5  w-4/5 h-2/5 rounded-2xl bg-gray-50">
       <p className="flex md:text-8xl text-6xl text-red-600">00</p>
       <p className="flex md:text-8xl text-6xl">:00:</p>
       <p className="flex md:text-8xl text-6xl">00</p>
     </div>
      <div className="flex flex-col justify-evenly items-center h-2/6 ">
        <textarea name="Text1" cols="80" rows="3" value={message} onChange={(e)=>setMessage(e.target.value)} className="rounded p-1 sm:w-1/ w-[300px] md:w-[60px] lg:w-4/6"></textarea>
        <div className="flex justify-evenly md:w-3/4 w-4/4 px-2 space-x-1">
          <button className="bg-yellow-800 w-60 rounded-md text-h text-white h-8"  onClick={()=>setOpen(!open)}>AI personalization</button>
          <DialogHelper open={open} onClose={handleClose} >
          <div className=' pt-3 w-[600px] rounded-3xl px-10 h-[400px] flex flex-col justify-evenly shadow-lg bg-slate-100'>
            <div className="w-full h-[300px]  rounded-3xl bg-white border-black border-2  flex place-items-center">
              
            </div>
            <input type="text" value={gptMessage} onChange={(e)=>setGptMessage(e.target.value)} className="w-full rounded border-black border-2"/>
          </div>
        </DialogHelper>
          <button className='bg-indigo-800 w-14 rounded-md text-white h-8'>send</button>
          
          <div className="flex flex-row items-center space-x-2">
          <input type="checkbox" />
          <p className="text-gray-400">Auto send</p>
          </div>

          
        </div>
      </div>
     
    </div>
  )
}

export default Main
