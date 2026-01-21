import { useThemeStore } from '@/shared/store/useThemeStore';
import { Switch } from '@/shared/ui/switch';

export const ThemeSwitcher = () => {
  const { isLight, setLight } = useThemeStore();
  return (
    <div className={'flex items-center gap-2'}>
      <span>Change theme</span>
      <Switch checked={isLight} onCheckedChange={setLight} id={'light-mode'} />
    </div>
  );
};
