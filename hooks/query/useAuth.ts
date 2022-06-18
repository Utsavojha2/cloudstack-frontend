import axios from 'axios';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { UserResponse } from 'types/auth';

const isLoggedIn = async () => {
  const response = await axios.get<UserResponse>('/v1/api/user/me');
  return response.data;
};

export const useAuth = (options?: UseQueryOptions<UserResponse>) => {
  return useQuery('/current-user' as QueryKey, isLoggedIn, options);
};
