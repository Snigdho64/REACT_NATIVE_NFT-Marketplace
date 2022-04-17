import { ImageSourcePropType } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined | any
  Details: { data: NftData }
}

export type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>
export type detailsScreenProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>

export type Bid = {
  id: string
  name: string
  price: number
  image: ImageSourcePropType
  date: string
}

export type NftData = {
  id: string
  name: string
  creator: string
  price: number
  description: string
  image: ImageSourcePropType
  bids?: Bid[]
}
