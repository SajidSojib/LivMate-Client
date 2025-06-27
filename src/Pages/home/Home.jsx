import React from 'react';
import Hero from '../../Components/hero/Hero';
import Stats from '../../Components/hero/Stats';
import { useLoaderData } from 'react-router';
import Faq from '../../Components/hero/Faq';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigation } from 'react-router';
import Feature from '../../Components/hero/Feature';

const Home = () => {
    const posts = useLoaderData();
    console.log(posts);
    const [data, setData] = useState();
    useEffect(() => {
      fetch("/stats.json")
        .then((res) => res.json())
        .then((d) => setData(d));
    }, []);
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
           <Feature posts={posts}></Feature>
           <Faq questions={questions}></Faq>
           <Stats data={data}></Stats> 
        </div>
    );
};

export default Home;