import './style.css'
import SlideShow from '../../components/SlideShow';
import { Link } from 'react-router-dom';

const Entrance = () => {

  const images = [
    "https://cdn2.tu-tu.ru/image/pagetree_node_data/1/c5338ccdf94843a66ed3a41772dc6120",
    "https://fs.tonkosti.ru/74/1q/741q7njztqo8gw0ssss4k4w0g.jpg",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <>
        <header>Информационный Стенд</header>
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
