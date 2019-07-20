import { createStackNavigator } from "react-navigation"
import { WelcomeScreen } from "../screens/welcome-screen"
import { DemoScreen } from "../screens/demo-screen"
import { HomeScreen } from "../screens/home-screen"

export const PrimaryNavigator = createStackNavigator(
  {
    home: { screen: HomeScreen },
    welcome: { screen: WelcomeScreen },
    // demo: { screen: DemoScreen }
  },
  {
    headerMode: "none",
  },
)
