import axios from "axios";

const base_url = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '9ceff322b9mshc62a0176061f60bp17ec86jsn8abf45ad3e55',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const FetchData = async (url) => {
    const { data } = await axios.get(`${base_url}/${url}`, options)
    return data.items
  }