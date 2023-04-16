import { StyleSheet, Text } from "react-native";
import React from "react";
import pixelPerfect from "./../../utils/pixelPerfect";
import appColors from "../../constants/colors";

const TextNunito = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextNunito;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: pixelPerfect(14),
    color: appColors.textBlackColor,
  },
});

// TextNunito.propTypes = {
//   style:PropTypes.object
// };
