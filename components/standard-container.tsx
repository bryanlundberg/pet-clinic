import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";

export default function StandardContainer({ children }: PropsWithChildren) {
  return (
    <>
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: "white",
          }}
        >
          {children}
        </View>
      </ScrollView>
    </>
  );
}
