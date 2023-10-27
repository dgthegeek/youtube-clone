import axios from "axios";

const base_url = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResult: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchData = async(url) => {
    const { data } = await axios.get(`${base_url}/${url}`, options)
    return data
  }