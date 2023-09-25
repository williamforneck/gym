import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { AuthContextProvider } from "@contexts/AuthContext";
import { Loading } from "@components/Loading";
import { NativeBaseProvider } from "native-base";
import { Routes } from "@routes/index";
import { StatusBar } from "react-native";
import { THEME } from "./src/theme";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
