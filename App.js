import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import store from "./stores/store";
import { Routes } from "./navigation/route";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
