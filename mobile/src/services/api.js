import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.168.4:3333'
});
