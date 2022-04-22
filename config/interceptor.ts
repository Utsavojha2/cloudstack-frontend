import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const onRequest =
  (token?: string) =>
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.headers) {
      config.headers['Content-Type'] = 'application/json';
      if (!!token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  };

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

export default function setupInterceptors(
  axiosInstance: AxiosInstance,
  accessToken?: string
): AxiosInstance {
  axiosInstance.interceptors.request.use(
    onRequest(accessToken),
    onRequestError
  );
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
