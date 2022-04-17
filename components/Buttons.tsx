import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheetProperties,
  ViewStyle,
} from 'react-native'
import React, { StyleHTMLAttributes } from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const CircleButton: React.FC<{
  styles?: ViewStyle
  handlePress: (e: GestureResponderEvent) => void | undefined
  imageUrl: ImageSourcePropType
}> = ({ styles, handlePress, imageUrl }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS,
        ...styles,
      }}
      onPress={handlePress}
    >
      <Image
        source={imageUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  )
}

export const RectButton: React.FC<{
  styles?: ViewStyle
  handlePress: (e: GestureResponderEvent) => void | undefined
}> = ({ styles, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: 100,
        ...styles,
      }}
      onPressOut={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.large,
          color: COLORS.white,
          textAlign: 'center',
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}
