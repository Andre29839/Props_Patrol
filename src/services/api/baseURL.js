import axios from 'axios';

const instance = axios.create({
  baseURL: `https://wallet.goit.ua/api`,
});

export default instance;
