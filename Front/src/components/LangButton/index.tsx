import './style.css'

interface Props {
  images: string
  text: string
}

const LangButton = ({images, text}: Props) => {

  return (
    <div className='LangButton'>
      <img src={images} alt="Slide 1" />
      <span> {text} </span>
    </div>
  )
}

export default LangButton
