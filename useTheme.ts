import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const twTheme:any = fullConfig.theme;

export const useTheme = () => fullConfig.theme;
