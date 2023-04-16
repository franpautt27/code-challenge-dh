import { StyleSheet, View } from "react-native";
import React from "react";
import appColors from "../../constants/colors";
import pixelPerfect from "./../../utils/pixelPerfect";

const BigContainer = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default BigContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.primaryColor,
    padding: pixelPerfect(21),
    borderRadius: pixelPerfect(20),
  },
});


