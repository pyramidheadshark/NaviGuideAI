import './style.css'
import '../style.css'

interface Props{
  children: string;
}
const AIMessage = ({children}: Props) => {

  return (
    <div className='AIMessage Message'>
      {children}
    </div>
  )
}

export default AIMessage
