import axios from 'axios'
const KEY = 'AIzaSyDtZoH-4cv7Rm_MC46PXSDb8UJFcxauAEM'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
