import React from 'react'

interface HeaderInterface{
  title:string
}

export const Header = (props:HeaderInterface) => {
  return (
    <div className='bg-blue-500 px-10 rounded-lg h-16 text-white text-2xl flex flex-row items-center'>
      {props.title}
    </div>
  )
}
