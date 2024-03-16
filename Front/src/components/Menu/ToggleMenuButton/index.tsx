import { useState } from 'react'
import './style.css'

const ToggleMenuButton = () => {
  const [open, setOpen] = useState(false)
  const click = () => {
    const menu: HTMLDivElement = document.querySelector(".Menu")!
    const VoiceHelper: HTMLDivElement = document.querySelector(".VoiceHelper")!
    VoiceHelper.style.paddingRight = !open ? "0" : "40px"
    menu.style.height = !open ? "10vh" : "80vh"
    setOpen((open) => !open)
  }
  return (
      <div className='ToggleMenuButton' onClick={click}>
        { open  ? "+" : "-" }
      </div>
  )
}

export default ToggleMenuButton
