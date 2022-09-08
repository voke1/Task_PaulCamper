import React, { Children } from "react";
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { icons } from "../constants";

import BlinkView from "react-native-blink-view";


const Loader = ({
  isVisible,
  onClose,
  origin,
  showMessage,
  icon,
  title,
  desc,
}) => {
  const [value, setValue] = React.useState("");

  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [showLoader, setShowLoader] = React.useState(isVisible);
  const [deliveryTime, setDeliveryTime] = React.useState("");
  const [ratings, setRatings] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [sms, setSms] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState("");
  const phoneInput = React.useRef();

  React.useEffect(() => {
    if (showLoader) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [showLoader]);

  //   const modalY = modalAnimatedValue.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [
  //       SIZES.height,
  //       SIZES.height - (origin === "" ? SIZES.height / 2 : SIZES.height / 1.4),
  //     ],
  //   });

  return (
    <Modal
      //   animationType="fade"
      //   transparent={true}
      visible={showLoader}
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
      onBackButtonPress={() => setShowLoader(false)}
      onBackdropPress={() => setShowLoader(false)}
    >
      {/* <View style={{ justifyContent: "space-around", alignItems: "center"}}> */}
      <BlinkView blinking={true} delay={500}>
        <Image
          source={icons.loader}
          style={{
            height: 120,
            width: 120,
            zIndex: 5,
          }}
          resizeMode="contain"
        />
      </BlinkView>
    </Modal>
  );
};

export default Loader;
