import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CollectionsScreen from "./CollectionsScreen";
import OutfitsScreen from "./OutfitsScreen";
import ItemsScreen from "./ItemsScreen";
import { useTheme } from "../styles/theme";

export default function SavedScreen() {
  const [tab, setTab] = useState<"collections" | "outfits" | "items">("collections");
  const t = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: t.colors.background }}>
      <Text style={[styles.title, t.typography.h1]}>Saved</Text>

      <View style={styles.tabbar}>
        <TabButton label="Collections" active={tab === "collections"} onPress={() => setTab("collections")} />
        <TabButton label="Outfits" active={tab === "outfits"} onPress={() => setTab("outfits")} />
        <TabButton label="Items" active={tab === "items"} onPress={() => setTab("items")} />
      </View>

      {tab === "collections" && <CollectionsScreen />}
      {tab === "outfits" && <OutfitsScreen />}
      {tab === "items" && <ItemsScreen />}
    </View>
  );
}

function TabButton({ label, active, onPress }: { label: string; active?: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.tab, active ? styles.tabActive : undefined]}>
      <Text style={{ color: active ? "#000" : "#6b6b6b", fontWeight: active ? "700" : "500" }}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabbar: { 
      flexDirection: "row", 
      padding: 12, 
      gap: 8, 
      justifyContent: "flex-start", 
      backgroundColor: "transparent", 
      borderColor: "#E6CFC6", 
      borderWidth: 1, 
      borderRadius: 20,
      marginHorizontal:20,
      height: 60,
    },
  tab: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: "transparent", marginHorizontal: 6 },
  tabActive: { borderColor: "#E6CFC6", borderWidth: 1 },
  title: {paddingVertical: 8, marginHorizontal:6, paddingHorizontal: 16}
});
