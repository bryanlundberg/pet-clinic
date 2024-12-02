import { AntDesign, Foundation } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Information() {
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Foundation name="telephone" size={24} color="#05A78E" />
          <Text style={{ color: "gray", fontWeight: "bold", fontSize: 16 }}>
            +56 9 87549824
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 3,
          }}
        >
          <AntDesign name="mail" size={24} color="#05A78E" />
          <Text style={{ color: "gray", fontWeight: "bold", fontSize: 16 }}>
            contacto@petclinic.cl
          </Text>
        </View>
      </View>
    </>
  );
}
