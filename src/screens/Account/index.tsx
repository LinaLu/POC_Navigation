import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { Center } from "../../components/Center";

export function Account({ navigation }: any) {
  const route = useRoute();
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
