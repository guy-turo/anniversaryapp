import React from 'react'

const  Navbar=({name,imageLink, clickMe})=> {
  return (
    <div>
      <h2>{name}</h2>
      <div onClick={clickMe}>
      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={imageLink} alt="profile"/>
      </div>
    </div>
  )
}

export default Navbar
