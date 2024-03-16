import { useState } from 'react'
import './style.css'

const ToggleMenuButton = () => {
  const [open, setOpen] = useState(false)
  const click = () => {
    const menu: HTMLDivElement | null = document.querySelector(".Menu")
    const VoiceHelper: HTMLDivElement | null = document.querySelector(".VoiceHelper")

    if(VoiceHelper)
      VoiceHelper.style.paddingRight = !open ? "0" : "40px"
    if(menu)
      menu.style.height = !open ? "10vh" : "80vh"
    
    setOpen((open) => !open)
  }
  return (
      <div className='ToggleMenuButton' onClick={click}>
        { open ? "↑" : "↓" }
      </div>
  )
}

export default ToggleMenuButton
