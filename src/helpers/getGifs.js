const [cards, setCards] = useState([]);
  const URL = "https://api.giphy.com/v1/stickers/search?";
  const api_key = "api_key=I4ub2ABDFChWF6nfeWp8yNiJIhRNDpsF";
  const query = "&q="
  const limit = "&limit=12";

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