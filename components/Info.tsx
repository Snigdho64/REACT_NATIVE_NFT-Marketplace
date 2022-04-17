import { View, Text, Image, GestureResponderEvent } from 'react-native'
import React from 'react'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'
import { RectButton } from './Buttons'

export const NFTTitles: React.FC<{
  title: string
  subtitle: string
}> = ({ title, subtitle }) => (
  <View style={{ marginLeft: 10 }}>
    <Text
      style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.font,
        color: COLORS.primary,
      }}
    >
      {title}
    </Text>
    <Text
      style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.large,
        color: COLORS.primary,
      }}
    >
      {subtitle}
    </Text>
  </View>
)

export const EthPrice: React.FC<{ ethPrice: number }> = ({ ethPrice }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
      source={assets.eth}
      resizeMode="contain"
      style={{ width: 40, height: 40,marginRight:5 }}
    />
    <Text
      style={{
        fontFamily: FONTS.bold,
        fontSize: SIZES.font,
        color: '#16a52e',
      }}
    >
      {ethPrice}
    </Text>
  </View>
)

const People = () => (
  <View style={{ flexDirection: 'row' }}>
    {[assets.person01, assets.person02, assets.person03, assets.person04].map(
      (img, idx) => (
        <Image
          key={idx}
          source={img}
          resizeMode="contain"
          style={{
            width: 48,
            height: 48,
            marginLeft: idx === 0 ? 0 : -SIZES.font,
          }}
        />
      )
    )}
  </View>
)

const EndDate = () => (
  <View
    style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: '50%',
    }}
  >
    <Text
      style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary,
      }}
    >
      Ending In
    </Text>
    <Text
      style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary,
      }}
    >
      8h:42m
    </Text>
  </View>
)

export const SubInfo = () => (
  <View
    style={{
      width: '100%',
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
  >
    <People />
    <EndDate />
  </View>
)

const Info: React.FC<{
  name: string
  creator: string
  ethPrice: number
  handlePress: (e: GestureResponderEvent) => void | undefined
}> = ({ name, creator, ethPrice, handlePress }) => {
  return (
    <View>
      <SubInfo />
      <View style={{ paddingHorizontal: 10 }}>
        <NFTTitles title={name} subtitle={creator} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            padding: 10,
          }}
        >
          <EthPrice ethPrice={ethPrice} />
          <RectButton handlePress={handlePress} />
        </View>
      </View>
    </View>
  )
}

export default Info
