import NavHeader from "@/components/ui/navHeader";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  TextInput as RNTextInput,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Otpscreen() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<RNTextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move to next input if available
      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (text === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleKeyPress = (
    e: { nativeEvent: { key: string } },
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="bg-white flex-1">
      <NavHeader>Confirm Account</NavHeader>
      <SafeAreaView edges={["right", "left", "top"]}>
        <View className="p-4">
          <View className="gap-2 pb-10">
            <Text className="text-[#aa1f1f] text-4xl font-quera">
              OTP Confirmation
            </Text>
            <View className="flex-row items-center gap-2">
              <Text className="text-gray-500 font-quera text-lg w-96">
                A code will be sent to your email. Please enter this code to
                confirm your account.
              </Text>
            </View>
          </View>

          {/* 👇🏽 Your original flex-row, untouched */}
          <View className="flex-row flex-1 gap-8">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  if (ref) inputRefs.current[index] = ref;
                }}
                className="h-12 w-12 border text-center border-gray-400 rounded-xl"
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </View>
          <View className="pt-32">
            <TouchableOpacity
              onPress={() => router.push("/(auth)/password")}
              className="bg-[#aa1f1f] h-12  rounded-full w-full items-center justify-center"
            >
              <Text className="text-xl text-white font-quera">
                Confirm Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
