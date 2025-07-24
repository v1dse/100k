import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import logo from './assets/Group 63.png'; 

function Home() {
  const navigate = useNavigate();

  return (
    <div className='home-content'>
      
        <img src={logo} alt="" className='photo' />
        <p className='Back-title'>Твоя личная команда <br></br><span className='back-title-blue'>под 0% комиссии</span></p>
        <p className='Back-sub'>Плати 0% наценки за свою<br></br> команду по продвижению</p>

      <button className='Btn-home' onClick={() => navigate('/start2')}>
        Продолжить
      </button>
    </div>
  );
}

export default Home;
