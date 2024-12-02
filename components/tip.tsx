import { Text, View } from "react-native";

export default function Tip({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {/* bar */}
        <View
          style={{ width: 5, backgroundColor: "#9BDCD2", height: "auto" }}
        ></View>

        {/* container */}
        <View style={{ flexDirection: "column" }}>
          {/* title */}
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>

          {/* description */}
          <Text style={{ fontSize: 16 }}>{description}</Text>
        </View>
      </View>
    </>
  );
}
