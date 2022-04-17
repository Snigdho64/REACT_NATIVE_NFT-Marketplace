import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { Bid } from '../constants/types'
import { COLORS, FONTS, SIZES } from '../constants'
import { EthPrice } from './Info'

const DetailsBid: React.FC<{ bid: Bid }> = ({ bid }) => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width - 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base,
        paddingVertical: SIZES.base,
        backgroundColor: '#ccc',
        borderRadius: 20,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: SIZES.base,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid Placed by{' '}
          <Text
            selectionColor={'#ffaacc'}
            style={{
              color: '#921b4e',
              fontFamily: FONTS.bold,
              fontSize: SIZES.font,
            }}
          >
            {bid.name}
          </Text>
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.secondary,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <EthPrice ethPrice={bid.price} />
    </View>
  )
}

export default DetailsBid
