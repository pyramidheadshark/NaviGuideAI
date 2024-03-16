import Avatar from '../Avatar'
import Tip from './Tip'
import './style.css'

interface Props {}

const VoiceHelper = () => {

  return (
    <div className='VoiceHelper'>
      <div className="Helper">
        <Avatar/>
        <div className='white'/>
      </div>
      <div className='Communication'>
        <div className="Tips">
          <Tip message='Как попасть ...'/>
          <Tip message='Афиша'/>
          <Tip message='Экскурс'/>
          <Tip message='Расскажи о ...'/>
        </div>
        {/* <div> */}
          <span className='Speak'>Я говорю ...</span>
        {/* </div> */}
        <button className='VoiceButton'>
          <img src="https://cdn-icons-png.flaticon.com/512/3800/3800798.png" alt="microphone" />
        </button>
      </div>
    </div>
  )
}

export default VoiceHelper
