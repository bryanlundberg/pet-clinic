import { StyleSheet, Text, View } from "react-native";

export default function FooterContact() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>contacto@petclinic.cl</Text>
        <Text style={styles.subtitle}>+56 9 87549824</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    color: "#05A78E",
  },
  subtitle: {
    fontWeight: "500",
    opacity: 0.6,
  },
});
