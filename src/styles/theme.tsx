import React, { createContext, useContext, PropsWithChildren } from "react";
import { TextStyle } from "react-native";

export const theme = {
  colors: {
    background: "#F7F5F3",
    surface: "#FFFFFF",
    primary: "#E86F39",
    text: "#1A1A1A",
    muted: "#9A958F",
    chipBg: "#F0E9E4",
    pillBg: "#F6EDE8"
  },
  spacing: (n: number) => n * 8,
  typography: {
    h1: { fontSize: 28, fontWeight: "700" } as TextStyle,
    body: { fontSize: 14 } as TextStyle,
    label: { fontSize: 12 } as TextStyle
  },
  borderRadius: 14
};

const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
