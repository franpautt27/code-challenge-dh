import React, { useLayoutEffect } from "react";
import DetailTemplate from "../templates/DetailTemplate";

const Detail = ({ navigation, route }) => {
  const { item } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.product,
    });
  }, [navigation, route]);
  const goBack = () => {
    navigation.goBack();
  };
  return <DetailTemplate onPress={goBack} item={item} />;
};

export default Detail;


