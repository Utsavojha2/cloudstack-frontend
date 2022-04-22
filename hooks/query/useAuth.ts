import axios from 'axios';
import { useQuery } from 'react-query';

const isLoggedIn = async () => {
  const response = await axios.get('/v1/api/user/me');
  return response;
};

export const useAuth = () => {
  return useQuery('/current-user', isLoggedIn, {
    retry: false,
  });
};
