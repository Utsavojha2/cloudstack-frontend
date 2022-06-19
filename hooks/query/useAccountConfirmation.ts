import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { ITokenPayload } from 'types/auth';
import { axiosInstance } from 'config/axios.config';

type ConfirmationTokenPayload = Pick<ITokenPayload, 'accessToken'>;

const getConfirmationStatus = async (token: string) => {
  const response = await axiosInstance.get(
    `/v1/api/account-confirmation/${token}`
  );
  return response.data;
};

export const useConfirmationStatus = (
  token: string,
  options?: UseQueryOptions<ConfirmationTokenPayload>
) => {
  return useQuery(
    '/user-confirmation-status' as QueryKey,
    () => getConfirmationStatus(token),
    options
  );
};
