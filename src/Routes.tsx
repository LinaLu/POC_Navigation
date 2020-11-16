import React, { useContext, useEffect, useState } from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { Center } from "./components/Center";
import { Account } from "./screens/Account";
import { Billing } from "./screens/Billing";
import { Login } from "./screens/Login";
import { Logout } from "./screens/Logout";
import { RoutesParamList, RoutesNavProps } from "./RoutesParamList";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthContext } from "./contexts/Auth/AuthProvider";

interface RoutesProps {}
const Stack = createStackNavigator<RoutesParamList>();

function Home({ navigation, route }: RoutesNavProps<"Home">) {
  return (
    <Center>
      <View
        style={{
          height: 150,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Text>Home screen here!</Text>
        <Text> {`Current route: ${JSON.stringify(route)} `}</Text>
        <Button
          onPress={() => {
            navigation.navigate("Account");
          }}
          title="Go to the Account page"
        />
        <Button
          color="#841584"
          onPress={() => {
            navigation.navigate("Billing");
          }}
          title="Go to the Billing page"
        />
        <Button
          color="#808080"
          onPress={() => {
            navigation.navigate("Logout");
          }}
          title="Go to the Logout page"
        />
      </View>
    </Center>
  );
}

export const Routes: React.FC<RoutesProps> = ({}) => {
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
  }, []);

  if (loading) {
    return (
      <Center>
        <View style={{ paddingTop: 100 }}>
          <ActivityIndicator size="large" />
        </View>
      </Center>
    );
  }

  const config = {
    screens: {
      Home: "home",
      Account: "account",
      Billing: "billing",
      Logout: "logout",
    },
  };

  const linking = {
    prefixes: ["http://localhost:3000/"],
    config,
  };

  return (
    <NavigationContainer linking={linking}>
      {user ? (
        <>
          <View>
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
          </View>
        </>
      ) : (
        //Login
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{ headerTitle: "React-native web navigation POC" }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerTitle: "React-native web navigation POC" }}
            name="Logout"
            component={Logout}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
