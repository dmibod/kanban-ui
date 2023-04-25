import {
  SIGN_IN,
  SIGN_OUT,
} from './types';
import server from '../apis/index';

export const signIn = token => async dispatch => {
  const response = await server.post('/Tenant/Token', {}, { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } });

  dispatch({ type: SIGN_IN, payload: response.data.User });
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

