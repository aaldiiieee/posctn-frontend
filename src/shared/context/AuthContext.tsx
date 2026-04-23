import { tokenStorage } from "@shared/lib/tokenStorage";
import { AuthContextValue, AuthUser } from "@shared/types/auth.types";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextValue | null>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function hydrate() {
      try {
        const token = await tokenStorage.get();
        if (token) {
          // TODO: Fetch user data from API using the token and set the user state
        }
      } catch (error) {
        console.log("Failed to hydrate auth state:", error);
      }
    }

    hydrate();
  }, []);

  const signIn = async (user: AuthUser, token: string) => {
    setIsLoading(true);
    try {
      await tokenStorage.save(token);
      setUser(user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Failed to sign in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await tokenStorage.clear();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Failed to sign out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
