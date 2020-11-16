import React from "react";
import { Button, Text, View } from "react-native";
import { Center } from "../../components/Center";
import { RoutesNavProps } from "../../RoutesParamList";

export function Account({ navigation, route }: RoutesNavProps<"Account">) {
  return (
    <>
      <Center>
        <Text>Account screen here!</Text>
        <Text>{`Current route: ${JSON.stringify(route)} `}</Text>
        <View style={{ padding: 10 }}>
          <Button
            onPress={() => {
              navigation.navigate("Home");
            }}
            title="Go to the Home page"
          />
        </View>
      </Center>
    </>
  );
}
