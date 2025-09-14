import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";
import { Item } from "../types/items";
import Badge from "./Badge";
import { useTheme } from "../styles/theme";
import { Ionicons } from '@expo/vector-icons';

const CARD_PADDING = 12;

export default function ItemCard({
  item,
  onPress,
  bookmarked = false
}: {
  item: Item;
  onPress?: (id: string) => void;
  bookmarked?: boolean;
}) {
  const t = useTheme();
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(anim, {
      toValue: 1,
      friction: 9,
      useNativeDriver: true
    }).start();
  }, [anim]);

  const translateY = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [8, 0]
  });
  const opacity = anim;

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }], opacity }]}>
      <TouchableOpacity
        onPress={() => onPress && onPress(item.id)}
        style={[styles.card, { backgroundColor: t.colors.surface }]}
        activeOpacity={0.9}
        accessibilityRole="button"
      >
        <TouchableOpacity style={styles.bookmark}>
            <Ionicons name="bookmark" size={22} color="grey" />
          </TouchableOpacity>
        <Image source={{ uri: item.images[0] }} style={styles.image} resizeMode="cover" />
        <View style={styles.row}>
          <View style={styles.chipsRow}>
            {item.tags.slice(0, 2).map(tag => (
              <Badge key={tag} label={tag} />
            ))}
          </View>
          {/*<View style={styles.bookmark}>
            <View style={styles.bookmarkIcon} />
          </View>*/}
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const CARD_WIDTH = (Dimensions.get("window").width - 48) / 2;

const styles = StyleSheet.create({
  container: { padding: 8 },
  card: {
    borderRadius: 14,
    padding: 10,
    minHeight: 220,
    alignItems: "flex-start"
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 12,
    backgroundColor: "#EEE"
  },
  chipsRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  row: { flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 6 },
  title: { marginTop: 8, fontSize: 13, color: "#222" },
  bookmark: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#E6CFC6",
    borderRadius: 20,
    padding: 4,
    zIndex: 10
  }
});
