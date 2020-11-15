import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { Center } from "../../components/Center";

export function Billing({ navigation }: any) {
  const route = useRoute();

  return (
    <Center>
      <Text>Billing screen here!</Text>
      <Text> {`Current route: ${JSON.stringify(route)} `}</Text>
      {console.log("Billing Route:", route)}
      <View style={{ padding: 10 }}>
        <Button
          onPress={() => {
            navigation.navigate("Home");
          }}
          title="Go to the Home page"
        />
      </View>
    </Center>
  );
}
