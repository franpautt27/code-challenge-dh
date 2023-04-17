import {
  useFonts,
  Nunito_800ExtraBold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";

const useCustomFonts = () => {
  let [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_400Regular,
  });
  return { fontsLoaded };
};

export default useCustomFonts;
