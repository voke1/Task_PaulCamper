import React from "react";
import { Animated, Text, View, Image } from "react-native";
import Modal from "react-native-modal";
import { TextButton } from "../../components";
import { COLORS, SIZES, icons } from "../../constants";

const SmsModal = ({ isVisible, onClose, errors }) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [showSmsModal, setShowSmsModal] = React.useState(isVisible);

  React.useEffect(() => {
    if (showSmsModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => onClose(false));
    }
  }, [showSmsModal]);

  return (
    <Modal
      visible={showSmsModal}
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
      onBackButtonPress={() => setShowSmsModal(false)}
      onBackdropPress={() => setShowSmsModal(false)}
    >
      <View
        style={{
          width: SIZES.width / 1.2,
          backgroundColor: "white",
          borderRadius: SIZES.radius,
          justifyContent: "space-around",
          padding: SIZES.padding,
        }}
      >
        <Image
          source={icons.alert}
          style={{
            height: 100,
            width: 100,
            zIndex: 5,
            alignSelf: "center",
            tintColor: COLORS.primary,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            lineHeight: 30,
            paddingTop: SIZES.base,
          }}
        >
          {`Please check the following errors!`}
        </Text>
        {errors.firstName && (
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              lineHeight: 21,
            }}
          >
            {`First Name: ${errors.firstName.message}`}
          </Text>
        )}
        {errors.lastName && (
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              lineHeight: 21,
            }}
          >
            {`Last name: ${errors.lastName.message}`}
          </Text>
        )}
        {errors.email && (
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              lineHeight: 21,
            }}
          >
            {` Email: ${errors.email.message}`}
          </Text>
        )}
        {errors.password && (
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              lineHeight: 21,
            }}
          >
            {` Password: ${errors.password.message}`}
          </Text>
        )}
        <View
          style={{
            paddingHorizontal: SIZES.base,
          }}
        >
          <TextButton
            label={"OK"}
            iconPosition="RIGHT"
            buttonContainerStyle={{
              height: SIZES.radius * 2,
              borderRadius: SIZES.radius * 3,
              backgroundColor: COLORS.primary,
              borderColor: COLORS.lightGray,
              justifyContent: "center",
              marginTop: SIZES.padding,
            }}
            labelStyle={{
              color: "white",
              fontSize: 14,
              lineHeight: 21,
            }}
            onPress={() => setShowSmsModal(false)}
            disabled={false}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SmsModal;
