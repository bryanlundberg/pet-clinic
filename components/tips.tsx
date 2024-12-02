import { View } from "react-native";
import Tip from "./tip";

export default function Tips() {
  return (
    <>
      <View
        style={{
          flexDirection: "column",
          gap: 50,
          padding: 5,
          marginTop: 100,
          marginBottom: 50,
        }}
      >
        <Tip
          title="ATENCIÓN PERSONALIZADA"
          description="Veterinarios capacitados y compasivos, brindando atención personalizada para que tu mascota se sienta segura y cómoda."
        />

        <Tip
          title="TECNOLOGÍA AVANZADA"
          description="Equipos de diagnóstico de última generación, ofreciendo un servicio rápido y preciso para el cuidado de tu mascota."
        />

        <Tip
          title="HORARIOS Y RESERVAS FLEXIBLES"
          description="Horarios adaptados a tu rutina y reservas en línea, facilitando el acceso a la atención veterinaria sin complicaciones."
        />
      </View>
    </>
  );
}
