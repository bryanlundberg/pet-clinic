import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function ProgressForm() {
  return (
    <>
      <View style={styles.progressContainer}>
        <ProgressFormItem label="ESPECIALIDAD" isCheck />
        <ProgressFormItem label="INFORMACIÓN" />
        <ProgressFormItem label="PROFESIONAL" />
        <ProgressFormItem label="FECHA Y HORA" />
        <ProgressFormItem label="DATOS" />
        <View
          style={{
            width: 300,
            height: 6,
            backgroundColor: "#CAD0D6",
            position: "absolute",
            top: 11,
            left: 60,
            zIndex: 0,
          }}
        ></View>
      </View>
    </>
  );
}

function ProgressFormItem({
  label,
  isCheck,
}: {
  label: string;
  isCheck?: boolean;
}) {
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 80,
          gap: 10,
        }}
      >
        <View
          style={{
            width: 28,
            height: 28,
            backgroundColor: "#CAD0D6",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isCheck && (
            <AntDesign
              name="checkcircle"
              size={18}
              color="#05A78E"
              style={{ zIndex: 1 }}
            />
          )}
        </View>

        <Text style={styles.progressText}>{label}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  progressText: {
    fontSize: 10,
    textAlign: "center",
  },
});
