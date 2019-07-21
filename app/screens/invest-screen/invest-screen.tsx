import * as React from "react"
import { View, ViewStyle, TextStyle, Dimensions } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import Carousel from "react-native-snap-carousel"
import { Screen } from "../../components/screen"
import { Header } from "../../components/header"
import { Text } from "../../components/text"
import { spacing } from "../../theme"
import SliderEntry from "../register-screen-saving/slider-entry"

const DESC: TextStyle = {
  color: "#aaa",
  textAlign: "center",
  fontSize: 13,
  marginHorizontal: spacing[3]
}
const slider: ViewStyle = {
  marginTop: 15,
  overflow: 'visible' // for custom animations
}
const sliderContentContainer: ViewStyle = {
  paddingVertical: 10 // for custom animation
}
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

export interface InvestScreenProps extends NavigationScreenProps<{}> {}

export class InvestScreen extends React.Component<InvestScreenProps, {}> {
  goBack = () => this.props.navigation.goBack(null)
  _renderItem ({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }
  entries = [
    {
        title: 'Reksadana',
        subtitle: 'Nikmati berbagai macam investasi reksadana kami, sesuai kebutuhan Anda',
        illustration: require('./1.jpg')
    },
    {
        title: 'ORI & Sukuk Ritel',
        subtitle: 'Nikmati berinvestasi dengan obligasi negara',
        illustration: require('./2.jpg')
    },
    {
        title: 'Asuransi - AXA Mandiri',
        subtitle: 'Nikmati berbagai pilihan asuransi dari Axa Mandiri sesuai dengan kebutuhan Anda',
        illustration: require('./3.jpg')
    },
    {
        title: 'Asuransi Kesehatan - Mandiri InHealth',
        subtitle: 'Nikmati manfaat dari perlindungan jiwa bagi Anda dan keluarga tercinta',
        illustration: require('./4.jpg')
    },
    {
        title: 'General Insurance Jiwa Sejahtera',
        subtitle: 'PT Mandiri AXA General Insurance menyediakan beragam proteksi bagi harta benda Anda dari risiko kerugian apabila terjadi musibah tak terduga',
        illustration: require('./5.jpg')
    }
  ]

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Screen>
          <Header
            leftIcon="back"
            headerText="Rekomendasi Keuangan"
            titleStyle={{ color: "#1f5285" }}
            onLeftPress={this.goBack}
          />
          <View style={{ padding: spacing[4] }}>
            <Text style={DESC} text="Berikut ini rekomendasi produk keuangan yang sesuai dengan kebutuhan Anda." />
          </View>
          <Carousel
            ref={c => this._slider1Ref = c}
            data={this.entries}
            renderItem={this._renderItem}
            hasParallaxImages={true}
            sliderWidth={viewportWidth}
            itemWidth={220}
            containerCustomStyle={slider}
            contentContainerCustomStyle={sliderContentContainer}
            layout="default"
            autoplay={true}
            autoplayDelay={500}
            autoplayInterval={3000}
            loop={true}
          />
        </Screen>
      </View>
    )
  }
}