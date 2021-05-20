import axios from 'axios';

const KEY = 'AIzaSyBFB1lluAc1kNYncLzAxdTvin9l1CWWRSQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});