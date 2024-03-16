import 'react-slideshow-image/dist/styles.css';
import { Route, Routes } from 'react-router-dom';
import Entrance from './pages/Entrance';
import LangChoise from './pages/LangChoise';
import Chat from './pages/Chat';

const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Entrance/>} />
        <Route path='/Langs' element={<LangChoise/>} />
        <Route path='/Chat' element={<Chat/>} />
      </Routes>
    );
};

export default App;