import Button from "@shared/components/ui/Button";
import { Input } from "@shared/components/ui/Input";
import { KeyboardAvoidingView, Platform, View } from "react-native";

type AuthFormProps = {
  username: string;
  password: string;
  isLoading?: boolean;
  onChangeUsername: (text: string) => void;
  onChangePassword: (text: string) => void;
  onSubmit: () => void;
};

export default function AuthForm({
  username,
  password,
  isLoading,
  onChangeUsername,
  onChangePassword,
  onSubmit,
}: AuthFormProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ gap: 8 }}>
        <Input
          label="Username"
          placeholder="Masukan username anda"
          labelVariant="secondary"
          autoFocus
          value={username}
          onChangeText={onChangeUsername}
        />

        <Input
          label="Password"
          placeholder="Masukan password anda"
          labelVariant="secondary"
          isPassword
          value={password}
          onChangeText={onChangePassword}
        />

        <Button
          text="Masuk"
          variant="primary"
          onPress={onSubmit}
          disabled={isLoading}
        />
      </View>
    </KeyboardAvoidingView>
  );
}