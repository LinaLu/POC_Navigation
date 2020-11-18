import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RoutesParamList } from "../RoutesParamList";
import { Account } from "../screens/Account";
import { Billing } from "../screens/Billing";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Logout } from "../screens/Logout";

interface AuthStackProps {}

const Stack = createStackNavigator<RoutesParamList>();

export const AuthStack: React.FC<AuthStackProps> = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerTitle: "React-native web navigation POC" }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Account"
        options={{ header: () => null }}
        component={Account}
      />
      <Stack.Screen
        name="Billing"
        options={{ header: () => null }}
        component={Billing}
      />
      <Stack.Screen
        name="Logout"
        options={{ header: () => null }}
        component={Logout}
      />
      <Stack.Screen
        name="Login"
        options={{ header: () => null }}
        component={Login}
      />
    </Stack.Navigator>
  );
};
