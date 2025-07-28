import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home2.css";
import logo from './assets/Group 64.png'; 

function Home2() {
  const navigate = useNavigate();

  return (
    <div className='home-content'>
        <img src={logo} alt="" className='photo' />
        <p className='Back-title'>Под крылом своего <br></br><span className='back-title-blue'>личного продюсера</span></p>
        <p className='Back-sub'>Тебе пишут стратегию продвижения <br></br>и собирают команду под задачи <br></br>из лучших специалистов</p>

      <button className='Btn-home button-home-2' onClick={() => navigate('/start3')}>
        Продолжить
      </button>
    </div>
  );
}

export default Home2;
