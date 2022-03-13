import React, { useState } from 'react';
import { Card } from '../../Card/Card';
import { InputUI } from '../InputUI/InputUI';

import axios from 'axios';

export const GifExpertApp = () => {

  const [cards, setCards] = useState([]);
  const URL = "https://api.giphy.com/v1/stickers/search?";
  const api_key = "api_key=I4ub2ABDFChWF6nfeWp8yNiJIhRNDpsF";
  const query = "&q="
  const limit = "&limit=16";

  const getGifs = (event) => {
    axios.get(`${URL}${api_key}${query}${encodeURI(event.target.value)}${limit}`)    
    .then(response => {
      setCards(response.data.data);
      console.log(response.data.data);      
    })
    .catch(error => {
      console.log(error);
    })
  }

  return(
    <div className='div-gif'>
      <h1>Gif Expert App</h1>
      <hr />
      <InputUI
        holder="Look Somethings"
        event={getGifs}
        value="Prueba"        
      />      
      <main className='main-card'>
        {
          cards.map(card => (
            <Card
              key={card.id+card.title}
              title={card.title}
              img={card.images.downsized_medium.url}
            />))
        }
      </main>
    </div>
  )
}
