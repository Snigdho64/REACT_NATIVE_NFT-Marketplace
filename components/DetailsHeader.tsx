import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { detailsScreenProp } from '../constants/types'
import { CircleButton } from './Buttons'
import { assets } from '../constants'
import { StatusBar } from 'expo-status-bar'

const DetailsHeader: React.FC<{ image: ImageSourcePropType }> = ({ image }) => {
  const navigation = useNavigation<detailsScreenProp>()
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image
        source={image}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      />
      <CircleButton
        imageUrl={assets.left}
        handlePress={() => navigation.goBack()}
        styles={{ top: 15, left: 15 }}
      />
      <CircleButton
        imageUrl={assets.heart}
        handlePress={() => {}}
        styles={{ top: 15, right: 15 }}
      />
    </View>
  )
}

export default DetailsHeader
