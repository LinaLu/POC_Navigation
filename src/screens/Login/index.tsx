import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { Center } from "../../components/Center";
import { RoutesParamList, RoutesNavProps } from "../../RoutesParamList";
import { AuthContext } from "../../contexts/Auth/AuthProvider";

export function Login({ navigation }: RoutesNavProps<"Login">) {
  const route = useRoute();
  const { login } = useContext(AuthContext);
  return (
    <>
      <Center>
        <Text>Login screen here!</Text>
        <Text>{`Current route: ${JSON.stringify(route)} `}</Text>
        <View style={{ padding: 10 }}>
          <Button
            onPress={() => {
              login();
              navigation.navigate("Home");
            }}
            title="Login"
          />
        </View>
      </Center>
    </>
  );
}
