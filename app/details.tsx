import HeaderInformation from "@/components/header-information";
import ProgressForm from "@/components/progress-form";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

export default function Details() {
  const [config, setConfig] = useState({
    pet: "",
  });
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            backgroundColor: "#F1F8FF",
            padding: 10,
          }}
        >
          <HeaderInformation />
          <ProgressForm />
        </View>

        <View
          style={{
            backgroundColor: "white",
            flexGrow: 1,
          }}
        >
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 22,
                color: "#05A78E",
                fontWeight: "bold",
              }}
            >
              SELECCIONE EL TIPO DE MASCOTA
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, opacity: 0.6 }}>
              ¿Que tipo de mascota tienes?
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <CheckboxAnimal
            selected={true}
            name="PERRO"
            source={require("@/assets/images/cite/dog.png")}
          />
          <CheckboxAnimal
            selected={false}
            name="GATO"
            source={require("@/assets/images/cite/cat.png")}
          />
          <CheckboxAnimal
            selected={false}
            name="CONEJO"
            source={require("@/assets/images/cite/rabbit.png")}
          />
          <CheckboxAnimal
            selected={false}
            name="AVE"
            source={require("@/assets/images/cite/bird.png")}
          />
        </View>
      </View>
    </>
  );
}

function CheckboxAnimal({
  source,
  name,
  selected,
}: {
  source: ImageSourcePropType;
  name: string;
  selected: boolean;
}) {
  return (
    <>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#05A78E",
          width: 200,
          justifyContent: "center",
          alignItems: "center",
          height: 180,
          backgroundColor: selected ? "#DAF2EE" : "",
          position: "relative",
        }}
      >
        <Image source={source} width={200} height={200} alt="dog" />
        <Text
          style={{
            textAlign: "center",
            color: "#05A78E",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          {name}
        </Text>

        {selected && (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 32,
              height: 32,
              backgroundColor: "#05A78E",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: 12,
            }}
          >
            <Entypo name="check" size={19} color="white" />
          </View>
        )}
      </View>
    </>
  );
}
