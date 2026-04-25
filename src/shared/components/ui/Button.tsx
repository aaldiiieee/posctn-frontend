import { Colors } from "@shared/constants/themeConstants";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: "primary" | "secondary" | "danger";
  onPress?: () => void;
}

export default function Button({
  text,
  variant = "primary",
  onPress,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: Colors.button[variant] }]}
      {...props}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.button.textPrimary,
    fontSize: 18,
    fontWeight: "bold",
  },
});
