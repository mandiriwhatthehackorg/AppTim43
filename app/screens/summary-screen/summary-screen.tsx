import * as React from "react"
import { View, TextStyle, ViewStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../components/screen"
import { Header } from "../../components/header"
import { Text } from "../../components/text"
import { spacing } from "../../theme"
import { Button } from "../../components/button";

const BG: ViewStyle = {
  backgroundColor: "#1f5285"
}
const BG_WHITE: ViewStyle = {
  backgroundColor: "#fff",
  height: "100%",
  marginTop: spacing[5] * 5
}
const ROW: ViewStyle = {
  flexDirection: "row"
}
const CONTENT: ViewStyle = {
  position: "absolute",
  top: spacing[5] * 3.5,
  marginTop: spacing[0],
  height: "100%",
  paddingHorizontal: spacing[5],
  paddingTop: spacing[5]
}
const ACCOUNT: ViewStyle = {
  backgroundColor: "#fff",
  marginBottom: spacing[4],
  borderRadius: 5,
  paddingHorizontal: spacing[5],
  paddingTop: spacing[4],
  paddingBottom: spacing[5],
  shadowColor: "black",
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowOpacity: 0.2,
  zIndex: 1,
  elevation: 1
}
const ACCOUNT_TITLE: TextStyle = {
  color: "#47b9de",
  fontWeight: "500",
  fontSize: 12
}
const ACCOUNT_NUMBER: TextStyle = {
  color: "#003d78",
  fontWeight: "600",
  fontSize: 19,
  marginTop: spacing[1]
}
const RECOMMEND: ViewStyle = {
  backgroundColor: "#6ab2e2",
  paddingVertical: spacing[4] + spacing[1],
  marginTop: spacing[3],
  width: "49%"
}
const PLAN: ViewStyle = {
  backgroundColor: "rgba(255,255,255,0.8)",
  paddingVertical: spacing[4] + spacing[1],
  marginTop: spacing[3],
  borderColor: "#47b9de",
  borderWidth: 2,
  width: "49%"
}
const PROGRESS_BASE: ViewStyle = {
  backgroundColor: "#f0f5f6",
  height: 10,
  borderRadius: 100,
  width: "100%",
  overflow: "hidden",
  marginTop: spacing[4]
}
const PROGRESS_BAR: ViewStyle = {
  backgroundColor: "#ffb855",
  width: "80%",
  height: 10,
  borderRadius: 100,
}
const PROGRESS_TITLE: TextStyle = {
  fontSize: 12,
  fontWeight: "500"
}
const PROGRESS_NUMBER: TextStyle = {
  fontSize: 20,
  fontWeight: "500",
  marginTop: spacing[1]
}
const PROGRESS_DATE: TextStyle = {
  color: "#47b9de",
  fontWeight: "600",
  width: "35%"
}
const PROGRESS_UNTIL: TextStyle = {
  color: "#ccd0d1",
  fontWeight: "600",
  width: "30%",
  textAlign: "center"
}
const HISTORY: TextStyle = {
  textAlign: "center",
  color: "#ccd0d1",
  fontWeight: "600",
  marginTop: spacing[4] * 2,
  marginBottom: spacing[4]
}
const HISTORY_DATE: TextStyle = {
  color: "#47b9de",
  fontSize: 12,
  fontWeight: "500"
}
const HISTORY_TITLE: TextStyle = {
  color: "#003d78",
  fontWeight: "600",
  fontSize: 14
}

export interface SummaryScreenProps extends NavigationScreenProps<{}> {}

export class SummaryScreen extends React.Component<SummaryScreenProps, {}> {
  goBack = () => this.props.navigation.goBack(null)

  render () {
    const history = [
      {
        date: "16 Juli 2019",
        title: "Bayar Listrik",
        amount: "1.800.000"
      },
      {
        date: "13 Juli 2019",
        title: "Bayar PDAM",
        amount: "150.000"
      },
      {
        date: "12 Juli 2019",
        title: "Transfer E-COMMERCE",
        amount: "850.303"
      },
      {
        date: "08 Juli 2019",
        title: "Top Up WALLET YUHU",
        amount: "75.000"
      }
    ]
    let historyList = history.map((h, i) => {
      return (
        <View style={[ROW, {marginVertical: spacing[2]}]} key={i}>
          <View style={{width: "70%"}}>
            <Text style={HISTORY_DATE} text={h.date} />
            <Text style={HISTORY_TITLE} text={h.title} />
          </View>
          <View style={{width: "30%"}}>
            <Text style={[HISTORY_DATE, {color: "#c3c7c8", textAlign: "right"}]} text="Uang Keluar" />
            <Text style={[HISTORY_TITLE, {color: "#85898a", textAlign: "right"}]} text={h.amount} />
          </View>
        </View>
      )
    })

    return (
      <View style={{ flex: 1 }}>
        <Screen style={BG}>
          <Header
            leftIcon="back"
            onLeftPress={this.goBack}
            headerText="Ringkasan Keuanganku"
          />
          <View style={BG_WHITE} />
          <View style={CONTENT}>
            <View style={ACCOUNT}>
              <Text style={ACCOUNT_TITLE} text="Saldo" />
              <Text style={ACCOUNT_NUMBER} text="Rp 10.000.000" />
              <Text style={[ACCOUNT_TITLE, {marginTop: spacing[5]}]} text="No. Rekening" />
              <Text style={ACCOUNT_NUMBER} text="900 00 190456 70" />
            </View>
            {/* Action */}
            <View style={[ROW, {marginBottom: spacing[4]}]}>
              <Button
                textStyle={{ fontSize: 14, fontWeight: "600", color: "#003d79" }}
                style={PLAN}
                text="Atur Rencana"
              />
              <View style={{ width: "2%" }} />
              <Button
                textStyle={{ fontSize: 14, fontWeight: "600" }}
                style={RECOMMEND}
                text="Rekomendasi"
              />
            </View>
            {/* Progress */}
            <View>
              <View style={ROW}>
                <Text style={PROGRESS_DATE} text="01 / 07 / 2019" />
                <Text style={PROGRESS_UNTIL} text="sampai" />
                <Text style={[PROGRESS_DATE, {textAlign: "right"}]} text="01 / 07 / 2019" />
              </View>
              <View style={PROGRESS_BASE}>
                <View style={PROGRESS_BAR} />
              </View>
              <View style={[ROW, {marginTop: spacing[3]}]}>
                <View style={{ width: "50%" }}>
                  <Text
                    text="Pengeluaran"
                    style={[PROGRESS_TITLE, {color: "#6ab2e2"}]}
                  />
                  <Text
                    text="5.000.000"
                    style={[PROGRESS_NUMBER, {color: "#6ab2e2"}]}
                  />
                </View>
                <View style={{ width: "50%" }}>
                  <Text
                    text="Batas Pengeluaran"
                    style={[PROGRESS_TITLE, {color: "#ff0000", textAlign: "right"}]}
                  />
                  <Text
                    text="7.000.000"
                    style={[PROGRESS_NUMBER, {color: "#ff0000", textAlign: "right"}]}
                  />
                </View>
              </View>
            </View>
            {/* History */}
            <Text style={HISTORY} text="Riwayat Transaksi" />
            {historyList}
          </View>
        </Screen>
      </View>
    )
  }
}