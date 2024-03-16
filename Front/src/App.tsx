import './App.css'
import 'react-slideshow-image/dist/styles.css';
import { Route, Routes } from 'react-router-dom';
import Entrance from './pages/Entrance';
import LangChoise from './pages/LangChoise';

const App = () => {
    return (
      <>
        <Routes>
          <Route path='/' element={<Entrance/>} />
          <Route path='/Langs' element={<LangChoise/>} />

        </Routes>
      </>
    );
};

export default App;