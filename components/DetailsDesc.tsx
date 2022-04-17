import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NftData } from '../constants/types'
import { EthPrice, NFTTitles } from './Info'
import { COLORS, FONTS, SIZES } from '../constants'

const DetailsDesc: React.FC<{ data: NftData }> = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)
  useEffect(() => {
    if (readMore) {
      setText(data.description)
    } else {
      setText(data.description.slice(0, 100))
    }
  }, [readMore, text])

  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NFTTitles title={data.name} subtitle={data.creator} />
        <EthPrice ethPrice={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && '...'}
          </Text>
          <Text
            style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font }}
            onPress={() => setReadMore((p) => !p)}
          >
            {readMore ? 'Show Less' : 'Show More'}
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc
