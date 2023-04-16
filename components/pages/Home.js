import { StyleSheet, Text } from "react-native";
import React from "react";
import useProducts from "./../../utils/useProducts";
import PrimaryButton from "../atoms/PrimaryButton";
import pixelPerfect from "../../utils/pixelPerfect";
import BigContainer from "../atoms/BigContainer";
import BigCard from "./../molecules/BigCard";
import TopTexts from "./../molecules/TopTexts";
import Item from "../molecules/Item";
import ItemsList from "../organisms/ItemsList";
import appColors from "../../constants/colors";
import PointsSummary from "../organisms/PointsSummary";
import HomeTemplate from "../templates/HomeTemplate";
import { sumProductPoints } from "../../utils/sumProductPoints";
import Loader from "../organisms/Loader";

const Home = ({navigation}) => {
  const { products, productsLoading } = useProducts();
  if (productsLoading) {
    return <Loader />;
  }
  const onPressItem = (item) => {
    navigation.navigate("Detail",{item: item})
  }
  
  return (
    <HomeTemplate onPressItem={onPressItem}  monthString={"Diciembre"} products={products} itemsListTitle={"TUS MOVIMIENTOS"} />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: appColors.backgroundColor,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 32,
  },
  buttonStyle: {
    paddingHorizontal: pixelPerfect(154),
  },
  buttonTextStyle: {
    fontSize: pixelPerfect(16),
  },
});
