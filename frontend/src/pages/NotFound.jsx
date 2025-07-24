import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="p-6 text-center">
    <h1 className="text-3xl font-bold mb-4">404</h1>
    <p>Страница не найдена.</p>
    <Link to="/" className="text-blue-500 mt-4 block">Вернуться на главную</Link>
  </div>
);

export default NotFound;