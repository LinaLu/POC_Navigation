import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { Center } from "../../components/Center";
import { RoutesParamList, RoutesNavProps } from "../../RoutesParamList";
import { AuthContext } from "../../contexts/Auth/AuthProvider";

export function Logout({ navigation }: RoutesNavProps<"Logout">) {
  const route = useRoute();
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
