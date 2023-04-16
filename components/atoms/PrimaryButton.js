import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import appColors from "../../constants/colors";
import pixelPerfect from "./../../utils/pixelPerfect";
import PropTypes from "prop-types";
import TextNunito from "./TextNunito";

const PrimaryButton = ({ label, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[defaultStyles.button, buttonStyle]}
    >
      <TextNunito style={[defaultStyles.text, textStyle]}>{label}</TextNunito>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const defaultStyles = StyleSheet.create({
  button: {
    backgroundColor: appColors.primaryColor,
    padding: pixelPerfect(14),
    borderRadius: pixelPerfect(10),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: appColors.textWhiteColor,
  },
});

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
};
