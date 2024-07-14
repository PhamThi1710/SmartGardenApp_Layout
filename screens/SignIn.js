import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import { Color, Border, FontSize, } from "./GlobalStyles";

function SignIn({ navigation }) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>


        <View style={styles.body}>


          <View style={[styles.SignInWrapper, styles.SignInWrapper_plus]}>
            <Text style={styles.title_SignIn}>SIGN IN</Text>
            <Pressable
              style={[styles.SignInButton, styles.SignInButton_Pos]}
              onPress={() => navigation.navigate('Welcome Screen')}
            >
              <Text style={styles.SignInButton_Text}>Sign In</Text>
            </Pressable>

            <View style={styles.emailphoneNumber}>
              <TextInput
                style={[styles.emailphoneNumber2, styles.signUp2FlexBox]}
                placeholder="Email/Phone Number"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
              />
            </View>
            <View style={[styles.password, styles.passwordPosition1]}>
              <TextInput secureTextEntry={true} style={[styles.password2, styles.passwordPosition]} placeholder="Password" />
            </View>
            
            <View style={[styles.SignIn5, styles.signBorder]}>
              <Text style={[styles.SignInWith, styles.signTypo]}>
                Sign in with Google
              </Text>
              <Image
                style={styles.googleIcon1}
                contentFit="cover"
                source={require("../assets/google-icon-1.png")}
              />
            </View>


          </View>




          <View style={[styles.signUp, styles.SignInWrapper_plus]}>
            <Text style={[styles.iAlreadyHave, styles.signUp2FlexBox]}>
              Don't have an account?
            </Text>
            <Pressable
              style={[styles.signUp1, styles.signBorder]}
              onPress={() => navigation.navigate("Sign Up")}
            />
            <Text style={[styles.signUp2, styles.signTypo]}>Sign Up</Text>
          </View>
        </View>




      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    height: "76.29%",
    width: "87.91%",
    top: "16.85%",
    right: "5.58%",
    bottom: "6.87%",
    left: "6.51%",
    position: "absolute",
  },
  SignInWrapper: {
    height: "66.76%",
    bottom: "87.91%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  SignInWrapper_plus: {
    backgroundColor: '#EFF8F1',
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
  },
  title_SignIn: {
    height: "12.78%",
    width: "34.76%",
    top: "7.89%",
    left: "32.22%",
    fontSize: 32,
    color: Color.colorBlack,
    textAlign: "left",

    fontWeight: 'bold',
    position: "absolute",
  },
  SignInButton: {
    width: "71.96%",
    top: "69.96%",
    right: "14.71%",
    bottom: "19.22%",
    backgroundColor: Color.colorSeagreen_200,
    borderRadius: Border.br_3xs,
    left: "13.33%",
    height: "10.82%",
    position: "absolute",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  SignInButton_Pos: {
    left: "13.33%",
    height: "10.82%",
  },
  SignInButton_Text: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,

    left: "5",
    right: "5",
    fontWeight: "700",
    position: "absolute",
  },
  signUp2FlexBox: {
    alignItems: "center",
    display: "flex",
  },
  passwordPosition1: {

    left: "7.35%",
    width: "84.87%",
    height: "18.94%",
    right: "7.78%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,

  },
  passwordPosition: {
    top: "11.17%",
    height: "68.81%",
    position: "absolute",
  },
  password1Layout: {
    backgroundColor: Color.colorWhite,
    width: "84.79%",
    borderRadius: Border.br_3xs,
  },
  emailphoneNumber1: {
    right: "7.59%",
    bottom: "36.76%",
    left: "7.62%",
    top: "10.26%",
    height: "55.97%",
    position: "absolute",
    textAlign: "center",
    alignItems: "center",
  },
  emailphoneNumber2: {
    width: "81.32%",
    left: "11.06%",
    color: Color.colorGray_300,
    display: "flex",
    fontSize: FontSize.size_xl,
    textAlign: "left",

    fontWeight: "700",
    top: "21.26%",
    height: "55.97%",
    position: "absolute",
  },
  emailphoneNumber: {
    height: "25.72%",
    width: "85.4%",
    top: "23.64%",
    bottom: "60.64%",
    left: "6.83%",
    right: "7.78%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  password1: {
    right: "8.17%",
    bottom: "20.02%",
    left: "7.04%",
    backgroundColor: Color.colorWhite,
    width: "84.79%",
    borderRadius: Border.br_3xs,

  },
  password2: {
    top: "19.26%",
    width: "81.33%",
    left: "10.5%",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_300,
    fontSize: FontSize.size_xl,
    textAlign: "left",

    fontWeight: "700",
  },
  password: {
    top: "43.55%",
    bottom: "47.5%",
  },
  SignIn5: {
    top: "84.85%",
    right: "14.29%",
    bottom: "4.33%",
    left: "13.33%",
    height: "10.82%",
  },
  signBorder: {
    borderWidth: 3,
    borderColor: Color.colorDarkgreen,
    width: "72.38%",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
    borderStyle: "solid",

  },
  signUp1: {
    height: "37.23%",
    top: "43.97%",
    right: "13.86%",
    bottom: "18.79%",
    left: "13.76%",

  },
  signUp2: {
    height: "18.51%",
    width: "20.75%",
    top: "53.19%",
    left: "40.53%",
    alignItems: "center",
    display: "flex",
  },
  signUp: {
    top: 420,
    left: 0,
    width: '100%',
    height: 141,

  },
  iAlreadyHave: {
    height: "26.95%",
    width: "59.47%",
    top: "15.93%",
    left: "22.37%",
    fontSize: FontSize.size_mini,

    color: Color.colorDarkgreen,
    textAlign: "left",
    position: "absolute",
  },
  signTypo: {
    color: Color.colorSeagreen_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",

    fontWeight: "700",
    position: "absolute",
  },
  googleIcon1: {
    left: 10,
    width: 31,
    height: 36,
    top: 0,
    position: "absolute",
  },
  SignInWith: {
    top: 3,
    left: 55,
  },
});

export default SignIn;
