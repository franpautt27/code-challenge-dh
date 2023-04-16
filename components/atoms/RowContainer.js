import { StyleSheet, View } from "react-native";
import React from "react";

const RowContainer = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default RowContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
