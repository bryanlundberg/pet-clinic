import { PropsWithChildren } from "react";
import { Image, Text, View } from "react-native";

export default function Logo({
  size,
}: PropsWithChildren & { size: "sm" | "lg" }) {
  const sizeLogo = size === "lg" ? 60 : 24;
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Text
          style={{
            color: "#05A78E",
            fontSize: size === "sm" ? 22 : 60,
            fontWeight: "bold",
          }}
        >
          PET
        </Text>
        <Image
          source={require("@/assets/images/home/paw.png")}
          style={{
            height: sizeLogo,
            width: sizeLogo,
            objectFit: "scale-down",
          }}
          height={500}
          width={500}
        />
        <Text
          style={{
            color: "#05A78E",
            fontSize: size === "sm" ? 22 : 60,
            fontWeight: "bold",
          }}
        >
          CLINIC
        </Text>
      </View>
    </>
  );
}
