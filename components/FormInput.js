import React from "react";
import { Controller } from "react-hook-form";
import { TextInput, View } from "react-native";
import { COLORS, SIZES } from "../constants";

const FormInput = ({
  name,
  control,
  containerStyle,
  placeholder,
  prependComponent,
  appendComponent,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "None",
  maxLength,
  rules,
}) => {
  const [color, setColor] = React.useState("");

  return (

    // Text Input Container 
    <View
      style={{
        ...containerStyle,
      }}
    >
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onChange, onBlur, onFocus },
          fieldState: { error, isTouched },
        }) => {
          return (
            <>

            {/* Text Input View */}
              <View
                style={{
                  flexDirection: "row",
                  height: 32,
                  paddingHorizontal: SIZES.padding,
                  backgroundColor: COLORS.white,
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: COLORS.lightGray,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: color ? "black" : "black",
                }}
              >

                {/* Left Component  */}
                {prependComponent}

                <TextInput
                  style={{
                    flex: 1,
                    color: COLORS.gray,
                    height: 32,
                    borderRadius: 4,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: SIZES.base * 2,
                    fontSize: 20,
                    lineHeight: 21,
                  }}
                  onFocus={(e) =>
                    console.log("focusus:", setColor(e.currentTarget))
                  }
                  value={value}
                  placeholder={placeholder}
                  placeholderTextColor="gray"
                  secureTextEntry={secureTextEntry}
                  keyboardType={keyboardType}
                  autoCompleteType={autoCompleteType}
                  autoCapitalize={autoCapitalize}
                  maxLength={maxLength}
                  onChangeText={(text) => onChange(text)}
                />

                  {/* Right Component  */}
                {appendComponent}
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

export default FormInput;
