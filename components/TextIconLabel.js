import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet,View } from "react-native";
import { COLORS } from "../constants";

const TextIconLabel = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconPosition,
  iconStyle,
  onPress,
  isSelected,
  icon1,
  icon2,
  signindesign,
  iconStyle1,
  iconStyle2,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        backgroundColor: isSelected ? "#C028BC" : "#E5E5E5",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {iconPosition == "LEFT" && (
        // <>
        <Image
          source={icon}
          style={{
            ...styles.image,
            ...iconStyle,
          }}
          resizeMode="contain"
        />
      )}
      <Text
        style={{
          ...labelStyle,
        }}
      >
        {label}
      </Text>
      {/* </> */}
      {iconPosition == "RIGHT" && (
        <>
          <Image
            source={icon}
            style={{
              ...styles.image,
              ...iconStyle,
            }}
            resizeMode="contain"
          />
          {signindesign && (
            <>
              <Image
                source={icon1}
                style={{
                  ...styles.image,
                  ...iconStyle1,
                }}
                resizeMode="contain"
              />
              <Image
                source={icon2}
                style={{
                  ...styles.image,
                  ...iconStyle2,
                }}
                resizeMode="contain"
              />
            </>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginLeft: 5,
    width: 20,
    height: 20,
    // tintColor: COLORS.white,
  },
});

export default TextIconLabel;
