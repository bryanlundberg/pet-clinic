import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";

export default function StandardContainer({
  children,
  backgroundColor = "white",
}: PropsWithChildren & { backgroundColor?: string }) {
  return (
    <>
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: backgroundColor,
          }}
        >
          {children}
        </View>
      </ScrollView>
    </>
  );
}
