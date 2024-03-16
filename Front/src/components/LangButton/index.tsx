import { Link } from 'react-router-dom'
import './style.css'

interface Props {
  images: string
  text: string
}

const LangButton = ({images, text}: Props) => {

  return (
    <Link to='/Chat' className='LangButton'>
      <img src={images} alt="Slide 1" />
      <span className='LangButtonText'> {text} </span>
    </Link>
  )
}

export default LangButton
