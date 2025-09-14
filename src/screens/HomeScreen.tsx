// import { View, Text, StyleSheet } from "react-native";

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to Home Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: "center", justifyContent: "center" },
//   text: { fontSize: 18, fontWeight: "600" },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HOME_ITEMS } from "../data/homeScreenData";
import { Item } from "../types/items";

export default function HomeScreen() {
  const [bookmarked, setBookmarked] = useState<Item[]>([]);

  const toggleBookmark = (item: Item) => {
    setBookmarked((prev) => {
      const exists = prev.find((b) => b.id === item.id);
      if (exists) {
        return prev.filter((b) => b.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const renderItem = ({ item }: { item: Item }) => {
    const isBookmarked = bookmarked.some((b) => b.id === item.id);

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.images[0] }} style={styles.image} />
        <TouchableOpacity
          style={styles.bookmarkBtn}
          onPress={() => toggleBookmark(item)}
        >
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={22}
            color={isBookmarked ? "#000" : "grey"}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Items</Text>
      <FlatList
        data={HOME_ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Bookmarked</Text>
      {bookmarked.length === 0 ? (
        <Text style={{ margin: 16, color: "grey" }}>
          No bookmarks yet. Tap the bookmark icon to save.
        </Text>
      ) : (
        <FlatList
          data={bookmarked}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fafafa" },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 16,
    marginHorizontal: 16
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: "relative"
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    resizeMode: "contain"
  },
  title: { fontSize: 16, fontWeight: "600", marginTop: 10 },
  bookmarkBtn: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#E6CFC6",
    borderRadius: 20,
    padding: 4
  }
});
