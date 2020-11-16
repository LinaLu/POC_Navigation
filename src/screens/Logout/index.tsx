import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { Center } from "../../components/Center";
import { RoutesNavProps } from "../../RoutesParamList";
import { AuthContext } from "../../contexts/Auth/AuthProvider";

export function Logout({ navigation, route }: RoutesNavProps<"Logout">) {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <Center>
        <Text>Logout screen here!</Text>
        <Text>{`Current route: ${JSON.stringify(route)} `}</Text>
        <View style={{ padding: 10 }}>
          <Button
            onPress={() => {
              logout();
              navigation.navigate("Login");
            }}
            title="Logout"
          />
        </View>
      </Center>
    </>
  );
}
