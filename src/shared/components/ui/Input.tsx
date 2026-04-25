import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps, 
  TouchableOpacity,
} from "react-native";
import { IconSymbol } from "./IconSymbol";
import { Colors } from "@shared/constants/themeConstants";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  labelVariant?: "primary" | "secondary";
  isPassword?: boolean;
}

export function Input({
  label,
  error,
  isPassword,
  style,
  labelVariant = "primary",
  ...props
}: InputProps) {
  const [isHidden, setIsHidden] = useState(isPassword);

  const togglePassword = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, { color: Colors.label[labelVariant] }]}>{label}</Text>}

      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, error ? styles.inputError : null, style, { backgroundColor: Colors.textInput.primary }]}
          secureTextEntry={isPassword ? isHidden : false}
          placeholderTextColor="#999"
          {...props}
        />

        {isPassword && (
          <TouchableOpacity onPress={togglePassword}>
            <Text style={styles.toggle}>
              {isHidden ? (
                <IconSymbol name="eye" size={16} color="#8A7170" />
              ) : (
                <IconSymbol name="eye.slash" size={16} color="#8A7170" />
              )}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8A7170",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 14,
    color: "#000",
  },
  inputError: {
    borderColor: "red",
  },
  toggle: {
    marginLeft: 8,
    color: "#8A7170",
    fontSize: 12,
  },
  error: {
    marginTop: 6,
    fontSize: 12,
    color: "red",
  },
});
