export interface LoginAuth {
  email: string;
  password: string;
}

export interface RegisterAuth extends LoginAuth {
  fullName: string;
  confirm_password: string;
  birthDate: Date;
}

export interface TokenPayload {
  accessToken: string;
  is_verified?: boolean;
}
