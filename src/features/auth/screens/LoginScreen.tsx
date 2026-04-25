import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { AuthHeader, AuthForm } from "../components";
import { useState } from "react";
import { LoginPayload } from "../types/auth.types";
import useAuth from "../hooks/useLogin";
import { useRouter } from "expo-router";
import { useAuthContext } from "@shared/context/AuthContext";
import { Colors } from "@shared/constants/themeConstants";
import BrandLogo from "@assets/images/splash-icon.png";

export default function LoginScreen() {
  const [payload, setPayload] = useState<LoginPayload>({
    username: "",
    password: "",
  });

  const { mutateLogin, loginStatus } = useAuth();
  const { signIn } = useAuthContext();
  const router = useRouter();

  const handleSubmit = () => {
    mutateLogin(payload, {
      onSuccess: async (response) => {
        const { token, user } = response.data;
        await signIn(user, token);
        router.replace("/(tabs)");
      },
      onError: (error) => {
        console.error("Login error:", error.message);
      },
    });
  };

  return (
    <View
      style={{
        paddingLeft: 32,
        paddingRight: 32,
        height: "100%",
        justifyContent: "center",
        gap: 8,
        flex: 1,
        backgroundColor: Colors.background.primary,
      }}
    >
      <Image
        style={styles.image}
        source={BrandLogo}
        contentFit="cover"
        transition={1000}
      />

      <AuthHeader
        title="Selamat Datang Kembali!"
        subtitle="Masuk untuk melanjutkan ke akun Anda dan masuk ke dalam aplikasi."
      />

      <AuthForm
        username={payload.username}
        password={payload.password}
        onChangeUsername={(text) =>
          setPayload((prev) => ({ ...prev, username: text }))
        }
        onChangePassword={(text) =>
          setPayload((prev) => ({ ...prev, password: text }))
        }
        onSubmit={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 150,
    alignSelf: "center",
  },
});