import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { COLORS, SIZES } from "../constants";

const TextButton = ({
  label,
  labelStyle,
  buttonContainerStyle,
  onPress,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      {
        <>
          <Text
            style={{
              color: COLORS.white,
              ...labelStyle,
            }}
          >
            {label}
          </Text>
        </>
      }
    </TouchableOpacity>
  );
};

export default TextButton;
