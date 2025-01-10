import { useFonts } from "expo-font";
import { View } from "react-native";
import { Main } from "./src/components/Main";

export default function App() {
  const [isFontsLoading] = useFonts({
    "GeneralSans-400": require("./src/assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-500": require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-600": require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoading) return null;

  return <Main />;
}
