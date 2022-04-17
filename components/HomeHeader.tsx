import { View, Text, TextInputTextInputEventData, Image } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { assets, COLORS, FONTS, SIZES } from '../constants'
import { TextInput } from 'react-native-gesture-handler'

const HomeHeader: React.FC<{
  nftName: string
  setNftName: Dispatch<SetStateAction<string>>
}> = ({ setNftName, nftName }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.font,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ alignItems: 'center', marginTop: SIZES.extraLarge }}>
          <Image
            source={assets.person03}
            style={{ width: 45, height: 45 }}
            resizeMode="contain"
          />
          <Image
            source={assets.badge}
            style={{
              position: 'absolute',
              bottom: -10,
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.medium,
          }}
        >
          Hello Jane Doe 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: '#efcefc',
          }}
        >
          Let's find you a masterpiece
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#8483834f',
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
        }}
      >
        <Image
          source={assets.search}
          style={{ resizeMode: 'contain', width: 20, height: 20 }}
        />
        <TextInput
          placeholder="Serch for NFTs"
          style={{
            marginLeft: 10,
            borderWidth: 0,
            flex: 1,
            fontFamily: FONTS.regular,
            fontSize: SIZES.medium,
            color: 'white',
            fontWeight: '500',
          }}
          value={nftName}
          onChangeText={(value) => setNftName(value)}
        />
      </View>
    </View>
  )
}

export default HomeHeader
