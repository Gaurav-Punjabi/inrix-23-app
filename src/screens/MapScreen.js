import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import imagePath from '../constants/image-path';



export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 30.7993,
      longitude: 76.9149,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={this.state}
        customMapStyle={DarkMatchStyle}
      >
        {data.map((val, i) => {
          return (
            <Marker
              coordinate={val.coords}

            >
              <Image
                source={val.ratings <= 2 ? imagePath.pinred : val.ratings == 3 ? imagePath.pinyellow : imagePath.pingreen}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
              />
              <View></View>
              <Callout>
                <View
                  style={{
                    height: 100, width: 100, justifyContent: 'center',
                    borderRadius: 20, alignItems: 'center'
                  }}>
                  <Text>
                    we can add Restraunt and images here
                  </Text>
                </View>
              </Callout>
            </Marker>
          )
        })}



        {/* <Marker coordinate={{
          latitude: 30.7993,
          longitude: 76.9149,
          title: "santa clara",
          discription:'heloo'
        }}/> */}


      </MapView>
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
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
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

