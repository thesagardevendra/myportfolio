import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Proficiency from './components/Proficiency';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Accomplishment from './components/Accomplishment';
import Achievements from './components/Achievements';
import Qualification from './components/Qualification';

function App() {
  return (
    <div className="dark:bg-gray-50 bg-gray-950  relative">
      <Header />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/proficiency' element={<Proficiency />} />
        <Route path='/accomplishment' element={<Accomplishment />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/qualification' element={<Qualification />} />
        
      </Routes>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
