import React from "react";
import useProducts from "./../../utils/useProducts";
import HomeTemplate from "../templates/HomeTemplate";
import Loader from "../organisms/Loader";

const Home = ({ navigation }) => {
  const { products, productsLoading } = useProducts();
  if (productsLoading) {
    return <Loader testID={"loader"} />;
  }
  const onPressItem = (item) => {
    navigation.navigate("Detail", { item: item });
  };

  return (
    <HomeTemplate
      onPressItem={onPressItem}
      monthString={"Diciembre"}
      products={products}
      itemsListTitle={"TUS MOVIMIENTOS"}
    />
  );
};

export default Home;
