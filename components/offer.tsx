import { Text, View } from "react-native";

export default function Offer() {
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 34, color: "#05A78E", fontWeight: "bold" }}>
          $39,990
        </Text>
        <View>
          <Text style={{ fontWeight: "bold" }}>
            20% <Text style={{ fontWeight: "regular" }}>DE DESCUENTO</Text>
          </Text>
          <Text style={{ fontWeight: "bold" }}>PRIMERA CONSULTA</Text>
        </View>
      </View>
    </>
  );
}
