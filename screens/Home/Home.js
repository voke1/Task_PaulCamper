import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{ textAlign: "center" }}
      >{`Welcome ${user?.firstName}\nYou have successfully registered!`}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
