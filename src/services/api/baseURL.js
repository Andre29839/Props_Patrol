import axios from 'axios';

const instance = axios.create({
  baseURL: `https://wallet.b.goit.study/docs`,
});

export default instance;
