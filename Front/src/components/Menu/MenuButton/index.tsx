import { useEffect, useState } from 'react'
import './style.css'
import Blur from '../../Blur'

interface Props {
  children: React.ReactNode
  widget: React.ReactNode
  childName: string
}

const MenuButton = ({children, widget, childName}: Props) => {
  useEffect
  const click = () => {
    console.log()
    const QR: HTMLElement = document.querySelector(`.Blur > .${childName}`)!.parentNode as HTMLElement;
    QR.style.display = "inherit"
  }
  return (
    <>
      <div className='MenuButton' onClick={click}> 
        {children}
      </div>
      <Blur>{widget}</Blur>
    </>

  )
}

export default MenuButton
