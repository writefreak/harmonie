import NavHeader from "@/components/ui/navHeader";
import Select from "@/components/ui/select";
import ThemeButtons from "@/components/ui/themeButton";
import UploadPic from "@/components/ui/uploadPic";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewGroup() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = [
    "Entertainment",
    "Fashion",
    "Travelling",
    "Bills & Finance",
  ];
  return (
    <View className="flex-1 bg-white">
      <NavHeader>Create Group</NavHeader>

      <SafeAreaView edges={["top", "left", "right"]} className="flex-1">
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={80} // adjust if header overlaps
        >
          <ScrollView
            contentContainerStyle={{ padding: 16, gap: 40 }}
            showsVerticalScrollIndicator={false}
          >
            <UploadPic />

            <View className="gap-4">
              <Text className="font-stetica">Group Name</Text>
              <TextInput
                className="rounded-xl bg-gray-100 px-3 py-4 font-steticareg"
                placeholder=" Enter your group's name here"
              />
            </View>

            <View className="gap-4">
              <Text className="font-stetica">Group Description</Text>
              <TextInput
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                className="rounded-xl h-32 bg-gray-100 px-3 py-4 font-steticareg"
                placeholder="Give a small description of your group, e.g rules"
              />
            </View>

            <View className="gap-4">
              <Text className="font-stetica">Contribution Amount (₦)</Text>
              <TextInput
                className="rounded-xl bg-gray-100 px-3 py-4 font-steticareg"
                placeholder="Amount cannot be less than N150 "
              />
            </View>

            <View className="gap-3">
              <Text className="font-stetica text-lg ">Choose a Category</Text>
              <ThemeButtons
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </View>
            <View className="gap-4">
              <Text className="font-stetica text-lg ">
                Max Number of persons in group
              </Text>
              <Select
                label="Choose Group Type"
                options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                onSelect={(value) => console.log(value)}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <View className="py-10 flex-row gap-4 p-4">
          <TouchableOpacity className="bg-gray-200 flex-1 h-12 items-center rounded-full justify-center">
            <Text className="font-steticareg">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#aa1f1f] flex-1 h-12 items-center rounded-full justify-center">
            <Text className="font-steticareg text-white">Create Group</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
