/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";


import {
  Colors
} from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./src/navigation/BottomTabNavigator";
import { PRIMARY_BACKGROUND_COLOR } from "./src/constants/Colors";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black
          }
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark
          }
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
    flex: 1
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontFamily: "cereal",
    fontWeight: "700",
    fontSize: 24
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18
    // fontWeight: '400',
  },
  highlight: {
    fontWeight: "700"
  }
});

export default App;
