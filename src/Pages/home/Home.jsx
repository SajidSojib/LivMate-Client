import React from 'react';
import Hero from '../../Components/footer/hero/Hero';
import Stats from '../../Components/footer/hero/Stats';
import { useLoaderData } from 'react-router';
const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
           <Hero></Hero>
           <Stats data={data}></Stats> 
        </div>
    );
};

export default Home;