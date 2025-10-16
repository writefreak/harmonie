import CustomKeyboard from "@/components/ui/customKeyboard";
import NavHeader from "@/components/ui/navHeader";
import { Link, router } from "expo-router";
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
  const [otp, setOtp] = useState<string[]>(Array(4).fill("")); // 4 digits
  const inputRefs = useRef<RNTextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

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

  // 👇🏽 handle when a key is pressed from custom keyboard
  const handleKeyboardPress = (key: string) => {
    const emptyIndex = otp.findIndex((d) => d === "");
    if (emptyIndex !== -1) {
      handleChange(key, emptyIndex);
    }
  };

  // 👇🏽 handle when backspace is pressed
  const handleKeyboardBackspace = () => {
    const lastFilledIndex = otp
      .slice()
      .reverse()
      .findIndex((d) => d !== "");
    if (lastFilledIndex !== -1) {
      const index = otp.length - 1 - lastFilledIndex;
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      inputRefs.current[index]?.focus();
    }
  };

  return (
    <View className="bg-white flex-1">
      <NavHeader>Confirm Account</NavHeader>
      <SafeAreaView edges={["right", "left", "top"]}>
        <View className="p-4">
          <View className="gap-2 pb-10">
            <View className="gap-2 pb-10">
              <Text className="text-[#aa1f1f] text-3xl font-quera">
                Enter Phone Code
              </Text>

              <Text className="text-gray-500 font-steticareg text-lg">
                Please enter the 4-digit code we've sent to your device.{" "}
                <Text className="text-gray-500">
                  Didn’t see it?{" "}
                  <Link href={"/"}>
                    <Text className="text-[#aa1f1f] font-steticareg underline">
                      Resend
                    </Text>
                  </Link>
                </Text>
              </Text>
            </View>
          </View>

          {/* 👇🏽 OTP Inputs */}
          <View className="flex-row flex-1 gap-10 justify-center">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  if (ref) inputRefs.current[index] = ref;
                }}
                className="h-16 w-16 border text-center border-gray-400 rounded-xl"
                keyboardType="number-pad"
                showSoftInputOnFocus={false} // 👈🏽 disable system keyboard
                caretHidden={true} // 👈🏽 optional, hides blinking cursor
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </View>

          <View className="pt-32">
            <TouchableOpacity
              onPress={() => router.push("/(auth)/login")}
              className="bg-[#aa1f1f] h-12 rounded-full w-full items-center justify-center"
            >
              <Text className="text-xl text-white font-quera">
                Confirm Account
              </Text>
            </TouchableOpacity>
          </View>

          {/* 👇🏽 Add custom keyboard at the bottom */}
          <View className="pt-16 items-center">
            <CustomKeyboard
              onKeyPress={handleKeyboardPress}
              onBackspace={handleKeyboardBackspace}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
