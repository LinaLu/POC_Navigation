import React from "react";
import { Button, Text, View } from "react-native";
import { Center } from "../../components/Center";
import { RoutesNavProps } from "../../RoutesParamList";

export function Home({ navigation, route }: RoutesNavProps<"Home">) {
  return (
    <>
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
    </>
  );
}
