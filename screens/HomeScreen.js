import React, { useState } from "react";
import {
  Switch,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "./GlobalStyles";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/EvilIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const data = [
  { label: "Tiêu", value: "1" },
  { label: "Cà phê", value: "2" },
  { label: "Rau cải", value: "3" },
  { label: "Rau lang", value: "4" },
];

function HomeScreen({ navigation }) {
  const [value, setValue] = useState(null);
  const [light, setLight] = useState(false);
  const [fan, setFan] = useState(true);
  const [water, setWater] = useState(false);
  const toggleLight = () => {
    setLight((previousState) => !previousState);
  };
  const toggleFan = () => {
    setFan((previousState) => !previousState);
  };
  const toggleWater = () => {
    setWater((previousState) => !previousState);
  };
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="select1"
            size={20}
          />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.xinChoParent}
        onPress={() => navigation.navigate("List Plants")}
      >
        <Text style={styles.xinCho}>Xin chào!</Text>
        <Text style={styles.bnAngC}>Bạn đang có 4 cây trồng trong vườn</Text>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse.png")}
        />
      </Pressable>
      <View style={styles.selectAddPlant}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Tiêu"
          searchPlaceholder="Search..."
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="menuunfold"
              size={20}
            />
          )}
          renderItem={renderItem}
        />
        <View style={styles.plusButton}>
          <Pressable onPress={() => navigation.navigate("Add New")}>
            <Ionicons style={styles.plus} name="plus" size={50}></Ionicons>
          </Pressable>
        </View>
      </View>
      <View style={[styles.chTNgWrapper, styles.wrapperLayout]}>
        <Text style={[styles.chT, styles.textTypo]}>Trạng thái cây trồng</Text>
      </View>
      <View>
        <ImageBackground
          style={styles.headerSectionIcon}
          resizeMode="cover"
          source={require("../assets/temp.png")}
        >
          <View style={[styles.tittle, styles.tittlePosition]}>
            <Text style={[styles.text, styles.textTypo]}>24</Text>
            <View>
              <Text style={[styles.c, styles.textTypo]}>C</Text>
              <Entypo style={styles.circe} name="vinyl" size={10}></Entypo>
            </View>
          </View>
          <Text style={[styles.nhit, styles.nhitLayout]}>Nhiệt độ</Text>
          <Text style={[styles.trngThi, styles.trngLayout]}>Trạng thái</Text>
          <Text style={[styles.tt, styles.ttTypo]}>Tốt</Text>
        </ImageBackground>

        <ImageBackground
          style={[styles.headerSectionIcon1, styles.headerIconLayout]}
          resizeMode="cover"
          source={require("../assets/Humidty.png")}
        >
          <View style={[styles.tittle, styles.tittlePosition]}>
            <Text
              style={[
                styles.text,
                styles.textTypo,
                { width: 100, fontSize: 25, left: -10, color: "black" },
              ]}
            >
              4000 lux
            </Text>
          </View>
          <Text
            style={[styles.nhit, styles.nhitLayout, { width: 200, left: 0 }]}
          >
            Cường độ ánh sáng
          </Text>
          <Text style={[styles.trngThi, styles.trngLayout]}>Trạng thái</Text>
          <Text style={[styles.tt, styles.ttTypo, { color: "black", top: 50 }]}>
            Tốt
          </Text>
        </ImageBackground>
        <ImageBackground
          style={[styles.headerSectionIcon2, styles.headerIconLayout]}
          resizeMode="cover"
          source={require("../assets/light.png")}
        >
          <View style={[styles.tittle, styles.tittlePosition]}>
            <Text
              style={[
                styles.text,
                styles.textTypo,
                { color: Color.colorBlack, width: 100, top: -5 },
              ]}
            >
              20%
            </Text>
          </View>
          <Text style={[styles.nhit, styles.nhitLayout]}>Độ ẩm</Text>
          <Text style={[styles.trngThi, styles.trngLayout]}>Trạng thái</Text>
          <Text style={[styles.tt, styles.ttTypo, { color: "red", top: 50 }]}>
            Warning
          </Text>
          <Text style={[styles.bnNnBt, styles.nhitLayout]}>
            Bạn nên bật chế độ tưới nước!
          </Text>
        </ImageBackground>
        <View style={[styles.chTNgWrapper1, styles.wrapperLayout]}>
          <Text style={[styles.chT, styles.textTypo]}>Chế độ tự động</Text>
        </View>
        <View style={styles.onoffParent}>
          <View>
            <Entypo
              style={[styles.onoffChild, { color: "gold" }]}
              name="light-bulb"
              size={40}
            ></Entypo>
            <View style={styles.onoffbutton}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={light ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleLight}
                value={light}
              />
            </View>
          </View>
          <View>
            <MaterialCommunityIcons
              style={[styles.onoffChild, { color: "purple" }]}
              name="ceiling-fan"
              size={40}
            ></MaterialCommunityIcons>
            <View style={styles.onoffbutton}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={fan ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleFan}
                value={fan}
              />
            </View>
          </View>
              <View>
              <MaterialCommunityIcons
            style={[styles.onoffChild, { color: "green" }]}
            name="water-outline"
            size={40}
          ></MaterialCommunityIcons>
          <View style={styles.onoffbutton}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={water ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleWater}
              value={water}
            />
          </View>
              </View>
          
        </View>
        <View style={styles.onoffbuttonParent}>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  xinChoParent: {
    left: 14,
    width: 312,
    height: 47,
    position: "absolute",
    overflow: "hidden",
  },
  xinCho: {
    width: 62,
    height: 13,

    fontWeight: "700",
    left: 76,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    top: 10,
    position: "absolute",
  },
  bnAngC: {
    top: 28,
    width: 226,
    height: 18,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,

    fontWeight: "700",
    left: 76,
    position: "absolute",
  },
  ellipseIcon: {
    marginLeft: -150,
    top: 6,
    width: 46,
    height: 46,
    left: "50%",
    position: "absolute",
  },
  dropdown: {
    width: "77%",
    marginTop: 60,
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    flexBasis: "80%",
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  selectAddPlant: {
    flexDirection: "row",
  },
  plusButton: {
    width: "10%",
    height: "33.2%",
    backgroundColor: "#8fbc8f",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
    position: "absolute",
    flexBasis: "20%",
    right: 10,
    top: "50%",
  },
  plus: {
    width: "100%",
    height: "100%",
    top: "-12%",
  },
  chTNgWrapper: {
    marginTop: 115,
    left: 3,
  },
  chTNgWrapper1: {
    top: 419,
  },
  wrapperLayout: {
    width: 425,
    backgroundColor: Color.colorMintcream,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  chT: {
    width: 200,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    letterSpacing: 0.2,
    left: 8,
    top: 2,
    height: 30,
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "800",
    textAlign: "left",
  },
  headerSectionIcon: {
    left: 11,
    height: 119,
    width: 374,
    borderRadius: Border.br_7xl,
    top: 28,
    position: "absolute",
    overflow: "hidden",
  },
  tittle: {
    left: 59,
    width: 81,
    height: 52,
  },
  tittlePosition: {
    top: 44,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_21xl,
    letterSpacing: 0.4,
    width: 54,
    height: 50,
    color: Color.colorLightsteelblue_100,
    fontWeight: "800",
    top: 2,
    left: 0,
    position: "absolute",
  },
  c: {
    left: 50,
    color: Color.colorLightsteelblue_100,
    width: 50,
    height: 50,
    fontSize: FontSize.size_21xl,
    fontWeight: "800",
    letterSpacing: 0.2,
    top: 4,
    position: "absolute",
  },
  nhit: {
    top: 8,
    left: 31,
    width: 136,
    fontSize: FontSize.size_base,
    height: 21,

    fontWeight: "800",
    letterSpacing: 0.2,
    textAlign: "center",
  },
  nhitLayout: {
    height: 21,
    color: Color.colorBlack,
    position: "absolute",
  },
  trngThi: {
    top: 12,
    height: 21,
    color: Color.colorBlack,
    position: "absolute",
    fontSize: FontSize.size_base,

    fontWeight: "800",
    letterSpacing: 0.2,
    textAlign: "center",
  },
  trngLayout: {
    width: 116,
    left: 222,
  },
  tt: {
    top: 58,
    color: Color.colorLightsteelblue_100,
  },
  ttTypo: {
    height: 31,
    width: 138,
    left: 211,

    fontWeight: "800",
    letterSpacing: 0.2,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    position: "absolute",
  },
  circe: {
    left: 43,
    color: Color.colorLightsteelblue_100,
    width: 50,
    height: 50,
    fontWeight: "800",
    letterSpacing: 0.2,
    top: 10,
    position: "absolute",
  },
  headerSectionIcon1: {
    top: 161,
  },
  headerIconLayout: {
    left: 10,
    height: 119,
    width: 374,
    borderRadius: Border.br_7xl,
    position: "absolute",
    overflow: "hidden",
  },
  bnNnBt: {
    top: 98,
    left: 97,
    fontWeight: "200",

    width: 183,
    letterSpacing: 0.1,
    height: 21,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  headerSectionIcon2: {
    top: 295,
  },
  onoffParent: {
    top: 470,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  onoffChild: {
    marginRight: 39,
    marginLeft: 47,
  },
  onoffbuttonParent: {
    left: 5,
    top: 465,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  onoffbutton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop:16
  },
});

export default HomeScreen;
