import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RoutesParamList } from "../RoutesParamList";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";

interface LoginStackProps {}

const Stack = createStackNavigator<RoutesParamList>();

export const LoginStack: React.FC<LoginStackProps> = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerTitle: "React-native web navigation POC" }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerTitle: "React-native web navigation POC" }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};
