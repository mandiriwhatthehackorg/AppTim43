import { createStackNavigator } from "react-navigation"
import { WelcomeScreen } from "../screens/welcome-screen"
import { DemoScreen } from "../screens/demo-screen"
import { HomeScreen } from "../screens/home-screen"
import { LoginScreen } from "../screens/login-screen"
import { RegisterScreen } from "../screens/register-screen"
import { RegisterScreenOtp } from "../screens/register-screen-otp"
import { RegisterScreenSaving } from "../screens/register-screen-saving"
import { RegisterScreenKyc } from "../screens/register-screen-kyc"
import { RegisterScreenSign } from "../screens/register-screen-sign"
import { SummaryScreen } from "../screens/summary-screen"
import { InvestScreen } from "../screens/invest-screen"

export const PrimaryNavigator = createStackNavigator(
  {
    home: { screen: HomeScreen },
    welcome: { screen: WelcomeScreen },
    demo: { screen: DemoScreen },
    login: { screen: LoginScreen },
    register: { screen: RegisterScreen },
    register_otp: { screen: RegisterScreenOtp },
    register_saving: { screen: RegisterScreenSaving },
    register_kyc: { screen: RegisterScreenKyc },
    register_sign: { screen: RegisterScreenSign },
    summary: { screen: SummaryScreen },
    invest: { screen: InvestScreen }
  },
  {
    headerMode: "none",
  },
)
