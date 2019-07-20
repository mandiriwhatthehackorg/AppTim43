import * as React from "react"
import { View, ViewStyle, TextStyle, SafeAreaView, TouchableHighlight } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Icon } from "../icon"
import { Text } from "../text"
import { spacing } from "../../theme"

const ROW: ViewStyle = {
  flexDirection: "row"
}

class NavIcon extends React.Component<any, any> {
  test = () => alert("hehe")
  
  render () {
    const TEXT: TextStyle = {
      color: "#003d78",
      fontSize: 12,
      fontWeight: "500",
      marginTop: spacing[1],
    }
    const VIEW: ViewStyle = {
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: spacing[3],
      paddingVertical: spacing[2]
    }
    const ICON: ViewStyle = {
      height: 20
    }

    return (
      <View>
        <TouchableHighlight underlayColor="#f2f2f2" onPress={this.test}>
          <View style={VIEW}>
            <Icon style={ICON} icon={this.props.icon} />
            <Text style={TEXT} text={this.props.text} />
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export interface BottomNavbarNavigation extends NavigationScreenProps<{}> {}

export class BottomNavbar extends React.Component<BottomNavbarNavigation, any> {
  goToSummary = () => this.props.navigation.navigate("summary")

  render () {
    const PART: ViewStyle = {
      width: "35%",
      justifyContent: "center",
      alignItems: "center"
    }
    const MIDDLE: ViewStyle = {
      width: "30%",
      alignItems: "center"
    }
    const CIRCLE: ViewStyle = {
      position: "absolute",
      bottom: spacing[5],
      backgroundColor: "#fdb714",
      width: 65,
      height: 65,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center"
    }
    
    return (
      <SafeAreaView>
        <View style={[ROW, {paddingHorizontal: spacing[4]}]}>
          <View style={[ROW, PART]}>
            <NavIcon icon="home" text="Beranda" />
            <NavIcon icon="history" text="Histori" />
          </View>
          <View style={MIDDLE}>
            <TouchableHighlight
              underlayColor="#eba80e"
              onPress={this.goToSummary}
              style={CIRCLE}
            >
              <View>
                <Icon icon="wallet" />
              </View>
            </TouchableHighlight>
          </View>
          <View style={[ROW, PART]}>
            <NavIcon icon="star" text="Favorit" />
            <NavIcon icon="profile" text="Profil" />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}