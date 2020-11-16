import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { Center } from "../../components/Center";
import { RoutesNavProps } from "../../RoutesParamList";
import { AuthContext } from "../../contexts/Auth/AuthProvider";

export function Login({ navigation, route }: RoutesNavProps<"Login">) {
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
