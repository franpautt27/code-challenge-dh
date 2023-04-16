import { StyleSheet, Image } from "react-native";
import React from "react";
import pixelPerfect from "./../../utils/pixelPerfect";
import { PropTypes } from "prop-types";
import urls from "./../../constants/urls";

const CustomImage = ({ uri = urls.BLANK_IMAGE_URL, style }) => {
  return (
    <Image
      style={[styles.image, style]}
      source={{
        uri: uri,
      }}
    />
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  image: {
    width: pixelPerfect(45),
    height: pixelPerfect(45),
    borderRadius: pixelPerfect(10),
  },
});

CustomImage.propTypes = {
  uri: PropTypes.string,
};
