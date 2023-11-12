import { createStackNavigator } from "@react-navigation/stack";
import DiningScreen from "../screens/DiningScreen";
import RestaurantScreen from "../screens/RestaurantScreen";

const Stack = createStackNavigator();

export function DiningStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="RestaurantsList" component={DiningScreen} />
      <Stack.Screen name="DiningRestaurantDetail" component={RestaurantScreen} />
    </Stack.Navigator>
  )
};
