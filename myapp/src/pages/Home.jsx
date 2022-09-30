import Slider from '../components/Slider';
import React from 'react'
import Announcementt from '../components/Announcement';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import PopularProducts from '../components/PopularProducts';

const Home = () => {
  return (
    <>
      <Announcementt />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProducts />
    </>
  )
}

export default Home;
