import { View, Image, ImageSourcePropType } from 'react-native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CircleButton } from './Buttons'
import Info from './Info'
import { homeScreenProp, NftData } from '../constants/types'

const NFTCard: React.FC<{
  data: NftData
}> = ({ data }) => {
  const navigation = useNavigation<homeScreenProp>()
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: '100%',
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton
          imageUrl={assets.heart}
          styles={{ top: 10, right: 10 }}
          handlePress={() => {}}
        />
      </View>
      <Info
        name={data.name}
        creator={data.creator}
        ethPrice={data.price}
        handlePress={() => {
          navigation.navigate('Details', { data })
        }}
      />
    </View>
  )
}

export default NFTCard
