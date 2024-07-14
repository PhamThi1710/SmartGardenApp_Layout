import React from "react";
import {
  Image,
  Pressable,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/EvilIcons";
function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          style={[styles.welcomescreen1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/welcomescreen.png")}
        />
        <Text style={styles.welcomeToOur}>Welcome to our system !</Text>

        <View style={styles.arrowButton}>
          <Pressable onPress={() => navigation.navigate("Bottomtabs")}>
            <Ionicons
              style={styles.arrow}
              name="arrow-right"
              size={80}
              color="#FFFFFF"
            ></Ionicons>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  welcomescreen1Icon: {
    height: "31.41%",
    width: "98%",
    top: "20.92%",
    right: "2%",
    bottom: "47.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    left: "0%",
    position: "absolute",
  },
  arrowButton: {
    top: "33%",

    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  arrow: {},
  welcomeToOur: {
    top: "27%",
    left: "1%",
    fontSize: 40,
    textAlign: "center",
    color: "#fffaf0",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
