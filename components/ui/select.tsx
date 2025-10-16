import { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type SelectProps = {
  label: string;
  options: string[];
  onSelect?: (option: string) => void;
};

export default function Select({ label, options, onSelect }: SelectProps) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string>(label);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect?.(option);
    setVisible(false);
  };

  return (
    <View className="w-full">
      <TouchableOpacity
        onPress={() => setVisible(true)}
        className="bg-white border border-gray-200 rounded-2xl py-3 px-4 flex-row justify-between items-center shadow-sm"
      >
        <Text className="text-gray-800 font-stetica text-base">{selected}</Text>
        <Text className="text-gray-500 font-stetica">▼</Text>
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="fade">
        <Pressable
          className="flex-1 bg-black/40 justify-center items-center px-5"
          onPress={() => setVisible(false)}
        >
          <View className="bg-white border border-white/30 rounded-2xl w-full max-w-sm p-4 gap-3 shadow-2xl max-h-[60%]">
            <View className="items-center py-4">
              <Text className="font-stetica">Select Options</Text>
            </View>

            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  className="bg-white py-3 px-4 rounded-xl active:bg-white"
                >
                  <Text className="text-center font-steticareg text-base">
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={true}
              className="max-h-[250px]" // <-- makes the list scrollable
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
