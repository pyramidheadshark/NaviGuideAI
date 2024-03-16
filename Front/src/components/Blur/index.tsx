// import { useRef, useState } from 'react';

import { useEffect, useRef } from 'react';
import './style.css';

interface Props {
  children: React.ReactNode
}
const Blur = ({children} :Props) => {
  // const [messages, setMessages] = useState<string[]>([]);
  // const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const body = document.querySelector('body')
    if(body)
      body.style.overflow = "hidden"
  })
  const widget = useRef<HTMLDivElement>(null)
  const click = () => {
    widget.current!.style.display = "none"
  }
  return (
    <div  
      ref={widget} 
      className='Blur' 
      onClick={click}>
      {children}
    </div>
  );
};

export default Blur;