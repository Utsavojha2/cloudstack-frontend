import {
  MutationKey,
  QueryKey,
  useMutation,
  useQuery,
  UseQueryOptions,
} from 'react-query';
import omit from 'lodash/omit';
import { axiosInstance } from 'config/axios.config';
import { ISettingsInfo } from 'types/settings';

interface IUserSettings extends ISettingsInfo {
  userId: string;
}

export enum ServerStateKeysEnum {
  FETCH = '/fetch-user-settings',
  SUBMIT = '/submit-user-settings',
}

const submitUserSettings = (settings: IUserSettings) => {
  return axiosInstance.post(`/v1/api/${settings.userId}/settings`, {
    settings: omit(settings, ['userId']),
  });
};

const fetchUserSettings = (userId: string) => async () => {
  const response = await axiosInstance.get<ISettingsInfo>(
    `/v1/api/${userId}/settings`
  );
  return response.data;
};

export const useSubmitSettings = (mutationOptions = {}) => {
  return useMutation(
    ServerStateKeysEnum.SUBMIT as MutationKey,
    submitUserSettings,
    mutationOptions
  );
};

export const useFetchSettings = (
  id: string,
  options?: UseQueryOptions<ISettingsInfo>
) => {
  return useQuery(
    ServerStateKeysEnum.FETCH as QueryKey,
    fetchUserSettings(id),
    options
  );
};
