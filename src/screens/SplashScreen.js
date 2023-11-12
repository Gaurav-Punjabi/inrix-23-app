import LottieView from "lottie-react-native";
import React from "react";
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, Platform, Linking } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import {
  PRIMARY_BACKGROUND_COLOR, PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR, WARNING_COLOR,
} from "../constants/Colors";

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontFamily: 'CerealBold', fontWeight: 'bold', fontSize: responsiveFontSize(4), textAlign: "center"}}>Hello World</Text>
        <LottieView style={{width: responsiveWidth(100), height: responsiveHeight(50)}} source={require("../../assets/icons/location.json")} autoPlay loop />
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at commodi cum enim libero natus odit provident temporibus! </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.replace("Routes")}>
          <Text style={styles.buttonText}>Get Started !</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(5),
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    marginBottom: responsiveHeight(20),
    borderRadius: responsiveWidth(3)
  },

  description: {
    color: "#999",
    fontFamily: "CerealBold",
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "center",
    marginBottom: responsiveHeight(10),
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "CerealBold",
    fontWeight: '700',
    fontSize: responsiveFontSize(2)
  }
});
