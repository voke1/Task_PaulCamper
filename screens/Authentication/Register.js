import React from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useForm } from "react-hook-form";
import { FormInput, LineDivider, TextButton } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import { useDispatch } from "react-redux";
import utils from "../../utils/Utils";
import SmsModal from "./SmsModal";
import { useSelector } from "react-redux";

const { loginSuccess, loginBegin, loginFailure } = utils;

const Register = ({ navigation }) => {
  const [showPass, setShowPass] = React.useState(false);
  const [showPasswordModal, setShowPasswordModal] = React.useState(false);
  const [showSmsModal, setShowSmsModal] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((initialState) => initialState);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();



  // Handle User Login/Registration 
  const registerHandler = (data) => {
    try {
      let result = dispatch(loginBegin(data));

      if (result?.payload?.user) {
        let registeredUser = dispatch(loginSuccess(data));
        if (registeredUser.payload) {

          navigation.navigate("HomeScreen");
        }
      }
    } catch (error) {
      // console.log("An error occurred!", error);
      return error
    }
  };


  // Handle validation error
  const errorHandler = async () => {
    setShowSmsModal(true);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        justifyContent: "space-around",
      }}
    >
      <View
        style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          source={icons.paulCamper}
          resizeMode="contain"
          style={{ width: 150, height: 150 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius * 1.2,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* Error Modal */}
        {showSmsModal && (
          <SmsModal
            isVisible={showSmsModal}
            onClose={() => {
              setShowSmsModal(false);
            }}
            errors={errors}
          />
        )}

        <View style={{ flex: 1, justifyContent: "space-evenly", padding: 10 }}>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 23,
              lineHeight: 35,
            }}
          >
            Welcome!
          </Text>

          <FormInput
            control={control}
            rules={{
              required: {
                value: true,
                message: "first Name is required",
              },

              minLength: {
                value: 2,
                message: "first name must be more than 2 characters",
              },
              maxLength: {
                value: 14,
                message: "first Name must have a maximum of 14 characters",
              },
            }}
            name="firstName"
            placeholder="First Name"
            prependComponent={
              <TouchableOpacity
                style={{
                  width: SIZES.radius,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
                onPress={() => setShowPass(!showPass)}
              >
                <Image
                  style={{
                    height: 18,
                    width: 18,
                    tintColor: "black",
                  }}
                  source={icons.profile}
                />
              </TouchableOpacity>
            }
          />
          <FormInput
            control={control}
            rules={{
              required: {
                value: true,
                message: "Last name is required",
              },

              minLength: {
                value: 3,
                message: "Last name must be more than 2 characters",
              },
            }}
            name="lastName"
            placeholder="Last Name"
            prependComponent={
              <TouchableOpacity
                style={{
                  width: SIZES.radius,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
                onPress={() => setShowPass(!showPass)}
              >
                <Image
                  style={{
                    height: 18,
                    width: 18,
                    tintColor: "black",
                  }}
                  source={icons.profile}
                />
              </TouchableOpacity>
            }
          />
          <FormInput
            control={control}
            rules={{
              required: {
                value: true,
                message: "Email is required",
              },

              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-z]{2,}))$/,
                message: "Email must be in the example format john@email.com",
              },
            }}
            name="email"
            placeholder="Johndoe@example.com"
            prependComponent={
              <TouchableOpacity
                style={{
                  width: SIZES.radius,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
                onPress={() => setShowPass(!showPass)}
              >
                <Image
                  style={{
                    height: 18,
                    width: 18,
                    tintColor: "black",
                  }}
                  source={icons.message}
                />
              </TouchableOpacity>
            }
          />

          <FormInput
            control={control}
            name="password"
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },

              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.)[A-Za-z\d$@$!%*?&#^~|_.`+=-]{9,}/,
                message:
                  "Password must be minimum of 9 characters, with at least 1 uppercase and 1 number",
              },
            }}
            placeholder="Password"
            autoCompleteType="password"
            secureTextEntry={!showPass}
            appendComponent={
              <TouchableOpacity
                style={{
                  width: SIZES.radius,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onPress={() => setShowPass(!showPass)}
              >
                <Image
                  style={{
                    height: 18,
                    width: 18,
                    tintColor: COLORS.gray,
                  }}
                  source={showPass ? icons.eye_close : icons.eye}
                />
              </TouchableOpacity>
            }
            prependComponent={
              <TouchableOpacity
                style={{
                  width: SIZES.radius,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
                onPress={() => setShowPass(!showPass)}
              >
                <Image
                  style={{
                    height: 18,
                    width: 18,
                    tintColor: "black",
                  }}
                  source={icons.lock}
                />
              </TouchableOpacity>
            }
          />

          <TextButton
            label={"Register"}
            iconPosition="RIGHT"
            buttonContainerStyle={{
              height: SIZES.radius * 2,
              borderRadius: SIZES.radius * 3,
              backgroundColor: COLORS.primary,
              borderColor: COLORS.lightGray,
              justifyContent: "center",
            }}
            labelStyle={{
              color: "white",
              fontSize: 14,
              lineHeight: 21,
            }}
            onPress={handleSubmit(registerHandler, errorHandler)}
          />

          <View
            style={{
              marginHorizontal: SIZES.base,
              flexDirection: "row",
              marginTop: SIZES.base,
              justifyContent: "space-between",
            }}
          >
            <LineDivider
              lineStyle={{
                marginTop: SIZES.base,
                width: "34%",
                backgroundColor: COLORS.primary,
              }}
            />
            <Text
              style={{
                // fontFamily: "Poppins-Regular",
                fontSize: 12,
                lineHeight: 18,
              }}
            >
              ********
            </Text>
            <LineDivider
              lineStyle={{
                marginTop: SIZES.base,
                width: "34%",
                backgroundColor: COLORS.primary,
              }}
            />
          </View>

          {/* Sign up */}
        </View>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Register;
