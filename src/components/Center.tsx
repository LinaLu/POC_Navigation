import React, { ReactNode } from "react";
import { Dimensions, View } from "react-native";
interface CenterProps {}

type Props = {
  children: ReactNode | ReactNode[];
};

export function Center({ children }: Props) {
  return (
    <View
      style={{
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {children}
      </View>
    </View>
  );
}
