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
const LOGIN: ViewStyle = {
  backgroundColor: "#6ab2e2",
  paddingVertical: spacing[4] + spacing[1],
  marginTop: spacing[3]
}
const UPLOAD: ViewStyle = {
  borderColor: "#ebebeb",
  borderWidth: 2,
  borderRadius: 5,
  padding: spacing[3],
  width: "49%",
  justifyContent: "center",
  alignItems: "center"
}
const UPLOAD_TEXT: TextStyle = {
  color: "#1f5285",
  fontWeight: "600",
  fontSize: 13,
  textAlign: "center",
  marginBottom: spacing[2]
}
const UPLOAD_ADD: ViewStyle = {
  backgroundColor: "#ebebeb",
  height: 30,
  width: 60,
  borderRadius: 5,
  marginBottom: spacing[3],
  marginTop: spacing[2],
  justifyContent: "center",
  alignItems: "center",
  padding: spacing[4] + spacing[1]
}
const UPLOAD_PLUS: TextStyle = {
  fontWeight: "bold",
  fontSize: 17,
  width: 20,
  height: 20,
  textAlign: "center",
  backgroundColor: "#fdb714",
  borderRadius: 100,
  justifyContent: "center",
  alignItems: "center",
}
const FOOTER: ViewStyle = {
  paddingHorizontal: spacing[5],
  paddingVertical: spacing[4]
}

export interface RegisterScreenKycProps extends NavigationScreenProps<{}> {}

export class RegisterScreenKyc extends React.Component<RegisterScreenKycProps, {}> {
  goBack = () => this.props.navigation.goBack(null)
  confirm = () => this.props.navigation.navigate("register_otp")

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Screen>
          <Header
            leftIcon="back"
            onLeftPress={this.goBack}
            titleStyle={HEADER_TITLE}
            headerText="Lengkapi Data Diri Anda"
          />
          <View style={{ paddingHorizontal: spacing[5] }}>
            {/* State */}
            <View style={STATE}>
              <View style={STATE_VIEW}>
                <Text text="4" style={STATE_TEXT} />
              </View>
              <Text text="/ 5" style={STATE_ALL} />
            </View>
            {/* Form */}
            <View style={{ marginTop: spacing[5] }}>
              <TextField
                label="Nama Gadis Ibu Kandung"
                placeholder="Sarah Doe"
              />
              <TextField
                label="Nomor KTP"
                placeholder="XXXXXXXXXXXXXXXX"
              />
              <TextField
                label="Kantor Cabang"
                placeholder="KCP Jakarta Barat"
              />
            </View>
            <View style={[ROW, { marginTop: spacing[4] }]}>
              <View style={UPLOAD}>
                <View style={UPLOAD_ADD}>
                  <View style={UPLOAD_PLUS}>
                    <Text style={{ fontWeight: "bold" }} text="+" />
                  </View>
                </View>
                <Text style={UPLOAD_TEXT} text="Upload Foto KTP" />
              </View>
              <View style={{ width: "2%" }} />
              <View style={UPLOAD}>
                <View style={UPLOAD_ADD}>
                  <View style={UPLOAD_PLUS}>
                    <Text style={{ fontWeight: "bold" }} text="+" />
                  </View>
                </View>
                <Text style={UPLOAD_TEXT} text="Upload Foto Selfie Dengan KTP" />
              </View>
            </View>
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
