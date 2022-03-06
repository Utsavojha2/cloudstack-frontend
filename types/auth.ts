export interface LoginAuth {
  email: string
  password: string
}

export interface RegisterAuth extends LoginAuth {
  userName: string
  confirmPassword: string
  agreeTerms: boolean
}
