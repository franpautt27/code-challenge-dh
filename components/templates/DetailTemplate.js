import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomImage from "../atoms/CustomImage";
import pixelPerfect from "./../../utils/pixelPerfect";
import TextNunito from "../atoms/TextNunito";
import appColors from "../../constants/colors";
import { parseDate } from "../../utils/parseDate";
import PrimaryButton from './../atoms/PrimaryButton';

const DetailTemplate = ({ item, onPress }) => {
  const newDate = parseDate(item.createdAt);
  return (
    <View style={styles.container}>
      <CustomImage style={styles.image} uri={item.image} />
      <View style={styles.textsContainer}>
        <TextNunito style={styles.text}>Detalles del producto</TextNunito>
        <TextNunito style={styles.detailText}>
          Comprado el {newDate}{" "}
        </TextNunito>
        <TextNunito style={styles.text}>Con esta compra acumulaste:</TextNunito>
        <TextNunito style={[styles.detailText, styles.bigText]}>
          {item.points + " puntos"}
        </TextNunito>
      </View>
      <PrimaryButton
      testID={"goBackButton"}
            onPress={onPress}
            buttonStyle={styles.button}
            label="Aceptar"
          />
    </View>
  );
};

export default DetailTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: pixelPerfect(19),
    // justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: pixelPerfect(20),
  },
  image: {
    width: "100%",
    height: pixelPerfect(350),
  },
  text: {
    marginTop: pixelPerfect(32),
    color: appColors.textGrayColor,
  },
  detailText: {
    marginTop: pixelPerfect(19),
    fontSize: pixelPerfect(16),
  },
  textsContainer: {
    width: "100%",
  },
  bigText: {
    fontSize: pixelPerfect(24),
  },
  button: {
    marginTop: pixelPerfect(47),
    width: "100%"
  }
});
