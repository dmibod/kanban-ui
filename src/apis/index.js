import axios from 'axios';
import { api } from './urls';

export default axios.create({
  baseURL: api
});