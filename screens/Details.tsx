import { RouteProp, useRoute } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FocusedStatusBar } from '../components'
import { RectButton } from '../components/Buttons'
import DetailsBid from '../components/DetailsBid'
import DetailsDesc from '../components/DetailsDesc'
import DetailsHeader from '../components/DetailsHeader'
import { SubInfo } from '../components/Info'
import { COLORS, FONTS, SIZES } from '../constants'
import { detailsScreenProp, RootStackParamList } from '../constants/types'

const Details = () => {
  const {
    params: { data },
  } = useRoute<RouteProp<RootStackParamList, 'Details'>>()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff76',
          zIndex: 1,
        }}
      >
        <RectButton
          styles={{
            marginBottom: 20,
            minWidth: '80%',
            backgroundColor: 'teal',
          }}
          handlePress={() => {}}
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
          alignItems: 'center',
        }}
        ListHeaderComponent={() => (
          <View style={{ width: Dimensions.get('window').width }}>
            <DetailsHeader image={data.image} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids?.length && (
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Details
