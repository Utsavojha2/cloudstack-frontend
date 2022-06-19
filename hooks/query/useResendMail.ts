import { useMutation, UseMutationOptions } from 'react-query';
import { axiosInstance } from 'config/axios.config';

const resendAccountConfirmationMailRequest = async (userId: string) => {
  const response = await axiosInstance.post(
    `/v1/api/${userId}/send-account-confirmation`
  );
  return response;
};

export const useResendMail = (
  id: string,
  mutationOptions?: UseMutationOptions
) => {
  return useMutation(
    '/resend-confirmation-email',
    () => resendAccountConfirmationMailRequest(id),
    mutationOptions
  );
};
