import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import BigContainer from "../atoms/BigContainer";
import appColors from "../../constants/colors";
import Item from "../molecules/Item";
import pixelPerfect from "../../utils/pixelPerfect";
import TextNunito from "../atoms/TextNunito";
const ItemsList = ({ onPressItem, products, itemsListTitle, style }) => {
    
  return (
    <View style={style}>
      <TextNunito style={styles.title}>{itemsListTitle}</TextNunito>
      <BigContainer style={styles.bigCard}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Item
              onPress={()=>{
                onPressItem(item)
              }}
                createdAt={item.createdAt}
                product={item.product}
                points={item.points}
                image={item.image}
                is_redemption={item.is_redemption}
              />
            );
          }}
        />
      </BigContainer>
    </View>
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  bigCard: {
    backgroundColor: appColors.textWhiteColor,
    // width: pixelPerfect(353),
    height: pixelPerfect(350),
    padding: 0,
    padding: pixelPerfect(10),
  },
  title: {
    color: appColors.textGrayColor,
    marginBottom: pixelPerfect(20),
  },
});
