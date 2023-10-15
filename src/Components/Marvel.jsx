import React, { useState, useEffect } from 'react'
import axios from 'axios';
import marvelBackgroundImg from '../assets/marvel2.jpg';
import logo from '../assets/marvel-logo.png';
import { Card } from './Card';

const Marvel = () => {
    const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=70f797e82a29021926a608487a3e560a&hash=2b10bf628fd82b099c89737b95a27f35");
    const [item, setItem] = useState();

    useEffect(()=> {
        const fetchData = async () => {
            const res = await axios.get(url);
            setItem(res.data.data.results);
        }
        fetchData();
    }, [url])
    return (
        <>
        <div className='header'>
            <div className='bg'>
                <img src={marvelBackgroundImg} alt="marvel-background" />
            </div>
            <div className='search-bar'>
                <img src={logo} alt="logo" />
                <input type="search" placeholder="Search Here" className="search" />
            </div>
        </div>
        <div className="content">
            {
                (!item) ? <p>Not Found</p> : <Card data={item} />
            }
        </div>
        </>
    );
}

export default Marvel; 