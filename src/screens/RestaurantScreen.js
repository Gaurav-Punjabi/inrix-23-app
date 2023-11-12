import React from "react";
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import {
  PRIMARY_BACKGROUND_COLOR, PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR, WARNING_COLOR,
} from "../constants/Colors";
import * as Progress from "react-native-progress";

const PROGRESS_BAR_WIDTH = responsiveWidth(78);

export default class RestaurantScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButtonContainer}>
            <Image style={styles.backButton} source={require("../../assets/icons/arrow.png")} />
          </TouchableOpacity>

          <Text style={styles.heading}>Gott's Roadside</Text>

          <Image style={styles.profileImage} source={require("../../assets/icons/profile.png")} />
        </View>

        <ScrollView style={{width: '100%'}}>

          <Image style={styles.restaurantImage} source={require("../../assets/images/mock-restaurant.jpeg")} />
          <View style={styles.contentContainer}>
            <Text style={styles.subtitle}>About This Restaurant</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, id,
              molestiae. A alias at distinctio enim facere hic labore necessitatibus, nostrum qui quidem rem repellendus
              reprehenderit sit ut, voluptatem voluptatum!</Text>

            <View
              style={{
                width: "100%",
                borderBottomColor: SECONDARY_TEXT_COLOR,
                borderColor: PRIMARY_TEXT_COLOR,
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: responsiveHeight(2.5),
              }}
            />

            <View style={styles.ratingCard}>
              <View style={styles.ratingContentContainer}>
                <Text style={styles.ratingLabel}>Overall Rating:</Text>
                <Text style={styles.ratingText}>95%</Text>
              </View>
              <Image style={styles.ratingIcon} source={require("../../assets/icons/star.png")} />
            </View>

            <View style={styles.progressContainer}>
              <Text style={styles.progressLabel}>Frequency Rating:</Text>
              <View style={styles.progressContentContainer}>
                <View>
                  <Progress.Bar progress={0.6} width={PROGRESS_BAR_WIDTH} color={WARNING_COLOR}
                                unfilledColor={"#e5e5e5"}
                                height={responsiveHeight(1)}
                                borderRadius={responsiveWidth(2)}
                                borderColor={"#e5e5e5"} />
                </View>

                <Text style={styles.progressText}>65%</Text>
              </View>
            </View>

            <View style={styles.progressContainer}>
              <Text style={styles.progressLabel}>Frequency Rating:</Text>
              <View style={styles.progressContentContainer}>
                <View>
                  <Progress.Bar progress={0.6} width={PROGRESS_BAR_WIDTH} color={WARNING_COLOR}
                                unfilledColor={"#e5e5e5"}
                                height={responsiveHeight(1)}
                                borderRadius={responsiveWidth(2)}
                                borderColor={"#e5e5e5"} />
                </View>

                <Text style={styles.progressText}>65%</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Go To Location</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    justifyContent: "flex-start",
    paddingTop: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(5),
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: responsiveHeight(2),
  },
  backButtonContainer: {
    padding: responsiveWidth(2),
    borderWidth: 0.5,
    borderRadius: responsiveWidth(2),
    borderColor: SECONDARY_TEXT_COLOR,
  },
  backButton: {
    width: responsiveFontSize(3),
    height: responsiveFontSize(3),
  },
  heading: {
    fontFamily: "CerealBold",
    fontWeight: "bold",
    fontSize: responsiveFontSize(2.3),
  },
  profileImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    background: "transparent",
  },

  restaurantImage: {
    width: responsiveWidth(90),
    height: responsiveHeight(30),
    borderRadius: responsiveWidth(2.3),
    marginBottom: responsiveHeight(2),
  },
  subtitle: {
    fontFamily: "CerealBold",
    fontWeight: "700",
    fontSize: responsiveFontSize(2.2),
    marginBottom: responsiveHeight(1),
  },
  contentContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

  },
  description: {
    color: "#999",
    fontFamily: "CerealBold",
    fontWeight: "500",
    marginBottom: responsiveHeight(2.5),
  },
  ratingCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(145, 136, 242, 0.12)",
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    borderRadius: responsiveWidth(3),
    borderWidth: 1.3,
    borderColor: SECONDARY_COLOR,
    marginBottom: responsiveHeight(2),
  },
  ratingContentContainer: {
    flexDirection: "column",
  },
  ratingLabel: {
    fontFamily: "CerealLight",
    fontWeight: "700",
    color: SECONDARY_COLOR,
    marginBottom: responsiveHeight(0.3),
    fontSize: responsiveFontSize(1.5),

  },
  ratingText: {
    fontFamily: "CerealBold",
    fontWeight: "800",
    color: SECONDARY_COLOR,
    fontSize: responsiveFontSize(4.5),
  },
  ratingIcon: {
    width: responsiveFontSize(7),
    height: responsiveFontSize(7),
  },
  progressContainer: {
    width: "100%",
    flexDirection: "column",
    marginBottom: responsiveHeight(2),
  },
  progressLabel: {
    fontFamily: "CerealBold",
    fontWeight: "600",
    color: PRIMARY_TEXT_COLOR,
    fontSize: responsiveFontSize(1.9),
    marginBottom: responsiveHeight(1),
  },
  progressContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressText: {
    fontFamily: "CerealBold",
    fontWeight: "600",
    color: PRIMARY_TEXT_COLOR,
    fontSize: responsiveFontSize(1.8),
    marginBottom: responsiveHeight(1),
  },
  buttonContainer: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    marginBottom: responsiveHeight(5),
    borderRadius: responsiveWidth(3)
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "CerealBold",
    fontWeight: '700',
    fontSize: responsiveFontSize(2)
  }
});
