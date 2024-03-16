
import './style.css'
import { Slide } from 'react-slideshow-image';

interface Props {
  images: string[]
}

const SlideShow = ({images}: Props) => {

  return (
    <Slide>
      {images.map((image, index) => {
        return (
          <div className="each-slide-effect" key={index}>
            <div style={{ 'backgroundImage': `url(${image})` }}></div>
          </div>
        )
      })}
    </Slide>  
  )
}

export default SlideShow
