import axios from 'axios'

const BASE_URL = import.meta.env.VITE_YOUTUBE_API_URL

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST
  }
};

export const FetchAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}${url}`,options)
  return data
}