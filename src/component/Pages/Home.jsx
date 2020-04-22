import React from 'react';
import Header from '../UI/Home/Header/Header';
import TopResturants from '../UI/Home/Main/TopResturants';
import TopMenu from '../UI/Home/Main/TopMenu';

const Home = props => (
  <div className="container">
    <Header />
    <TopResturants />
    <TopMenu />
  </div>
);

export default Home;
