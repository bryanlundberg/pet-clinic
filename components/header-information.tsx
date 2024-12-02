import { View } from "react-native";
import Logo from "./logo";
import Information from "./information";

export default function HeaderInformation() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Logo size="sm" />
        <Information />
      </View>
    </>
  );
}
