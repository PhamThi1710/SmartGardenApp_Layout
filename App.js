import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/Tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AboutUs from "./screens/AboutUs";
import AccountInfo from "./screens/AccountInfo";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import WelcomeScreen from "./screens/WelcomeScreen";
import AddNew from "./screens/AddNew.js";
import MainListPlants from "./screens/MainListPlants.js";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen
          name="Bottomtabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add New" component={AddNew} />
        <Stack.Screen name="List Plants" component={MainListPlants} />
        <Stack.Screen
          name="AccountInfo"
          component={AccountInfo}
          options={{ headerBackTitle: "Tài khoản" }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ headerBackTitle: "Tài khoản" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
