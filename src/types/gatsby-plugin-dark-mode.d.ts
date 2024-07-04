declare module 'gatsby-plugin-dark-mode' {
    import { ComponentType } from 'react';
  
    interface ThemeTogglerProps {
      children: (props: { theme: string, toggleTheme: (theme: string) => void }) => JSX.Element;
    }
  
    export const ThemeToggler: ComponentType<ThemeTogglerProps>;
  }
  