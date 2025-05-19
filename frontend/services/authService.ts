// services/authService.ts

import api from '@/lib/axios';

// export interface AuthResponse {
//   token: string;
//   user: {
//     id: string;
//     name: string;
//     email: string;
//   };
// }

// export interface LoginPayload {
//   email: string;
//   password: string;
// }

// export interface SignupPayload {
//   name: string;
//   email: string;
//   password: string;
// }

// POST /api/auth/signup
export const signup = async (data: any): Promise<any> => {
  const res = await api.post<any>('/auth/signup', data);
  return res.data;
};

// POST /api/auth/login
export const login = async (data: any): Promise<any> => {
  const res = await api.post<any>('/auth/login', data);
  return res.data;
};

// POST /api/auth/social-login
export const socialLogin = async (data: any): Promise<any> => {
  const res = await api.post<any>('/auth/social-login', data);
  return res.data;
}

// POST /api/auth/get-session
export const getSession = async (data:any): Promise<any> => {
  const res = await api.post<any>('/auth/session',data);
  return res.data;
}