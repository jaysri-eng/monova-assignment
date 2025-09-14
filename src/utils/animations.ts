import { Animated } from "react-native";

export const fadeInUp = (animatedValue: Animated.Value, toValue = 1, duration = 420) => {
  return Animated.timing(animatedValue, {
    toValue,
    duration,
    useNativeDriver: true
  });
};
