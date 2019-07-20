import * as React from "react"
import { View, Image, TextStyle, ViewStyle, ImageStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../components/screen"
import { TextField } from "../../components/text-field"
import { Text } from "../../components/text"
import { Checkbox } from "../../components/checkbox"
import { Button } from "../../components/button"
import { color, spacing } from "../../theme"
import { mandiriLogo } from "./"
import { bg } from "./"

const LABEL: TextStyle = {
  color: "#47b9de"
}
const FORGOT: TextStyle = {
  color: "#47b9de",
  fontWeight: "600",
  fontSize: 12,
  textAlign: "right"
}
const LOGO: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "80%",
  marginBottom: spacing[5] * 3
}
const BG: ImageStyle = {
  alignSelf: "center",
  maxWidth: "30%",
  maxHeight: "30%",
  resizeMode: "cover",
  position: "absolute",
  bottom: 0,
  zIndex: -1
}
const CHECKBOXLABEL: TextStyle = {
  color: "#47b9de",
  fontSize: 14
}
const ACTION: ViewStyle = {
  marginBottom: spacing[4] * 2
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

export interface LoginScreenProps extends NavigationScreenProps<{}> {}

export class LoginScreen extends React.Component<LoginScreenProps, {}> {
  rememberMe = () => {}

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Screen>
          <View style={{ padding: spacing[5] }}>
            <Image
              style={LOGO}
              source={mandiriLogo}
            />
            <TextField
              style={LABEL}
              label="Email Anda"
              placeholder="doe@example.com"
            />
            <TextField
              style={LABEL}
              label="Kata Sandi"
              placeholder="masukkan kata sandi"
              textContentType="password"
              secureTextEntry
            />
            <View style={ACTION}>
              <Checkbox
                text="Remember me"
                textStyle={CHECKBOXLABEL}
                onToggle={this.rememberMe}
              />
              <Text style={FORGOT} text="Lupa Password?" />
            </View>
            <Button
              style={LOGIN}
              textStyle={{ fontSize: 14, fontWeight: "600" }}
              text="MASUK"
            />
            <Button
              style={REGISTER}
              textStyle={{ fontSize: 14, fontWeight: "600", color: "#003d79" }}
              text="BELUM PUNYA AKUN?"
            />
          </View>
          <Image source={bg} style={BG} />
        </Screen>
      </View>
    )
  }
}