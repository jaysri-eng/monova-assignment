import "react-native-gesture-handler";
import "react-native-reanimated";
import { StatusBar } from "react-native";
import { ThemeProvider } from "./src/styles/theme";
import Navigation from "./src/navigation";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider children={
      <ThemeProvider>
        <>
          <StatusBar barStyle="dark-content" />
          <Navigation />
        </>
      </ThemeProvider>
    } />
  );
}
