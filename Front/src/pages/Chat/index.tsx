import './style.css'
// import Avatar from '../../components/Avatar';
import VoiceHelper from '../../components/VoiceHelper';
import { useEffect } from 'react';

const Chat = () => {

  useEffect(() => {
    const avatar: HTMLDivElement = document.querySelector('.avatar')!
    avatar.style.width = "150px"
    avatar.style.height = "150px"

  }, [])

  return (
    
      <VoiceHelper/>
    
  )
}

export default Chat
