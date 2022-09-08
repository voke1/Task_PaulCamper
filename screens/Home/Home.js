import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.accountReducer.user);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.homeText}
      >{`Welcome ${user?.firstName}\nYou have successfully registered!`}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1D0AC",
    alignItems: "center",
    justifyContent: "center",
  },

  homeText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default Home;
