import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Carousel from "react-native-snap-carousel";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_TEXT_COLOR } from "../constants/Colors";

const CARD_WIDTH = responsiveWidth(80);
const CARD_HEIGHT = responsiveHeight(45);

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Background Image */}
        <Image style={styles.image} source={require("../../assets/images/map.png")} />
        {/* End Background Image */}

        {/* Profile Header */}
        <View style={styles.header}>
          <Image style={styles.profileImage} source={require("../../assets/icons/profile.png")} />
        </View>
        {/* End of Profile Header */}


        {/* Heading Container */}
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>Find the best </Text>
          <Text style={styles.heading}>resto 👋 </Text>
        </View>
        {/* End of Heading Container */}

        {/* Card list*/}
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={[1, 2, 3]}
          renderItem={({item, index}) => this._renderItem(item, index, this.props.navigation)}
          sliderWidth={responsiveWidth(100)}
          itemWidth={CARD_WIDTH}
        />
        {/* End of card list */}
      </View>
    );
  }

  _renderItem(item, index, navigation) {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeRestaurantDetail')} style={styles.cardContainer}>
        <Image style={styles.cardImage} source={require("../../assets/images/mock-restaurant.jpeg")} />
        <View style={styles.cardOverlay} />
        <View style={styles.cardContentContainer}>
          <Text style={styles.cardTitle}>Gott's Roadside</Text>
          <Text style={styles.cardSubtitle}>San Francisco</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
    paddingTop: responsiveHeight(4),

  },
  profileImage: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    background: "transparent",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
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
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#FFF",
    borderRadius: responsiveWidth(3),
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
    borderRadius: responsiveWidth(3),
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
    color: '#CCC',
    fontFamily: "CerealBold",
    fontWeight: "500",
  },
  cardContentContainer: {
    paddingHorizontal: responsiveWidth(3),
    paddingBottom: responsiveHeight(2),
  },
});
