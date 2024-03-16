import { Link } from 'react-router-dom'
import './style.css'

const Exit = () => {
  const click = () => {
    window. close()
  }
  return (
    <div className='Exit'>
      <span>
        Вы точно хотете выйти?
      </span>
      <Link to='/'>
        <button onClick={click}>
          Выйти
        </button>
      </Link>
    </div>
  )
}

export default Exit
