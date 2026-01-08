import { create } from 'zustand';
import type { User } from '@/features/Auth';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;

  setUser: (user: User | null) => void;
  logout: (user: User) => void;
  checkAuth?: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),
  logout: (user) =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));
