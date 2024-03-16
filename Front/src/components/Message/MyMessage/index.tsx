import './style.css'
import '../style.css'
interface Props{
  children: string;
}
const MyMessage = ({children}: Props) => {

  return (
    <div className='MyMessage Message'>
      {children}
    </div>
  )
}

export default MyMessage
