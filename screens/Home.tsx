import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components'
import { COLORS, NFTData } from '../constants'
const Home = () => {
  const [nftName, setNftName] = useState('')
  const [nftData, setNftData] = useState<any[]>()
  useEffect(() => {
    if (!nftName.trim()) {
      setNftData(NFTData)
    } else {
      const nftData = NFTData.filter(({ name }) =>
        name
          .replace(' ', '')
          .toLowerCase()
          .match(new RegExp(`${nftName.replace(' ', '').toLowerCase()}`, 'gmi'))
      )
      setNftData(nftData)
    }
  }, [nftName])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NFTCard data={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <HomeHeader nftName={nftName} setNftName={setNftName} />
            }
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
