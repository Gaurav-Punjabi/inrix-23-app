import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Carousel from "react-native-snap-carousel";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_TEXT_COLOR, SUCCESS_COLOR } from "../constants/Colors";

const CARD_HEIGHT = responsiveHeight(25);

export default class DiningScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>

        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <Image style={styles.searchIcon} source={require("../../assets/icons/search.png")} />
            <Text style={styles.searchText}>Search Location</Text>
          </View>
          <Image style={styles.profileImage} source={require("../../assets/icons/profile.png")} />
        </View>
        {/* End of Profile Header */}


        {/* Card list*/}
        <ScrollView>
          <RestaurantCard navigation={this.props.navigation} />
          <RestaurantCard navigation={this.props.navigation} />
          <RestaurantCard navigation={this.props.navigation} />
          <RestaurantCard navigation={this.props.navigation} />
          <RestaurantCard navigation={this.props.navigation} />
          <RestaurantCard navigation={this.props.navigation} />
          <RestaurantCard navigation={this.props.navigation} />
          <RestaurantCard navigation={this.props.navigation} />
        </ScrollView>
        {/* End of card list */}

      </View>
    );
  }
}

export const RestaurantCard = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("DiningRestaurantDetail")}
                            style={styles.cardContainer}>
    <>
      <View style={styles.cardImageContainer}>
        <Image style={styles.cardImage} source={require("../../assets/images/mock-restaurant.jpeg")} />
        <View style={styles.cardOverlay} />
        <View style={styles.cardContentContainer}>
          <View style={styles.cardInnerContainer}>
            <Text style={styles.cardTitle}>Gott's Roadside</Text>
            <Text style={styles.cardSubtitle}>Burgers | Shakes | Wine</Text>
          </View>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>9.5</Text>
            <Image source={require("../../assets/icons/star-white.png")}
                   style={styles.ratingImage} />
          </View>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <Text>Hello</Text>
        <Text>World</Text>
      </View>
    </>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    paddingTop: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(5),
  },
  profileImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),

  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: responsiveHeight(2),
  },
  heading: {
    fontFamily: "CerealBold",
    // fontWeight: 700,
    fontWeight: "bold",
    fontSize: responsiveFontSize(4.5),
  },
  image: {
    position: "absolute",
    right: 0,
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: responsiveWidth(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: responsiveHeight(3),
  },
  cardImageContainer: {
    width: "100%",
    height: CARD_HEIGHT,
    backgroundColor: "#FFF",
    borderTopLeftRadius: responsiveWidth(3),
    borderTopRightRadius: responsiveWidth(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  titleContainer: {
    marginBottom: responsiveHeight(3),
    paddingLeft: responsiveWidth(6),
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: responsiveWidth(3),
    borderTopRightRadius: responsiveWidth(3),
    position: "absolute",
    top: 0,
    left: 0,
  },
  cardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    borderRadius: responsiveWidth(3),
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  cardTitle: {
    color: "#FFF",
    fontFamily: "CerealBold",
    fontWeight: "600",
    fontSize: responsiveFontSize(2.4),
    marginBottom: responsiveHeight(0.5),
  },
  cardSubtitle: {
    color: "#CCC",
    fontFamily: "CerealBold",
    fontWeight: "500",
  },
  cardContentContainer: {
    paddingHorizontal: responsiveWidth(3),
    paddingBottom: responsiveHeight(2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  cardInnerContainer: {},
  cardFooter: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(2),
    borderBottomLeftRadius: responsiveWidth(3),
    borderBottomRightRadius: responsiveWidth(3),
    justifyContent: "space-between",
  },

  searchContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: 50,
  },
  searchIcon: {
    width: responsiveFontSize(2.5),
    height: responsiveFontSize(2.5),
    marginRight: responsiveWidth(3),
  },
  searchText: {
    color: SECONDARY_TEXT_COLOR,
    fontFamily: "CerealBold",
    fontWeight: "500",
    fontSize: responsiveFontSize(2),
  },
  ratingContainer: {
    flexDirection: "row",
    backgroundColor: SUCCESS_COLOR,
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(0.5),
    alignItems: "center",

  },
  ratingText: {
    color: "#FFF",
    fontFamily: "CerealBold",
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
    marginRight: responsiveWidth(1.5),
  },
  ratingImage: {
    width: responsiveFontSize(1.5),
    height: responsiveFontSize(1.5),
  },

});
