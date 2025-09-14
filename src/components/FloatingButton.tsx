import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

export default function FloatingButton({ onPress }: { onPress?: () => void }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel="Create outfit"
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.btn}
    >
      <Image
        source={{ uri: "https://media.istockphoto.com/id/1179101359/vector/sparkles-stars-icon-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=uBrHWCkxq1D_sgsHpglcH_-jorRDTwCeS9GbPyOdBaI=" }} // yellow sparkle emoji
        style={styles.sparkle}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    right: 16,
    bottom: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10
  },
  sparkle: {
    width: 45,
    height: 45,
    color: "yellow",
    transform: [{ rotate: "25deg" }]
  }
});
