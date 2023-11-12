import { createStackNavigator } from "@react-navigation/stack";
import DiningScreen from "../screens/DiningScreen";
import MapScreen from "../screens/MapScreen";
import RestaurantScreen from "../screens/RestaurantScreen";

const Stack = createStackNavigator();

export function MapStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="MapRestaurantDetail" component={RestaurantScreen} />
    </Stack.Navigator>
  )
};
