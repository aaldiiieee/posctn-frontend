import { View } from "react-native";
import AuthHeader from "../components/AuthHeader";
import { Input } from "@shared/components/ui/Input";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: 32,
        paddingRight: 32,
        height: "100%",
        justifyContent: "center",
      }}
    >
      <AuthHeader
        title="Selamat Datang Kembali!"
        subtitle="Masuk untuk melanjutkan ke akun Anda dan masuk ke dalam aplikasi."
      />
      <Input />
    </View>
  );
}
