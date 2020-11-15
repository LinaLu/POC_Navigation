import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { Center } from "./components/Center";
import { Account } from "./screens/Account";
import { Billing } from "./screens/Billing";
import { RoutesParamList, RoutesNavProps } from "./RoutesParamList";

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
      </View>
    </Center>
  );
}
export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
