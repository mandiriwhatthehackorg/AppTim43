import * as React from "React"
import { View, ViewStyle, TextStyle, SafeAreaView } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../components/screen"
import { Text } from "../../components/text"
import { TextField } from "../../components/text-field"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { color, spacing } from "../../theme"

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
const INPUT_NAME: ViewStyle = {
  width: "48%",
  marginRight: spacing[2]
}
const INPUT_DATE: ViewStyle = {
  width: "32%",
  marginRight: spacing[2]
}
const LOGIN: ViewStyle = {
  backgroundColor: "#6ab2e2",
  paddingVertical: spacing[4] + spacing[1],
  marginTop: spacing[3]
}
const REGISTER: ViewStyle = {
  backgroundColor: "rgba(255,255,255,0.8)",
  paddingVertical: spacing[4] + spacing[1],
  marginTop: spacing[3],
  borderColor: "#47b9de",
  borderWidth: 2
}
const FOOTER: ViewStyle = {
  paddingHorizontal: spacing[5]
}

export interface RegisterScreenProps extends NavigationScreenProps<{}> {}

export class RegisterScreen extends React.Component<RegisterScreenProps, {}> {
  goBack = () => this.props.navigation.goBack(null)
  confirm = () => this.props.navigation.navigate("register-otp")

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Screen>
          <Header
            leftIcon="back"
            onLeftPress={this.goBack}
            titleStyle={HEADER_TITLE}
            headerText="Konfirmasi Data Diri Anda"
          />
          <View style={{ paddingHorizontal: spacing[5] }}>
            {/* State */}
            <View style={STATE}>
              <View style={STATE_VIEW}>
                <Text text="1" style={STATE_TEXT} />
              </View>
              <Text text="/ 5" style={STATE_ALL} />
            </View>
            {/* Form */}
            <View style={{ marginTop: spacing[5] }}>
              <View style={ROW}>
                <TextField
                  style={INPUT_NAME}
                  label="Nama Depan"
                  placeholder="John"
                />
                <TextField
                  style={INPUT_NAME}
                  label="Nama Belakang"
                  placeholder="John"
                />
              </View>
              <View style={ROW}>
                <TextField
                  style={INPUT_DATE}
                  label="Tanggal"
                  placeholder="XX"
                />
                <TextField
                  style={INPUT_DATE}
                  label="Bulan"
                  placeholder="XX"
                />
                <TextField
                  style={INPUT_DATE}
                  label="Tahun"
                  placeholder="XXXX"
                />
              </View>
              <TextField
                label="Nomor Ponsel"
                placeholder="+62XXXXXXXXX"
              />
              <TextField
                label="Alamat Email"
                placeholder="doe@example.com"
              />
            </View>
          </View>
        </Screen>
        <SafeAreaView>
          <View style={FOOTER}>
            <Button
              onPress={this.goToRegister}
              style={REGISTER}
              textStyle={{ fontSize: 14, fontWeight: "600", color: "#003d79" }}
              text="UBAH DATA"
            />
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
