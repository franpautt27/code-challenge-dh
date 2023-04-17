import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import appColors from "../../constants/colors";

const Loader = ({ testID }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        testID={testID}
        size="large"
        color={appColors.primaryColor}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColors.backgroundColor,
  },
});
