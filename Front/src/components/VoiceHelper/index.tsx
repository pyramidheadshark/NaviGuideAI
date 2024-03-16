import { useRef, useState } from 'react';
import Avatar from '../Avatar';
import Tip from './Tip';
import './style.css';
import MyMessage from '../Message/MyMessage';
import AIMessage from '../Message/AIMessage';

const VoiceHelper = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className='VoiceHelper'>
      <div className="Helper">
        <Avatar />
        <div className='white' />
      </div>
      <div className='Communication'>
        {messages.length
         ?
          <div ref={scrollRef} className='Messages'>
            {messages.map((message, index) => index % 2
             ? <MyMessage key={index}>{message}</MyMessage>
              : <AIMessage key={index}>{message}</AIMessage>)}
          </div>

          : <div className="Tips">
              <Tip message='Как попасть...' />
              <Tip message='Афиша' />
              <Tip message='Экскурс' />
              <Tip message='Расскажи о...' />
            </div>
        }
        <span className='Speak'>Я говорю...</span>

        <button className='VoiceButton' onClick={() => {

          setMessages([...messages, 'Слушаю']);
          scrollRef.current!.scrollTop = scrollRef.current!.scrollHeight;
        }}>
          <img src="https://cdn-icons-png.flaticon.com/512/3800/3800798.png" alt="microphone" />
        </button>
      </div>
    </div>
  );
};

export default VoiceHelper;