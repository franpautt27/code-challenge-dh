import { StyleSheet } from "react-native";
import React from "react";
import appColors from "../../constants/colors";
import TextNunito from "./TextNunito";

const MinusSign = () => {
  return <TextNunito style={styles.minusNegative}>-</TextNunito>;
};

export default MinusSign;
const styles = StyleSheet.create({
  minusNegative: {
    color: appColors.danger,
  },
});
