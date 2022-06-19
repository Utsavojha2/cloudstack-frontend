import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { axiosInstance } from 'config/axios.config';
import { IUserResponse } from 'types/auth';

const isLoggedIn = async () => {
  const response = await axiosInstance.get<IUserResponse>('/v1/api/user/me');
  return response.data;
};

export const useAuth = (options?: UseQueryOptions<IUserResponse>) => {
  return useQuery('/current-user' as QueryKey, isLoggedIn, options);
};
