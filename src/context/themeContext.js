import { createContext } from 'react';
import { theme } from 'theme';

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export { ThemeContext };
