import 'react-slideshow-image/dist/styles.css';
import { Route, Routes } from 'react-router-dom';
import Entrance from './pages/Entrance';
import LangChoise from './pages/LangChoise';
import Chat from './pages/Chat';
import YandexMap from './pages/YandexMap';

const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Entrance/>} />
        <Route path='/Langs' element={<LangChoise/>} />
        <Route path='/Chat' element={<Chat/>} />
        <Route path='/Map' element={<YandexMap />} />
      </Routes>
    );
};

export default App;