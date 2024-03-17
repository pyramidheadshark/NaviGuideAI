import { useRef, useState } from 'react';
import Avatar from '../Avatar';
import Tip from './Tip';
import './style.css';
import MyMessage from '../Message/MyMessage';
import AIMessage from '../Message/AIMessage';
import { ReactMic, ReactMicStopEvent } from 'react-mic';
import { voicePush } from '../../https/API';


const VoiceHelper = () => {

  const [stste, setState] = useState({record: false})

   
  const startRecording = () => {
    setState({ record: true });
  }
 
  const stopRecording = () => {
    setState({ record: false });
  }


  const onData = (recordedBlob: any) => {
  }
 
const onStop = async (recordedData: ReactMicStopEvent) => {
    console.log('recorded blob', recordedData.blob);
    const response: Blob = await voicePush(recordedData.blob) as unknown as Blob
    console.log(response.data)
    const messageFromResponse = await response.data.text()
    console.log(messageFromResponse)
    const newJSONMessage = JSON.parse(messageFromResponse)
    console.log(newJSONMessage)
    const newMessage = newJSONMessage.message
    console.log(newMessage)
    const newMessage2 = newJSONMessage.chat_response
    console.log(newMessage)
    setMessages((messages) => [...messages, newMessage, newMessage2 ])
  }



  const [messages, setMessages] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className='VoiceHelper'>
      <div className="Helper">
        <Avatar />
        <div className='white' >
          <img src="https://rada.ru/wp-content/uploads/2017/10/Swipe_ot_Tweets_Nearby_inc-2.jpg" alt="" />
        </div>
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
        <span className='Speak'>Задайте мне вопрос...</span>

        <button 
          className='VoiceButton' 
          onClick={() => {
            !stste.record 
              ? startRecording()
              : stopRecording()
          }}>
        
          <ReactMic
            record={stste.record}
            className="sound-wave"
            onStop={onStop}
            onData={onData}
            strokeColor="#000000"
            backgroundColor="#FF4081" />

        </button>
      </div>
    </div>
  );
};

export default VoiceHelper;