import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home, Register } from "../screens";
const Stack = createStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: ({ current: { progress } }) => {
            const opacity = progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: "clamp",
            });

            return {
              cardStyle: {
                opacity,
              },
            };
          },
        }}
        initialRouteName="RegisterScreen"
      >
        <Stack.Screen name="RegisterScreen" component={Register} />
        <Stack.Screen name="HomeScreen" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
