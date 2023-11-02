import React, {BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Announcement from './components/Announcement';
import About from './components/About';
import CountDownTimer from './components/CountDownTimer';
import InputAnnouncement from './components/InputAnnouncement';
import OutputAnnouncement from './components/OutputAnnouncement';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/other' Component={About}/>
          <Route path='/' Component={Announcement} />
          <Route path='/countdowntimer' Component={CountDownTimer} />
          <Route path='/inputannounce' Component={InputAnnouncement} />
          <Route path='/outputannounce' Component={OutputAnnouncement} />
        </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;
