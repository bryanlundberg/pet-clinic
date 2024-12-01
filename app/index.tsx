import { AntDesign, Foundation } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* logo */}
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Text style={{ color: "#05A78E", fontSize: 22, fontWeight: "bold" }}>
            PET
          </Text>
          <Image
            source={require("@/assets/images/home/paw.png")}
            height={150}
            width={150}
          />
          <Text style={{ color: "#05A78E", fontSize: 22, fontWeight: "bold" }}>
            CLINIC
          </Text>
        </View>

        {/* information */}
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
      </View>
    </View>
  );
}
