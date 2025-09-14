import { View, StyleSheet } from "react-native";

export default function OutfitsPlaceholderCard() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View style={styles.leftImage} />
        <View style={styles.rightStack}>
          <View style={[styles.smallImage, { marginBottom: 6 }]} />
          <View style={styles.smallImage} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { padding: 8 },
  card: {
    flexDirection: "row",
    borderRadius: 14,
    padding: 10,
    backgroundColor: "#FFF",
    minHeight: 250,
  },
  leftImage: {
    flex: 2,
    marginRight: 8,
    borderRadius: 12,
    backgroundColor: "#eee",
  },
  rightStack: {
    flex: 1,
    justifyContent: "space-between",
  },
  smallImage: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: "#eee",
  },
});
