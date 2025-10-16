import { ReactNode, useState } from "react";
import { Animated, Dimensions, TouchableOpacity, View } from "react-native";

const screenHeight = Dimensions.get("window").height;

export default function BottomSheet({
  children,
  isVisible,
  onClose,
}: {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}) {
  const [animation] = useState(new Animated.Value(screenHeight));

  // Animate open or close
  if (isVisible) {
    Animated.timing(animation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.timing(animation, {
      toValue: screenHeight,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View className="absolute inset-0 justify-end">
      {/* Transparent overlay to close */}
      {isVisible && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          className="absolute inset-0 bg-black/40"
        />
      )}

      {/* Bottom sheet */}
      <Animated.View
        style={{
          transform: [{ translateY: animation }],
        }}
        className="bg-white rounded-t-3xl p-5 h-60 pt-8 justify-center"
      >
        {children}
      </Animated.View>
    </View>
  );
}
