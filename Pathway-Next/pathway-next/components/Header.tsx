import React from 'react'
import ReturnBtn from './ReturnBtn'

interface Props {
    title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div className='header mb-20 mt-20 flex space-x-4 justify-center'>
        <ReturnBtn />
        <h2 className='text-[30px] font-bold'>{title}</h2>
    </div>
  )
}

export default Header;