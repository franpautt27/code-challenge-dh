import React from "react";

import useCustomFonts from "./utils/useCustomFonts";
import MainStack from "./navigators/MainStack";

export default function App() {
  const { fontsLoaded } = useCustomFonts();
  if(!fontsLoaded) {
    return null;
  }

  return <MainStack />
}
