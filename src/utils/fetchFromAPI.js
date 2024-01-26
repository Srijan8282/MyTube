import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '87abc3cbd9msha1f235df0894670p1ef4b3jsnb57fb4ce702a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
