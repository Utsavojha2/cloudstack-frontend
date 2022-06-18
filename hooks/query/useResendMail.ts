import axios from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const resendAccountConfirmationMailRequest = async (userId: string) => {
  const response = await axios.post(
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
