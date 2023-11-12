import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, CalloutSubview } from "react-native-maps";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constants/Colors";
import imagePath from '../constants/image-path';
import { getRestaurants } from "../services/RestaurantService";



export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 37.8086,
      longitude: -122.4125,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      isLoading: false,
      restaurants: [],
    };
  }


  async componentDidMount() {
    this.setState({
      isLoading: true,
    });
    let restaurants = await getRestaurants();
    if(restaurants !== null) {
      this.setState({
        restaurants: restaurants.map(item => ({
          id: item.id,
          coords: {
            latitude: item.lat,
            longitude: item.lng
          },
          ratings: (item.composite_score ),
          item: item
        })),
        isLoading: false,
      });
    } else {
      console.log("Null aa rha hai");
    }
  }


  render() {
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        {!this.state.isLoading && <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={this.state}
          customMapStyle={DarkMatchStyle}
        >
          {this.state.restaurants.map((val, i) => {
            return (
              <Marker
                coordinate={val.coords}

              >
                <Image
                  source={val.ratings <= 7 ? imagePath.pinred : val.ratings <= 8 ? imagePath.pinyellow : imagePath.pingreen}
                  style={{ width: responsiveFontSize(4), height: responsiveFontSize(4) }}
                  resizeMode="contain"
                />

                <Callout onPress={() => navigation.navigate("MapRestaurantDetail", {
                  restaurant: val.item
                })}>
                  <CalloutSubview onPress={() => navigation.navigate("MapRestaurantDetail", {
                    restaurant: val.item
                  })}>
                    <TouchableOpacity onPress={() => navigation.navigate("MapRestaurantDetail", {
                      restaurant: val.item
                    })}
                                      style={{
                                        width: responsiveWidth(14),  height: responsiveHeight(4) , color: "#FFF",
                                        paddingVertical: responsiveHeight(1), flexDirection: "row",
                                      }}>
                      <Text style={{color: PRIMARY_COLOR, fontFamily: "CerealBold", fontWeight: "600", marginRight: responsiveWidth(1)}}>
                        View →
                      </Text>
                    </TouchableOpacity>
                  </CalloutSubview>
                </Callout>
              </Marker>
            )
          })}





        </MapView>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


const DarkMatchStyle = [
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6195a0"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "lightness": "0"
      },
      {
        "saturation": "0"
      },
      {
        "color": "#f5f5f2"
      },
      {
        "gamma": "1"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "all",
    "stylers": [
      {
        "lightness": "-3"
      },
      {
        "gamma": "1.00"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#bae5ce"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": 45
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#fac9a9"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#787878"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "labels.icon",
    "stylers": [
      {
        "hue": "#0a00ff"
      },
      {
        "saturation": "-77"
      },
      {
        "gamma": "0.57"
      },
      {
        "lightness": "0"
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#43321e"
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "elementType": "labels.icon",
    "stylers": [
      {
        "hue": "#ff6c00"
      },
      {
        "lightness": "4"
      },
      {
        "gamma": "0.75"
      },
      {
        "saturation": "-68"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
      {
        "color": "#eaf6f8"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c7eced"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "lightness": "-49"
      },
      {
        "saturation": "-53"
      },
      {
        "gamma": "0.79"
      }
    ]
  }
]


const data = [
  {
    id: 0,
    coords: {
      latitude: 30.7993,
      longitude: 76.9149,
      // latitudeDelta: 0.0922,
      // longitudeDelta: 0.0421,
    },
    //  img: imagePath.greenpin,
    ratings: 3
  },
  {
    id: 1,
    coords: {
      latitude: 30.7786,
      longitude: 76.9060,
      // latitudeDelta: 0.0922,
      // longitudeDelta: 0.0421,
    },
    img: imagePath.emoji1,
    ratings: 2
  },
  {
    id: 3,
    coords: {
      latitude: 30.8333,
      longitude: 76.9357,
      // latitudeDelta: 0.0922,
      // longitudeDelta: 0.0421,
    },
    img: imagePath.emoji1,
    ratings: 5
  },
  {
    id: 4,
    coords: {
      latitude: 30.8406,
      longitude: 76.9584,
      // latitudeDelta: 0.0922,
      // longitudeDelta: 0.0421,
    },
    img: imagePath.emoji1,
    ratings: 1
  },
  {
    id: 0,
    coords: {
      latitude: 30.6936,
      longitude: 76.8450,
      // latitudeDelta: 0.0922,
      // longitudeDelta: 0.0421,
    },
    img: imagePath.emoji1,
    ratings: 4
  },
];

