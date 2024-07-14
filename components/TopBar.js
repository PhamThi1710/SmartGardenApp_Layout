import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Feather } from "@expo/vector-icons";
import Temperature from "../screens/Statistics_temperature";
import Plant from "../screens/Statistics_plant";
import Light from "../screens/Statistics_light";
import Humidity from "../screens/Statistics_humidity";

const Tab = createMaterialTopTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: "#30895E",
        },
      }}
    >
      <Tab.Screen
        name="plant"
        component={Plant}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="feather" size={24} color={color} />
              <Text style={{ color: color, marginLeft: 5 }}>
            
                <Text style={{ textAlign: "center"}}>Cây</Text>
                {"\n"}
                <Text style={{ textAlign: "center" }}>trồng</Text>
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="temperature"
        component={Temperature}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="thermometer" size={24} color={color} />
              <Text style={{ color: color, marginLeft: 5 }}>
            
                <Text style={{ textAlign: "center"}}>Nhiệt</Text>
                {"\n"}
                <Text style={{ textAlign: "center" }}>độ</Text>
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="light"
        component={Light}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="sun" size={24} color={color} />
              <Text style={{ color: color, marginLeft: 5 }}>
            
                <Text style={{ textAlign: "center"}}>Ánh</Text>
                {"\n"}
                <Text style={{ textAlign: "center" }}>sáng</Text>
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="humidity"
        component={Humidity}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="droplet" size={24} color={color} />
              <Text style={{ color: color, marginLeft: 5 }}>
            
                <Text style={{ textAlign: "center"}}>Độ</Text>
                {"\n"}
                <Text style={{ textAlign: "center" }}>ẩm</Text>
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TopBarNavigator() {
  return <MyTab />;
}
