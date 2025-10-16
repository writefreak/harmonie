import { Text, TouchableOpacity, View } from "react-native";

type CategoryButtonProps = {
  categories: string[];
  selected: string | null;
  onSelect: (category: string) => void;
};

export default function ThemeButtons({
  categories,
  selected,
  onSelect,
}: CategoryButtonProps) {
  return (
    <View className="flex-row flex-wrap gap-3">
      {categories.map((cat) => {
        const isSelected = selected === cat;
        return (
          <TouchableOpacity
            key={cat}
            onPress={() => onSelect(cat)}
            className={`px-5 py-3 rounded-2xl border ${
              isSelected
                ? "bg-[#aa1f1f] border-[#aa1f1f]"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <Text
              className={`font-steticareg text-base ${
                isSelected ? "text-white" : "text-gray-800"
              }`}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
