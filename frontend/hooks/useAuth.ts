// hooks/useAuth.ts

import { useMutation, useQuery } from '@tanstack/react-query';
import { signup, login, socialLogin, getSession} from '@/services/authService';

// Signup hook
export const useSignup = () => {
  return useMutation<any, Error, any>({
    mutationFn: signup,
  });
};

// Login hook
export const useLogin = () => {
  return useMutation<any, Error, any>({
    mutationFn: login,
  });
};

export const useSocialLogin = () => {  
  return useMutation<any, Error, any>({
    mutationFn: socialLogin,
  });
}

export const useSession = () =>
  {  
    return useMutation<any, Error, any>({
      mutationFn: getSession,
    });
  }
  // useQuery({
  //   queryKey: ['auth', 'session'],
  //   queryFn: getSession,
  //   staleTime: 5 * 60 * 1000, // 5 minutes
  // });

