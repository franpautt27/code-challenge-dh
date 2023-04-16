import { StyleSheet, View } from 'react-native'
import React from 'react'
import TextNunito from '../atoms/TextNunito'
import pixelPerfect from './../../utils/pixelPerfect';

const TopTexts = ({spacingStyle, title, subtitle}) => {
  return (
    <View style={spacingStyle}>
      <TextNunito style={styles.firstText}>{title}</TextNunito>
      <TextNunito style={styles.secondText}>{subtitle}</TextNunito>
    </View>
  )
}

export default TopTexts

const styles = StyleSheet.create({
    firstText: {
        fontSize: pixelPerfect(20)
    },
    secondText: {
        fontFamily: "Nunito_400Regular",
        fontSize: pixelPerfect(16)
    },
})