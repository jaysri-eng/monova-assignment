import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  VirtualizedList,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { OUTFITS } from "../data/outfits";
import { Ionicons } from "@expo/vector-icons";
import { OutfitItem, Outfits } from "../types/outfits";
import PlaceholderCard from "../components/OutfitsPlaceholderCard"; 

export default function OutfitsScreen() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Outfits[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(OUTFITS);
      setLoading(false);
    }, 1500); // fake delay

    return () => clearTimeout(timer);
  }, []);

  const getItem = (data: Outfits[], index: number): Outfits => data[index];
  const getItemCount = (data: Outfits[]): number => data.length;


  const renderOutfit = ({ item }: { item: Outfits }) => {
    const [main, ...rest] = item.items;
    return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.bookmark}>
          <Ionicons name="bookmark" size={22} color="grey" />
        </TouchableOpacity>

        <View style={styles.cardRow}>
          {main && (
            <View style={[styles.imageWrapper, { flex: 2 }]}>
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
  <View style={{ flex: 1 }}>
    <VirtualizedList
      data={data}
      initialNumToRender={4}
      renderItem={renderOutfit}
      keyExtractor={(item) => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 100,
      }}
      style={{ flex: 1, marginTop: 15 }} 
      showsVerticalScrollIndicator={false}
    />
  </View>
);

}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: "relative"
  },
  mainImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    resizeMode: "cover"
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
    margin: 2
  },
  cardRow: {
    flexDirection: "row",
    height: 220,
    gap: 8
  }
});
