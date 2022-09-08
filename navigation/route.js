import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home, Register } from "../screens";
const Stack = createStackNavigator();

const Routes = () => {
  // const [userLoggedIn, setUserLoggedIn] = React.useState("");

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  React.useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // transitionSpec: {
          //   open: TransitionSpecs.TransitionIOSSpec,
          //   close: TransitionSpecs.TransitionIOSSpec,
          // },
          // cardStyleInterpolator: () => CardStyleInterpolators.forHorizontalIOS,
          // transitionConfig: transitionConfig,
          cardStyleInterpolator: ({ current: { progress } }) => {
            // transitionSpec: {
            //   duration: 1000,
            //   easing: Easing.out(Easing.poly(4)),
            //   timing: Animated.timing,
            //   useNativeDriver: true,
            // };
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
