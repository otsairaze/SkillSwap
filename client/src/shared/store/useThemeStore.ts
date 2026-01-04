import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { THEME_LOCAL_STORAGE_KEY } from '@/shared/constants/localstorage';

interface ThemeState {
  isLight: boolean;
  setLight: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isLight: false,
      setLight: (value) => {
        document.documentElement.classList.toggle('light', value);
        set({ isLight: value });
      },
    }),
    {
      name: THEME_LOCAL_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state?.isLight && typeof window !== 'undefined') {
          document.documentElement.classList.add('light');
        }
      },
    },
  ),
);
