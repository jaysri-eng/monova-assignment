import React, { useMemo, useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  VirtualizedList,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { useFilters } from "../hooks/useFilter";
import ItemCard from "../components/ItemCard";
import FilterBar from "../components/FilterBar";
import FloatingButton from "../components/FloatingButton";
import { INVENTORY } from "../data/inventory";
import { Item } from "../types/items";
import ItemsPlaceholderCard from "../components/ItemsPlaceholderCard";

const SCREEN_PADDING = 16;

// chunk items into rows of two for VirtualizedList
const chunkRows = (items: Item[]) => {
  const rows: Item[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }
  return rows;
};

export default function ItemsScreen() {
  const { filters, toggleFilter, filtered } = useFilters();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const rows = useMemo(() => chunkRows(filtered), [filtered]);

  const getItem = useCallback((data: Item[][], index: number) => {
    return data[index];
  }, []);

  const getItemCount = useCallback((data: Item[][]) => {
    return data.length;
  }, []);

  const renderItem = ({ item }: { item: Item[]; index: number }) => {
    return (
      <View style={styles.row}>
        <View style={styles.col}>
          {item[0] ? <ItemCard item={item[0]} onPress={() => {}} /> : <ItemsPlaceholderCard />}
        </View>
        <View style={styles.col}>
          {item[1] ? <ItemCard item={item[1]} onPress={() => {}} /> : <ItemsPlaceholderCard />}
        </View>
      </View>
    );
  };

  const keyExtractor = (row: Item[], index: number) => {
    return row.map(i => i.id).join("-");
  };

  return (
    <View style={styles.container}>
      <FilterBar filters={filters} onToggle={(k, v) => toggleFilter(k as any, v)} />

      {loading ? (
        <View style={{ marginTop: 10 }}>
          {[...Array(4)].map((_, idx) => (
            <View key={idx} style={styles.row}>
              <View style={styles.col}>
                <ItemsPlaceholderCard />
              </View>
              <View style={styles.col}>
                <ItemsPlaceholderCard />
              </View>
            </View>
          ))}
        </View>
      ) : (
        <VirtualizedList
          data={rows}
          initialNumToRender={4}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItemCount={getItemCount}
          getItem={getItem}
          style={styles.list}
          contentContainerStyle={{ paddingBottom: 120, paddingTop: 8 }}
          showsVerticalScrollIndicator={false}
        />
      )}

      <FloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: SCREEN_PADDING },
  list: { flex: 1, marginTop: 10},
  row: { flexDirection: "row", justifyContent: "space-between" },
  col: { flex: 1, maxWidth: (Dimensions.get("window").width - SCREEN_PADDING * 2) / 2 },
});
