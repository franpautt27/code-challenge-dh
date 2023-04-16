import { StyleSheet, View } from "react-native";
import React from "react";
import BigCard from "../molecules/BigCard";
import TextNunito from "../atoms/TextNunito";
import pixelPerfect from './../../utils/pixelPerfect';
import appColors from "../../constants/colors";

const PointsSummary = ({style, totalPoints, monthString}) => {
  return (
    <View style={style}>
      <TextNunito style={styles.title}>TUS PUNTOS</TextNunito>
      <View style={styles.bigCardContainer}>
        <BigCard monthString={monthString} totalPoints={totalPoints} />
      </View>
    </View>
  );
};

export default PointsSummary;

const styles = StyleSheet.create({
    title: {
        marginBottom: pixelPerfect(20),
        color: appColors.textGrayColor
    },
    bigCardContainer: {justifyContent: "center", alignItems: "center"}
});
