import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home3.css";
import logo from './assets/Group 65.png'; 

function Home3() {
  const navigate = useNavigate();

  return (
    <div className='home-content'>
        <img src={logo} alt="" className='photo' />
        <p className='Back-title'>Миллионы просмотров<br></br><span className='back-title-blue'>и сотни продаж</span></p>
        <p className='Back-sub'>Мы запускаем контент, который <br></br>приносит реальные деньги</p>

      <button className='Btn-home' onClick={() => navigate('/login')}>
        Начать
      </button>
    </div>
  );
}

export default Home3;
