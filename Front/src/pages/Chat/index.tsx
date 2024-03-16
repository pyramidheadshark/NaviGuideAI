import './style.css'
import VoiceHelper from '../../components/VoiceHelper';
import { useEffect } from 'react';
import Menu from '../../components/Menu';

const Chat = () => {

  useEffect(() => {
    const avatar: HTMLDivElement = document.querySelector('.avatar')!
    
    avatar.style.width = "150px"
    avatar.style.height = "150px"
  }, [])

  return (
    <>
      <VoiceHelper/>
      <Menu/>
    </>
    
  )
}

export default Chat
