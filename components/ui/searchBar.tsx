import { Search, X } from "lucide-react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

type SearchBarProps = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onClear?: () => void;
  value?: string;
  className?: string;
};

export default function SearchBar({
  placeholder = "Search...",
  onChangeText,
  onClear,
  value,
  className = "",
}: SearchBarProps) {
  const [text, setText] = useState(value || "");

  const handleChange = (input: string) => {
    setText(input);
    onChangeText?.(input);
  };

  const clearSearch = () => {
    setText("");
    onClear?.();
  };

  return (
    <View
      className={`flex-row items-center bg-gray-100 rounded-full px-4 py-1 ${className}`}
    >
      <Search size={20} color="#666" />
      <TextInput
        className="flex-1 text-base text-gray-800 font-steticareg px-3"
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={text}
        onChangeText={handleChange}
      />
      {text.length > 0 && (
        <TouchableOpacity onPress={clearSearch}>
          <X size={20} color="#666" />
        </TouchableOpacity>
      )}
    </View>
  );
}
