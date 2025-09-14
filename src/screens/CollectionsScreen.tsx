import React, { useMemo, useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  VirtualizedList,
  TouchableOpacity,
  Image,
ScrollView,
ActivityIndicator
} from "react-native";
import FloatingButton from "../components/FloatingButton";
import PlaceholderCard from "../components/CollectionsPlaceholderCard";
import { COLLECTIONS } from "../data/collections";
import { CollectionItem, Collections } from "../types/collections";
import { Item } from "../types/items";
import { Ionicons } from '@expo/vector-icons';

const SCREEN_PADDING = 16;

export default function CollectionsScreen() {

  const getItem = (data: Collections[], index: number): Collections => data[index];
  const getItemCount = (data: Collections[]): number => data.length;
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Collections[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(COLLECTIONS);
      setLoading(false);
    }, 1500); // faking delay using setTimeout

    return () => clearTimeout(timer);
  }, []);

  const filteredCollections = useMemo(() => {
    if (!activeFilter) return COLLECTIONS; 
    return COLLECTIONS.filter((col) => col.title === activeFilter);
  }, [activeFilter]);

  const renderOutfit = ({ item }: { item: Collections }) => {
    const [main, ...rest] = item.items;

    return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.bookmark}>
          <Ionicons name="bookmark" size={22} color="grey" />
        </TouchableOpacity>

        <View style={styles.cardRow}>
          {main && (
            <View style={styles.imageWrapper}>
              <Image source={{ uri: main.image }} style={styles.mainImage} />
            </View>
          )}

          <View style={styles.rightStack}>
            {rest.map((sub, idx) => (
              <View key={idx} style={styles.imageWrapper}>
                <Image source={{ uri: sub.image }} style={styles.subImage} />
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={{ flex: 1, marginLeft: 15, marginRight: 15 }}>
        {[...Array(4)].map((_, idx) => (
          <PlaceholderCard key={idx} />
        ))}
        <ActivityIndicator
          size="large"
          color="#999"
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }


  return (
  <View style={styles.container}>
    <View style={styles.pillsWrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.presetRow}
      >
        <TouchableOpacity
          style={styles.addNew}
          onPress={() => setActiveFilter(null)}
        >
          <Text style={{ color: "#999" }}>+ Add new</Text>
        </TouchableOpacity>

        {COLLECTIONS.map((col) => {
          const isActive = activeFilter === col.title;
          return (
            <View
              key={col.id}
              style={[
                styles.presetBtn,
                isActive ? { backgroundColor: "#D9C4B6" } : {},
              ]}
            >
              <TouchableOpacity
                style={styles.presetContent}
                onPress={() => setActiveFilter(col.title)}
              >
                <Text style={styles.presetEmoji}>
                  {col.title === "Men formals" || col.title === "Women formals"
                  ? "💼"
                  : col.title === "Casual"
                  ? "🎉"
                  : col.title === "Designer"
                  ? "🎨"
                  : col.title === "Summer" || col.title === "Beach Day"
                  ? "🌞"
                  : col.title === "Accessories"
                  ? "👜"
                  : col.title === "Streetwear"
                  ? "👕"
                  : col.title === "Winter Cozy"
                  ? "🧣"
                  : col.title === "Evening Party"
                  ? "🥂"
                  : col.title === "Smart Casual"
                  ? "🕴️"
                  : col.title === "Date Night"
                  ? "❤️"
                  : "✨"}
                </Text>
                <Text>{col.title}</Text>
              </TouchableOpacity>

              {isActive && (
                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={() => setActiveFilter(null)}
                >
                  <Ionicons name="close" size={16} color="#333" />
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>

    <VirtualizedList
      data={filteredCollections}
      initialNumToRender={4}
      renderItem={renderOutfit}
      keyExtractor={(item) => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    />
    <FloatingButton />
  </View>
);

}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: SCREEN_PADDING },
  presetRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginTop: 15,
    marginBottom: 15,
    gap: 8
  },
  addNew: {
    padding: 10,
    borderRadius: 12,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#E0D9D4",
    marginRight: 10
  },
  presetBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: "#F3E8E2",
    marginRight: 8
  },
  presetEmoji: {
    fontSize: 18,
    marginRight: 6,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: "relative",
    height: 250,
  },
  bookmark: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#E6CFC6",
    borderRadius: 20,
    padding: 4,
    zIndex: 10
  },
  pillsWrapper: {
    marginBottom: 10, 
  },
  cardRow: {
    flexDirection: "row",
    height: 220, 
    gap: 8
  },
  mainImage: {
    flex: 2, 
    borderRadius: 12,
    resizeMode: "cover"
  },
  rightStack: {
    flex: 1, 
    justifyContent: "space-between"
  },
  subImage: {
    flex: 1, 
    borderRadius: 10,
    resizeMode: "cover",
    marginBottom: 4
  },
  imageWrapper: {
    backgroundColor: "#f2f2f2", 
    borderRadius: 12,
    overflow: "hidden", 
    flex: 1, 
    margin: 2, 
  },
    presetContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  closeBtn: {
    marginLeft: 6,
    padding: 2,
    borderRadius: 12,
  },
});
