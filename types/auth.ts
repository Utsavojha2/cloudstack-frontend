export interface ILoginAuth {
  email: string;
  password: string;
}

export interface IRegisterAuth extends ILoginAuth {
  fullName: string;
  confirm_password: string;
  birthDate: Date;
}

export interface ITokenPayload {
  accessToken: string;
  is_verified: boolean;
}

export interface IUserResponse {
  id: string;
  email: string;
  fullName: string;
  birthDate: Date;
  is_verified: boolean;
  confirmAccountTokenUpdatedAt: string;
}

export type ITokenType = string | null;
