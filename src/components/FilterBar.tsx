import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Menu } from "react-native-paper";
import { useTheme } from "../styles/theme";
import { Ionicons } from "@expo/vector-icons";

export default function FilterBar({
  filters,
  onToggle,
}: {
  filters: { [k: string]: string | null };
  onToggle: (k: string, v?: string | null) => void;
}) {
  const t = useTheme();
  const options = [
    { key: "type", label: "Type", values: ["Crop", "Denim", "Bag"] },
    { key: "style", label: "Style", values: ["Shirt", "Shorts", "Trousers"] },
    { key: "mood", label: "Mood", values: ["Work", "Leisure"] },
    { key: "color", label: "Color", values: ["Black", "Blue", "Brown"] },
  ];

  const [visible, setVisible] = useState<{ [k: string]: boolean }>({});

  const openMenu = (key: string) => setVisible({ ...visible, [key]: true });
  const closeMenu = (key: string) => setVisible({ ...visible, [key]: false });

  return (
    <View style={styles.row}>
      {options.map((opt) => {
        const isActive = !!filters[opt.key];
        return (
          <Menu
            key={opt.key}
            visible={!!visible[opt.key]}
            onDismiss={() => closeMenu(opt.key)}
            anchor={
              <TouchableOpacity
                style={[
                  styles.pill,
                  isActive ? { backgroundColor: t.colors.pillBg } : {},
                ]}
                onPress={() => openMenu(opt.key)}
              >
                <View style={styles.pillContent}>
                  <Text
                    style={[
                      styles.pillText,
                      isActive && { fontWeight: "600" }, 
                    ]}
                  >
                    {filters[opt.key] || opt.label}
                  </Text>

                  {isActive ? (
                    <TouchableOpacity
                      onPress={() => {
                        onToggle(opt.key, null);
                        closeMenu(opt.key);
                      }}
                    >
                      <Ionicons name="close" size={14} color="#3b3b3b" />
                    </TouchableOpacity>
                  ) : (
                    <Ionicons
                      name={visible[opt.key] ? "chevron-up" : "chevron-down"}
                      size={14}
                      color="#3b3b3b"
                    />
                  )}
                </View>
              </TouchableOpacity>
            }
            anchorPosition="bottom"
          >
            {opt.values.map((v) => (
              <Menu.Item
                key={v}
                onPress={() => {
                  onToggle(opt.key, v);
                  closeMenu(opt.key);
                }}
                title={v}
              />
            ))}
            
          </Menu>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 8,
  },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F0E9E4",
    minWidth: 80,
    justifyContent: "center",
  },
  pillText: { fontSize: 13, color: "#3b3b3b" },
  pillContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
