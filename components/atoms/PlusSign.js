import { StyleSheet } from "react-native";
import React from "react";
import TextNunito from "./TextNunito";
import appColors from "../../constants/colors";

const PlusSign = () => {
  return <TextNunito style={styles.plusPositive}>+</TextNunito>;
};

export default PlusSign;

const styles = StyleSheet.create({
  plusPositive: {
    color: appColors.success,
  },
});
