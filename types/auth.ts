export interface LoginAuth {
  email: string;
  password: string;
}

export interface RegisterAuth extends LoginAuth {
  fullName: string;
  confirmPassword: string;
  birthDate: Date;
}

export interface TokenPayload {
  accessToken: string;
  is_verified?: boolean;
}
