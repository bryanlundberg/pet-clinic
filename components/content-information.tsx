import Logo from "@/components/logo";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function ContentInformation() {
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 40,
        }}
      >
        <Logo size="lg" />
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          <Text style={{ textDecorationLine: "underline" }}>RESERVA</Text> TU
          HORA
        </Text>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>CON NOSOTROS</Text>
        <Text style={{ fontSize: 15, opacity: 0.5 }}>
          ATENCIÓN VETERINARIA DE PRIMER NIVEL
        </Text>

        <Link href={"/details"} asChild>
          <Pressable
            style={{
              borderColor: "green",
              backgroundColor: "#05A78E",
              paddingStart: 20,
              paddingEnd: 20,
              marginTop: 20,
              borderRadius: 12,
              minHeight: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                color: "white",
                fontWeight: "bold",
              }}
            >
              RESERVA TU HORA
            </Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
