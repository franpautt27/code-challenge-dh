import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import CustomImage from "../atoms/CustomImage";
import TextNunito from "../atoms/TextNunito";
import pixelPerfect from "./../../utils/pixelPerfect";
import { Ionicons } from "@expo/vector-icons";
import appColors from "./../../constants/colors";
import PlusSign from "../atoms/PlusSign";
import MinusSign from "../atoms/MinusSign";
import { parseDate } from "../../utils/parseDate";
import PropTypes from "prop-types";

const Item = ({ product, createdAt, points, image, is_redemption, onPress }) => {
  const newDate = parseDate(createdAt);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <CustomImage uri={image} />
      <View style={styles.titleAndDescriptionContainer}>
        <TextNunito>{product}</TextNunito>
        <TextNunito style={styles.descriptionText}>{newDate}</TextNunito>
      </View>
      <View style={styles.numberContainer}>
        <TextNunito>
          {" "}
          {is_redemption ? <MinusSign /> : <PlusSign />}
          {points}
        </TextNunito>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          name="send-sharp"
          size={pixelPerfect(13)}
          color={appColors.textBlackColor}
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(Item);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "space-between",
    paddingVertical: pixelPerfect(8),
    paddingHorizontal: pixelPerfect(16),
  },
  titleAndDescriptionContainer: {
    marginLeft: pixelPerfect(16),
    width: pixelPerfect(180),
  },
  descriptionText: {
    fontFamily: "Nunito_400Regular",
    fontSize: pixelPerfect(12),
  },
  numberContainer: {
    justifyContent: "center",
    // paddingRight: pixelPerfect(60),
  },

  numberText: {
    fontSize: pixelPerfect(16),
  },
  iconContainer: {
    position: "absolute",
    right: pixelPerfect(5),
    top: "50%",
  },
});

Item.propTypes = {
  product: PropTypes.string,
  createdAt: PropTypes.string,
  points: PropTypes.number,
  image: PropTypes.string,
  is_redemption: PropTypes.bool,
};
