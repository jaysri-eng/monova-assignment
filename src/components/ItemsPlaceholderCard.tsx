import { View, StyleSheet } from "react-native";

export default function PlaceholderCard() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View style={styles.image} />
        <View style={styles.line} />
        <View style={[styles.line, { width: "60%" }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { padding: 8 },
  card: {
    borderRadius: 14,
    padding: 10,
    backgroundColor: "#FFF",
    minHeight: 220,
    alignItems: "flex-start"
  },
  image: { width: "100%", height: 140, borderRadius: 12, backgroundColor: "#eee" },
  line: { height: 12, backgroundColor: "#eee", width: "80%", borderRadius: 6, marginTop: 12 }
});
