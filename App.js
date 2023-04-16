import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getProducts } from "./services/products";
import Home from "./components/pages/Home";
import useCustomFonts from "./utils/useCustomFonts";
import MainStack from "./navigators/MainStack";

export default function App() {
  const { fontsLoaded } = useCustomFonts();
  if(!fontsLoaded) {
    return null;
  }

  return <MainStack />
}
