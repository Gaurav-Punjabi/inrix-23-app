import { createStackNavigator } from "@react-navigation/stack";
import DiningScreen from "../screens/DiningScreen";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="HomeList" component={HomeScreen} />
      <Stack.Screen name="HomeRestaurantDetail" component={RestaurantScreen} />
    </Stack.Navigator>
  )
};
