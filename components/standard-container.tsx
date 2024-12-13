import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";

export default function StandardContainer({
  children,
  backgroundColor = "white",
  styles,
}: PropsWithChildren & { backgroundColor?: string; styles: any }) {
  return (
    <>
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: backgroundColor,
            ...styles,
          }}
        >
          {children}
        </View>
      </ScrollView>
    </>
  );
}
