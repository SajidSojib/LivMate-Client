import React from 'react';
import Hero from '../../Components/hero/Hero';
import Stats from '../../Components/hero/Stats';
import { useLoaderData } from 'react-router';
import Faq from '../../Components/hero/Faq';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigation } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    const [questions, setQuestions] = useState();
    useEffect(() => {
      fetch("/faq.json")
        .then((res) => res.json())
        .then((d) => setQuestions(d));
    }, []);
    
    const navigation=useNavigation();

    if(navigation.state === "loading") return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
    return (
        <div>
           <Hero></Hero>
           <Faq questions={questions}></Faq>
           <Stats data={data}></Stats> 
        </div>
    );
};

export default Home;