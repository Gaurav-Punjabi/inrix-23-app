import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, SECONDARY_TEXT_COLOR } from "../constants/Colors";
import DiningScreen from "../screens/DiningScreen";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import {useTheme} from "react-native-paper";
import { DiningStack } from "./DiningStack";
import { HomeStack } from "./HomeStack";

const Tab = createMaterialBottomTabNavigator();


export const MyTabs = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";

  return (
    <Tab.Navigator activeColor={PRIMARY_COLOR} inactiveColor={SECONDARY_TEXT_COLOR}
                   safeAreaInsets={{bottom: 0}}
                   barStyle={styles.navBar}>

      <Tab.Screen name="Dining" component={DiningStack} options={{
        tabBarLabel: "Dining",
        tabBarIcon: ({color}) => (
          <Image source={require("../../assets/icons/cutlery.png")} style={{ width: 25, height: 25 }}/>
        ),
      }}/>
      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarLabel: "Home",
        tabBarIcon: ({color}) => (
          <Image source={require("../../assets/icons/home.png")} style={{ width: 25, height: 25 }}/>
        ),
      }}/>
      <Tab.Screen name="Maps" component={MapScreen} options={{
        tabBarLabel: "Maps",
        tabBarIcon: ({color}) => (
          <Image source={require("../../assets/icons/location.png")} style={{ width: 25, height: 25 }}/>
        ),
      }}/>
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  navBar: {
    // padding:0 ,
    position: 'absolute',
    bottom: responsiveHeight(5),
    right: responsiveWidth(5),
    left: responsiveWidth(5),
    overflow: 'hidden',
    borderRadius: 50,
    backgroundColor: "#FFF",
  }
})
