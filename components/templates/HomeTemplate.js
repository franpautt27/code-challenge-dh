import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import appColors from "../../constants/colors";
import TopTexts from "../molecules/TopTexts";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import pixelPerfect from "../../utils/pixelPerfect";
import PointsSummary from "../organisms/PointsSummary";
import ItemsList from "../organisms/ItemsList";
import RowContainer from "../atoms/RowContainer";
import PrimaryButton from "../atoms/PrimaryButton";

import {
  filterRedeemedProducts,
  filterWonProducts,
} from "../../utils/filterProducts";
import { sumProductPoints } from "../../utils/sumProductPoints";
import { formatTotal } from "../../utils/formatTotal";

const HomeTemplate = ({ onPressItem, style, products, itemsListTitle, monthString }) => {
  useEffect(() => {
    setProductsList(products);
  }, []);
  const [productsList, setProductsList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const numericTotalPoints = sumProductPoints(productsList);
  const totalPoints = formatTotal(numericTotalPoints)




  const onWinButtonPress = () => {
    setIsFiltered(true);
    const wonProducts = filterWonProducts(products);
    setProductsList(wonProducts);
  };
  const onRedeemedButtonPress = () => {
    setIsFiltered(true);
    const redeemedProducts = filterRedeemedProducts(products);
    setProductsList(redeemedProducts);
  };
  const onAllButtonPress = () => {
    setIsFiltered(false);
    setProductsList(products);
  };
  return (
    <SafeAreaView style={[styles.container, style]}>
      <TopTexts title={"Bienvenido de vuelta!"} subtitle={"Ruben Rodriguez"} />
      <PointsSummary
        monthString={monthString}
        totalPoints={totalPoints}
        style={styles.summaryContainer}
      />
      <ItemsList
      onPressItem={onPressItem}
        style={styles.itemsList}
        itemsListTitle={itemsListTitle}
        products={productsList}
      />
      {isFiltered ? (
        <View style={[styles.buttonsContainer, styles.centerButton]}>
          <PrimaryButton
            onPress={onAllButtonPress}
            buttonStyle={styles.allButton}
            label="Todos"
          />
        </View>
      ) : (
        <RowContainer style={styles.buttonsContainer}>
          <PrimaryButton
            onPress={onWinButtonPress}
            buttonStyle={styles.button}
            label="Ganados"
          />
          <PrimaryButton
            onPress={onRedeemedButtonPress}
            buttonStyle={styles.button}
            label="Canjeados"
          />
        </RowContainer>
      )}
    </SafeAreaView>
  );
};

export default HomeTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.backgroundColor,
    paddingHorizontal: pixelPerfect(20),
    paddingTop: pixelPerfect(40),
  },
  summaryContainer: {
    marginTop: pixelPerfect(20),
  },
  itemsList: {
    marginTop: pixelPerfect(20),
  },
  button: {
    width: pixelPerfect(170),
  },
  allButton: {
    width: pixelPerfect(353),
  },
  buttonsContainer: {
    marginTop: pixelPerfect(40),
  },
  centerButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
