import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const fromData = location.state ? location.state.from : null;

  return (
    <div className="card card-body">
      <h2>Home</h2>
      <div>이전 페이지 : {fromData}</div>
    </div>
  );
};

export default Home;
