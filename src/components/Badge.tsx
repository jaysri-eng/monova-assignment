import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../styles/theme";

export default function Badge({ label }: { label: string }) {
  const t = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: t.colors.chipBg }]}>
      <Text style={styles.text} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginRight: 6
  },
  text: { fontSize: 12, color: "#444" }
});
