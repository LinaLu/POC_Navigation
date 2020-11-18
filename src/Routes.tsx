import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator, Text } from "react-native";
import { Center } from "./components/Center";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthContext } from "./contexts/Auth/AuthProvider";
import { AuthStack } from "./navigation/AuthStack";
import { LoginStack } from "./navigation/LoginStack";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //check if user is login
    AsyncStorage.getItem("user")
      .then((user) => {
        console.log(user);
        if (user) {
          //Login if user not null
          login();
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const config = {
    screens: {
      Home: "",
      Account: "account",
      Billing: "billing",
      Logout: "logout",
      Login: "login",
    },
  };

  const linking = {
    prefixes: ["http://localhost:3000/"],
    config,
  };

  return loading ? (
    <ActivityIndicator size="large" />
  ) : (
    <NavigationContainer linking={linking}>
      {user ? <AuthStack></AuthStack> : <LoginStack></LoginStack>}
    </NavigationContainer>
  );
};
