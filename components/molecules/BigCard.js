import { StyleSheet, View } from 'react-native'
import React from 'react'
import BigContainer from './../atoms/BigContainer';
import TextNunito from './../atoms/TextNunito';
import appColors from '../../constants/colors';
import pixelPerfect from './../../utils/pixelPerfect';

const BigCard = ({monthString, totalPoints}) => {
    const unit = "pts"
  return (
    <BigContainer style={styles.container}>
      <TextNunito style={[styles.text, styles.absoluteText]}>{monthString}</TextNunito>
      <View style={styles.viewStyle}>
        <TextNunito style={[styles.text, styles.bigText]}>{totalPoints + " " + unit}</TextNunito>
      </View>
    </BigContainer>
  )
}

export default BigCard

const styles = StyleSheet.create({
    text: {
        color: appColors.textWhiteColor,
        fontSize: pixelPerfect(16)
    },
    absoluteText: {
        position: "absolute",
        left: pixelPerfect(20),
        top: pixelPerfect(20)
    },
    bigText: {
        fontSize: pixelPerfect(32),
        paddingVertical: pixelPerfect(50)
    },
    container: {
        width: pixelPerfect(340)
    },
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
    }
})