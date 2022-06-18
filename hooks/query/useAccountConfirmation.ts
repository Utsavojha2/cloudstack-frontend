import axios from 'axios';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { TokenPayload } from 'types/auth';

type ConfirmationTokenPayload = Pick<TokenPayload, 'accessToken'>;

const getConfirmationStatus = async (token: string) => {
  const response = await axios.get(`/v1/api/account-confirmation/${token}`);
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
