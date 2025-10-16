import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type CustomKeyboardProps = {
  onKeyPress: (key: string) => void;
  onBackspace?: () => void;
  className?: string;
};

export default function CustomKeyboard({
  onKeyPress,
  onBackspace,
  className = "",
}: CustomKeyboardProps) {
  const keys = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["0", "⌫"],
  ];

  return (
    <View className={`px-1 items-center ${className}`}>
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row justify-between mb-5 w-full">
          {row.map((key, index) => (
            <TouchableOpacity
              key={index}
              disabled={key === ""}
              onPress={() => {
                if (key === "⌫") {
                  onBackspace?.();
                } else if (key !== "") {
                  onKeyPress(key);
                }
              }}
              className={`flex-1 mx-2 h-20 rounded-xl items-center justify-center border border-gray-200 ${
                key === "" ? "bg-transparent" : "bg-gray-50 active:bg-gray-100"
              }`}
            >
              <Text
                className={`text-2xl font-steticareg ${
                  key === "⌫" ? "text-gray-500" : "text-gray-800"
                }`}
              >
                {key}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}
