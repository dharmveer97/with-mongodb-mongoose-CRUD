import { Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '../icons';

export default function DarkMode() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <Switch
      css={{ marginTop: '10px' }}
      checked={isDark}
      size="xl"
      iconOn={<SunIcon filled />}
      iconOff={<MoonIcon filled />}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  );
}
