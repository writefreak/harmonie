import { useFonts } from "expo-font";
import { Redirect } from "expo-router";

export default function index() {
  const [fontsLoaded] = useFonts({
    Queno: require("../assets/fonts/queno.otf"),
    Quera: require("../assets/fonts/quera.otf"),
    Stetica: require("../assets/fonts/stetica.otf"),
    SteticaReg: require("../assets/fonts/steticaReg.otf"),
    ZtNature: require("../assets/fonts/ZTNature.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Redirect href={"/(onboarding)/screen"} />;
}
