import * as React from "react"
import { View, TouchableHighlight, ViewStyle, TextStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { mergeAll, flatten } from "ramda"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { Icon } from "../../components/icon"
import { Button } from "../../components/button"
import { BottomNavbar } from "../../components/bottom-navbar"
import { color, spacing } from "../../theme"

const ROW: ViewStyle = {
  flexDirection: "row"
}
const CARDLIST: ViewStyle = {
  backgroundColor: "#6ab2e2",
  minHeight: 50,
  width: "100%",
  borderRadius: 7,
  overflow: "hidden",
  marginBottom: spacing[5]
}
const CARDLIST_TITLE: TextStyle = {
  fontSize: 12,
  fontWeight: "bold",
  padding: spacing[4]
}
const CARD: ViewStyle = {
  backgroundColor: "#59a5d8",
  padding: spacing[4],
  flexDirection: "row"
}
const NEWACC: ViewStyle = {
  backgroundColor: "#4f9bce",
  padding: spacing[4],
  flexDirection: "row"
}
const CARD_ITEM: ViewStyle = {
  backgroundColor: "#fdb714",
  height: 35,
  width: 60,
  borderRadius: 5,
  marginRight: spacing[3]
}
const CARD_ADD: ViewStyle = {
  backgroundColor: "#ebebeb",
  height: 35,
  width: 60,
  borderRadius: 5,
  marginRight: spacing[3],
  alignItems: "center",
  justifyContent: "center"
}
const CARD_TITLE: TextStyle = {
  color: "#1f5285",
  fontSize: 12,
  fontWeight: "600",
  marginBottom: spacing[1]
}
const CARD_NUMBER: TextStyle = {
  color: "#ffffff",
  fontWeight: "500",
  fontSize: 11
}
const PROFILE: ViewStyle = {
  flexDirection: "row",
  marginBottom: spacing[5]
}
const PROFILE_GREET: TextStyle = {
  color: '#7d7d7d',
  fontSize: 12
}
const PROFILE_NAME: TextStyle = {
  color: "#1f5285",
  fontWeight: "bold"
}
const ICON_LIST: ViewStyle = {
  marginVertical: spacing[3],
  alignItems: "center",
  justifyContent: "center"
}

class HomeIcon extends React.Component<any, {}> {
  constructor(props: any) {
    super(props)
  }

  render () {
    const ICON_TEXT: TextStyle = {
      textAlign: "center",
      color: "#1f5285",
      fontSize: 10,
      fontWeight: "bold"
    }
    return (
      <View style={{ alignItems: "center", width: 80 }}>
        <Icon style={{ height: 40 }} icon={this.props.iconName} />
        <Text style={ICON_TEXT}>{this.props.text}</Text>
      </View>
    )
  }
}

export interface HomeScreenProps extends NavigationScreenProps<{}> {}

export class HomeScreen extends React.Component<HomeScreenProps, {}> {
  nextScreen = () => this.props.navigation.navigate("login")

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Screen style={{ padding: spacing[5] }}>
          {/* Header */}
          <View style={ROW}>
            <View style={PROFILE}>
              <View></View>
              <View>
                <Text style={PROFILE_GREET}>Selamat Pagi!</Text>
                <Text style={PROFILE_NAME}>Michael Santoso</Text>
              </View>
            </View>
          </View>
          {/* Card List */}
          <View style={CARDLIST}>
            <Text style={CARDLIST_TITLE}>
              REKENING GIRO DAN TABUNGAN
            </Text>
            <View style={CARD}>
              <View style={CARD_ITEM} />
              <View>
                <Text style={CARD_TITLE}>GOLD DEBIT</Text>
                <Text style={CARD_NUMBER}>900 00 190 568 93</Text>
              </View>
            </View>
            <View>
              <TouchableHighlight
                underlayColor="#3e84b3"
                onPress={this.nextScreen}
                style={NEWACC}
              >
                <React.Fragment>
                  <View style={CARD_ADD}>
                    <Text style={{ fontWeight: "bold" }}>+</Text>
                  </View>
                  <View>
                    <Text style={CARD_TITLE}>PEMBUKAAN REKENING BARU</Text>
                    <Text style={CARD_NUMBER}>Buka Rekening / Tabungan & Deposito</Text>
                  </View>
                </React.Fragment>
              </TouchableHighlight>
            </View>
          </View>
          {/* Features */}
          <View style={[ROW, ICON_LIST]}>
            <HomeIcon iconName="transaksi" text="TRANSAKSI" />
            <HomeIcon iconName="linkaja" text="E-MONEY" />
            <HomeIcon iconName="linkaja" text="LINKAJA" />
            <HomeIcon iconName="pinjam" text="PINJAM DANA" />
          </View>
          <View style={[ROW, ICON_LIST]}>
            <HomeIcon iconName="asuransi" text="ASURANSI" />
            <HomeIcon iconName="investasi" text="INVESTASI" />
            <HomeIcon iconName="kredit" text="AJUKAN KREDIT" />
            <HomeIcon iconName="pinjam" text="PINJAM DANA" />
          </View>
          {/* Recommendation */}
          <View>
            <Text>REKOMENDASI</Text>
          </View>
          <Button text="test" onPress={this.nextScreen} />
        </Screen>
        <BottomNavbar />
      </View>
    )
  }
}