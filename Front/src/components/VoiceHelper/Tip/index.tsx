import './style.css'

interface Props {
  message: string;
}

const Tip = ({message}: Props) => {

  return (
    <div className='Tip'>{message}</div>
  )
}

export default Tip
