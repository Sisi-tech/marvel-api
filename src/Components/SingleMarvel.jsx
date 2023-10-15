import React, { useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleMarvel = () => {
    const {id} = useParams();
    const [item, setItem] = useState();
    const fetch = async () => {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=70f797e82a29021926a608487a3e560a&hash=2b10bf628fd82b099c89737b95a27f35`)
        setItem(res.data.data.results[0]);
    }
    fetch();

    return (
        <>
         {
            (!item) ? "" : (
                <div className='box-content'>
                    <div className='right-box'>
                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                    </div>
                    <div className='left-box'>
                        <h1>{item.name}</h1>
                        <h4>{item.description}</h4>
                    </div>
                </div>
            )
         }
        </>
    );
}

export default SingleMarvel;