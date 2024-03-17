import './style.css'
import SlideShow from '../../components/SlideShow';
import { Link } from 'react-router-dom';

const Entrance = () => {

  const images = [
    "https://cdn2.tu-tu.ru/image/pagetree_node_data/1/c5338ccdf94843a66ed3a41772dc6120",
    "https://fs.tonkosti.ru/74/1q/741q7njztqo8gw0ssss4k4w0g.jpg",
    "https://img.magput.ru/pics/large/640b24f9-af5f-422a-9f8a-68f433dd6c94.jpg",
  ];

  return (
    <>
        <header className='HeaderEntrance'>Информационный Стенд</header>
        <SlideShow images={images}/>
        <footer>
          <Link to='/Langs'>          
            <button>
              Нажмите чтобы нажать
            </button>
          </Link>
        </footer>     
    </>
  
  )
}

export default Entrance
