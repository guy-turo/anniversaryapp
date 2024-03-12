import React, {useState} from 'react'

const Main=()=> {
  const [message,setMessage] = useState('Enter the message to send')
  return (
    <div className='flex flex-col justify-evenly items-center w-full bg-gray-600 h-lvh'>
     <div className=" flex flex-col items-center  py-5  w-4/5 h-2/5 rounded-2xl bg-gray-50">
        <div className='flex flex-row justify-items-center'>
          <p>Full name : </p>
          <h3 >Kasongo kakumbi guy</h3>
        </div>
     </div>
      <div className="flex flex-col justify-evenly items-center h-2/6 ">
        <textarea name="Text1" cols="80" rows="3" value={message} onChange={(e)=>setMessage(e.target.value)} className="rounded sm:w-1/2 md:w-[60px] lg:w-4/6"></textarea>
        <div className="flex justify-evenly w-3/4  ">
          <button className="bg-yellow-800 w-60 rounded-md text-h text-white h-8" >AI personalization</button>
          <button className='bg-indigo-800 w-14 rounded-md text-white h-8'>send</button>
          
          <div className="flex flex-row items-center ">
          <input type="checkbox" />
          <p className="text-gray-400">Auto send</p>
          </div>

          
        </div>
      </div>
     
    </div>
  )
}

export default Main
