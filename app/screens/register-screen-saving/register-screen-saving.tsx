import * as React from "React"
import { View, ViewStyle, TextStyle, SafeAreaView } from "react-native"
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

export interface RegisterScreenSavingProps extends NavigationScreenProps<{}> {}

export class RegisterScreenSaving extends React.Component<RegisterScreenSavingProps, {}> {
  goBack = () => this.props.navigation.goBack(null)
  confirm = () => this.props.navigation.navigate("register_kyc")
  _renderItem ({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }
  entries = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
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
              sliderWidth={300}
              itemWidth={100}
              layout="default"
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
