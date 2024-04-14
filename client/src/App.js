import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Proficiency from './components/Proficiency';
import { Route, Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { Bio } from './constants';
import Sagar from './assets/Sagar.jpg';
import Chatbot from './components/Chatbot';
import Accomplishment from './components/Accomplishment';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="dark:bg-gray-50 bg-gray-950 h-screen overflow-y-scroll overflow-x-hidden relative">
      <Header />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/proficiency' element={<Proficiency />} />
        <Route path='/accomplishment' element={<Accomplishment />} />
        <Route path='/achievements' element={<Achievements />} />
      </Routes>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
