import * as React from "React"
import { View, ViewStyle, TextStyle, SafeAreaView, Dimensions } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import Carousel from "react-native-snap-carousel"
import { Screen } from "../../components/screen"
import { Text } from "../../components/text"
import { TextField } from "../../components/text-field"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { spacing } from "../../theme"
import SliderEntry from "./slider-entry"

const ROW: ViewStyle = {
  flexDirection: "row"
}
const STATE_VIEW: ViewStyle = {
  backgroundColor: "#fdb714",
  height: 50,
  width: 50,
  borderRadius: 100,
  alignItems: "center",
  justifyContent: "center",
  marginRight: spacing[2]
}
const STATE_TEXT: TextStyle = {
  fontSize: 20,
  fontWeight: "bold"
}
const STATE_ALL: TextStyle = {
  color: "#6ab2e2",
  fontSize: 20
}
const STATE: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  margin: spacing[5]
}
const HEADER_TITLE: TextStyle = {
  color: "#1f5285",
  fontWeight: "500"
}
const LOGIN: ViewStyle = {
  backgroundColor: "#6ab2e2",
  paddingVertical: spacing[4] + spacing[1],
  marginTop: spacing[3]
}
const OTP_INTRO: TextStyle = {
  color: "#aaa",
  textAlign: "center",
  marginBottom: spacing[3],
  marginHorizontal: spacing[4],
  fontSize: 14
}
const OTP_INPUT: TextStyle = {
  textAlign: "center",
  fontSize: 45,
  marginBottom: spacing[5]
}
const FOOTER: ViewStyle = {
  paddingHorizontal: spacing[5],
  paddingVertical: spacing[4]
}
const CAROUSEL: ViewStyle = {
  marginTop: spacing[5],
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
}

const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD'
}

const safeArea: ViewStyle = {
  flex: 1,
  backgroundColor: colors.black
}
const container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background1
}
const gradient: ViewStyle = {
  // ...StyleSheet.absoluteFillObject
}
const scrollview: ViewStyle = {
  flex: 1
}
const exampleContainer: ViewStyle = {
  paddingVertical: 30
}
const exampleContainerDark: ViewStyle = {
  backgroundColor: colors.black
}
const exampleContainerLight: ViewStyle = {
  backgroundColor: 'white'
}
const title: TextStyle = {
  paddingHorizontal: 30,
  backgroundColor: 'transparent',
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center'
}
const titleDark: TextStyle = {
  color: colors.black
}
const subtitle: TextStyle = {
  marginTop: 5,
  paddingHorizontal: 30,
  backgroundColor: 'transparent',
  color: 'rgba(255, 255, 255, 0.75)',
  fontSize: 13,
  fontStyle: 'italic',
  textAlign: 'center'
}
const slider: ViewStyle = {
  marginTop: 15,
  overflow: 'visible' // for custom animations
}
const sliderContentContainer: ViewStyle = {
  paddingVertical: 10 // for custom animation
}
const paginationContainer: ViewStyle = {
  paddingVertical: 8
}
const paginationDot: ViewStyle = {
  width: 8,
  height: 8,
  borderRadius: 4,
  marginHorizontal: 8
}
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export interface RegisterScreenSavingProps extends NavigationScreenProps<{}> {}

export class RegisterScreenSaving extends React.Component<RegisterScreenSavingProps, {}> {
  goBack = () => this.props.navigation.goBack(null)
  confirm = () => this.props.navigation.navigate("register_kyc")
  _renderItem ({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }
  entries = [
    {
        title: 'Tabungan Rupiah',
        subtitle: 'Kemudahan menabung untuk kenyamanan hidup',
        illustration: require('./1.jpg')
    },
    {
        title: 'Tabungan Valas',
        subtitle: 'Keuntungan lebih untuk simpanan valuta asing',
        illustration: require('./2.jpg')
    },
    {
        title: 'Tabungan Rencana',
        subtitle: 'Mewujudkan hidup di masa depan dengan pengelolaan keuangan yang lebih terencana',
        illustration: require('./3.jpg')
    },
    {
        title: 'TabunganKu',
        subtitle: 'Hidup lebih sejahtera bersama TabunganKu',
        illustration: require('./4.jpg')
    },
    {
        title: 'Deposito Rupiah',
        subtitle: 'Pilihan investasi yang memberi keuntungan dan rasa aman',
        illustration: require('./5.jpg')
    },
    {
        title: 'Deposito Valas',
        subtitle: 'Pilihan investasi untuk ragam pilihan mata uang',
        illustration: require('./6.jpg')
    }
  ]

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Screen>
          <Header
            leftIcon="back"
            onLeftPress={this.goBack}
            titleStyle={HEADER_TITLE}
            headerText="Pilih Jenis Tabungan"
          />
          <View style={{ paddingHorizontal: spacing[5] }}>
            {/* State */}
            <View style={STATE}>
              <View style={STATE_VIEW}>
                <Text text="3" style={STATE_TEXT} />
              </View>
              <Text text="/ 5" style={STATE_ALL} />
            </View>
            {/* Form */}
          </View>
          <View style={CAROUSEL}>
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
          </View>
        </Screen>
        <SafeAreaView>
          <View style={FOOTER}>
            <Button
              onPress={this.confirm}
              style={LOGIN}
              textStyle={{ fontSize: 14, fontWeight: "600" }}
              text="KONFIRMASI"
            />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}
