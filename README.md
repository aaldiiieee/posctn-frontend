# 📱 React Native Expo — Feature-Based Architecture

> Panduan arsitektur, coding rules, komentar & JSDoc, serta daftar library yang digunakan dalam project React Native Expo.

---

## 📋 Daftar Isi

- [Arsitektur](#arsitektur)
- [Struktur Folder](#struktur-folder)
- [Feature Module](#feature-module)
- [Layer Dependency Rules](#layer-dependency-rules)
- [Coding Rules](#coding-rules)
- [Comment & JSDoc Rules](#comment--jsdoc-rules)
- [Library yang Digunakan](#library-yang-digunakan)
- [Setup & Installation](#setup--installation)

---

## Arsitektur

Project ini menggunakan **Feature-Based Architecture** — setiap fitur bisnis dikapsulasi dalam modulnya sendiri dengan struktur internal yang konsisten. Pendekatan ini memudahkan skalabilitas, pemeliharaan, dan kolaborasi tim.

### Prinsip Utama

- **High cohesion, low coupling** — kode yang saling berkaitan dikumpulkan dalam satu feature module.
- **Unidirectional dependency** — `app/` → `features/` → `shared/`. Tidak ada reverse dependency.
- **Barrel exports** — setiap feature mengekspos API publiknya melalui `index.ts`.
- **No cross-feature imports** — feature A tidak boleh mengimport langsung dari feature B.

---

## Struktur Folder

```
my-app/
├── app/                          # Expo Router — file-based routing
│   ├── (auth)/
│   │   ├── _layout.tsx
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── profile.tsx
│   └── _layout.tsx               # Root layout (providers, fonts)
│
├── src/
│   ├── features/                 # Business domain modules
│   │   ├── auth/
│   │   ├── home/
│   │   ├── profile/
│   │   └── ...
│   │
│   └── shared/                   # Reusable lintas feature
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── store/
│       ├── lib/
│       ├── config/
│       └── types/
│
├── assets/                       # Images, fonts, icons statis
├── app.json
├── eas.json
├── tsconfig.json
├── babel.config.js
└── package.json
```

---

## Feature Module

Setiap feature memiliki struktur internal yang **konsisten dan mandiri**:

```
src/features/auth/
├── screens/            # Halaman utama (terhubung ke app/ via Expo Router)
│   ├── LoginScreen.tsx
│   └── RegisterScreen.tsx
├── components/         # Komponen UI spesifik feature ini
│   ├── LoginForm.tsx
│   └── OTPInput.tsx
├── hooks/              # Custom hooks (TanStack Query mutations/queries)
│   ├── useLogin.ts
│   └── useRegister.ts
├── api/                # Fungsi pemanggilan API (axios)
│   └── authApi.ts
├── store/              # State lokal feature (Zustand slice)
│   └── authStore.ts
├── types/              # TypeScript interfaces & types
│   └── auth.types.ts
├── utils/              # Helper functions spesifik feature
│   └── tokenHelper.ts
├── constants/          # Konstanta spesifik feature
│   └── authConstants.ts
└── index.ts            # ⭐ Barrel export — public API dari feature ini
```

### Aturan Feature Module

| Aturan      | Keterangan                                                 |
| ----------- | ---------------------------------------------------------- |
| ✅ Boleh    | Import dari `shared/`                                      |
| ✅ Boleh    | Import antar-folder dalam feature yang sama                |
| ❌ Dilarang | Import langsung dari feature lain (`features/profile/...`) |
| ❌ Dilarang | Import dari `app/`                                         |
| ⭐ Wajib    | Setiap feature punya `index.ts` sebagai barrel export      |

---

## Layer Dependency Rules

```
app/ (Expo Router pages)
    ↓
features/[name]/screens/
    ↓
features/[name]/hooks/   ←→   shared/hooks/
    ↓                               ↓
features/[name]/api/     ←   shared/services/apiClient
    ↓
Backend API
```

### Shared Folder Structure

```
src/shared/
├── components/       # UI atoms & molecules reusable (Button, Input, Modal)
├── hooks/            # Hooks global (useDebounce, useAppTheme, useNetworkStatus)
├── services/         # Axios instance, interceptor, error handler
│   └── apiClient.ts
├── store/            # Zustand global (theme, session, locale)
│   └── appStore.ts
├── lib/              # Konfigurasi library (queryClient, i18n)
│   ├── queryClient.ts
│   └── i18n.ts
├── config/           # Environment & endpoint constants
│   ├── env.ts
│   └── endpoints.ts
└── types/            # Types global (ApiResponse, PaginatedResponse)
    └── common.types.ts
```

---

## Coding Rules

### Umum

- Gunakan **TypeScript strict mode** — tidak ada `any` kecuali alasan yang jelas dan didokumentasikan.
- Semua **komponen React** menggunakan `function` declaration, bukan arrow function di level module.
- Semua **hooks** diawali dengan `use` (contoh: `useLogin`, `useAuthStore`).
- Semua **screen** diakhiri dengan `Screen` (contoh: `LoginScreen`).
- Gunakan **named export** untuk komponen dan fungsi; gunakan **default export** hanya di `app/` (Expo Router requirement).

### Penamaan

| Entitas            | Konvensi                                       | Contoh           |
| ------------------ | ---------------------------------------------- | ---------------- |
| Komponen           | PascalCase                                     | `LoginForm.tsx`  |
| Hooks              | camelCase + prefix `use`                       | `useLogin.ts`    |
| Store              | camelCase + suffix `Store`                     | `authStore.ts`   |
| API functions      | camelCase                                      | `authApi.ts`     |
| Types / Interfaces | PascalCase + suffix `.types.ts`                | `auth.types.ts`  |
| Constants          | SCREAMING_SNAKE_CASE (nilai), camelCase (file) | `AUTH_TOKEN_KEY` |
| Utilities          | camelCase                                      | `tokenHelper.ts` |

### File & Folder

- Satu komponen per file.
- Nama file mengikuti nama komponen/hook utama yang diekspor.
- Folder selalu huruf kecil (`hooks/`, `components/`), kecuali nama komponen dalam file.
- Barrel file `index.ts` hanya boleh mengekspor apa yang memang perlu diakses dari luar.

### TypeScript

```typescript
// ✅ Benar — gunakan interface untuk object shapes
interface LoginPayload {
  email: string;
  password: string;
}

// ✅ Benar — gunakan type untuk union/intersection
type AuthStatus = "authenticated" | "unauthenticated" | "loading";

// ❌ Hindari any
const data: any = response.data; // salah

// ✅ Gunakan unknown dan narrow
const data: unknown = response.data;
if (isLoginResponse(data)) {
  /* ... */
}
```

### Komponen

```tsx
// ✅ Struktur komponen yang direkomendasikan
interface Props {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
}

function PrimaryButton({ title, onPress, isLoading = false }: Props) {
  return (
    <TouchableOpacity onPress={onPress} disabled={isLoading}>
      <Text>{isLoading ? "Loading..." : title}</Text>
    </TouchableOpacity>
  );
}

export { PrimaryButton };
```

---

## Comment & JSDoc Rules

### Filosofi

- Komentar menjelaskan **mengapa**, bukan **apa**. Kode yang bagus sudah menjelaskan _apa_ yang dilakukan.
- Hindari komentar yang hanya mengulang kode.
- Gunakan **JSDoc** untuk semua fungsi publik, hooks, komponen, dan types yang diekspor.

### Komentar Inline

```typescript
// ✅ Benar — menjelaskan alasan (why)
// Token di-refresh 5 menit sebelum expire untuk menghindari race condition
const REFRESH_BUFFER_MS = 5 * 60 * 1000;

// ❌ Salah — hanya mengulang kode (what)
// Set refresh buffer ke 5 menit
const REFRESH_BUFFER_MS = 5 * 60 * 1000;

// ✅ Benar — menandai hal yang perlu diperhatikan
// TODO: Ganti dengan MMKV setelah migration selesai (lihat ticket #123)
await AsyncStorage.setItem(key, value);

// ✅ Benar — menjelaskan edge case
// Backend mengembalikan 200 meskipun OTP salah, cek field `success` di body
if (!response.data.success) {
  throw new InvalidOTPError();
}
```

### JSDoc untuk Fungsi & API

```typescript
/**
 * Melakukan login user dan menyimpan token ke storage.
 *
 * @param payload - Email dan password user
 * @returns Data user yang berhasil login beserta access token
 * @throws {UnauthorizedError} Jika email atau password salah
 * @throws {NetworkError} Jika tidak ada koneksi internet
 *
 * @example
 * const user = await login({ email: 'user@mail.com', password: 'secret' });
 * console.log(user.name); // "John Doe"
 */
async function login(payload: LoginPayload): Promise<AuthUser> {
  const response = await apiClient.post<AuthUser>("/auth/login", payload);
  await tokenStorage.save(response.data.accessToken);
  return response.data;
}
```

### JSDoc untuk Custom Hooks

```typescript
/**
 * Hook untuk mengelola proses login user.
 *
 * Menggunakan TanStack Query mutation. Secara otomatis menyimpan
 * token dan mengupdate auth store setelah login berhasil.
 *
 * @returns Objek mutation TanStack Query dengan tambahan state `isSuccess`
 *
 * @example
 * function LoginScreen() {
 *   const { mutate: login, isPending } = useLogin();
 *
 *   return (
 *     <Button
 *       onPress={() => login({ email, password })}
 *       isLoading={isPending}
 *     />
 *   );
 * }
 */
function useLogin() {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      setUser(data.user);
    },
  });
}
```

### JSDoc untuk Komponen

```tsx
/**
 * Tombol utama aplikasi dengan dukungan loading state.
 *
 * @param props.title - Teks yang ditampilkan di dalam tombol
 * @param props.onPress - Callback yang dipanggil saat tombol ditekan
 * @param props.isLoading - Jika `true`, tombol menampilkan indikator loading
 *   dan dinonaktifkan. Default: `false`
 * @param props.variant - Varian tampilan tombol. Default: `'primary'`
 *
 * @example
 * <PrimaryButton
 *   title="Masuk"
 *   onPress={handleLogin}
 *   isLoading={isPending}
 * />
 */
function PrimaryButton({
  title,
  onPress,
  isLoading = false,
  variant = "primary",
}: Props) {
  // ...
}
```

### JSDoc untuk Types & Interfaces

```typescript
/**
 * Data user yang dikembalikan setelah proses autentikasi berhasil.
 */
interface AuthUser {
  /** UUID unik user di sistem */
  id: string;
  /** Nama lengkap user */
  name: string;
  /** Email terdaftar (unik, lowercase) */
  email: string;
  /** URL foto profil. `null` jika belum diupload */
  avatarUrl: string | null;
  /** Role user yang menentukan akses fitur */
  role: "admin" | "user" | "guest";
}

/**
 * Wrapper standar untuk semua response API.
 *
 * @template T - Tipe data yang ada di dalam field `data`
 */
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
```

### JSDoc untuk Zustand Store

```typescript
/**
 * Store global untuk state autentikasi.
 *
 * Menyimpan data user yang sedang login dan status autentikasi.
 * Digunakan di seluruh aplikasi untuk mengecek sesi aktif.
 *
 * @example
 * // Mengambil data user
 * const user = useAuthStore((s) => s.user);
 *
 * // Logout
 * const logout = useAuthStore((s) => s.logout);
 */
interface AuthStore {
  /** Data user yang sedang login. `null` jika belum autentikasi */
  user: AuthUser | null;
  /** Menyimpan data user setelah login berhasil */
  setUser: (user: AuthUser) => void;
  /** Menghapus sesi dan mereset semua state auth */
  logout: () => void;
}
```

### Tag JSDoc yang Digunakan

| Tag           | Kapan digunakan                                   |
| ------------- | ------------------------------------------------- |
| `@param`      | Parameter fungsi                                  |
| `@returns`    | Nilai kembalian fungsi                            |
| `@throws`     | Error yang mungkin dilempar                       |
| `@example`    | Contoh penggunaan                                 |
| `@template`   | Generic type parameter                            |
| `@deprecated` | Fungsi/komponen yang sudah tidak direkomendasikan |
| `@see`        | Referensi ke fungsi/dokumen lain                  |
| `@internal`   | Penanda bahwa ini bukan API publik                |

---

## Library yang Digunakan

### Core

| Library        | Versi  | Fungsi                                           |
| -------------- | ------ | ------------------------------------------------ |
| `expo`         | ~52.x  | Framework utama React Native                     |
| `expo-router`  | ~4.x   | File-based routing, deep linking, tab navigation |
| `react-native` | 0.76.x | Base framework                                   |
| `typescript`   | ~5.x   | Type safety                                      |

### Data Fetching & State

| Library                 | Versi | Fungsi                                          |
| ----------------------- | ----- | ----------------------------------------------- |
| `@tanstack/react-query` | ^5.x  | Server state, caching, background sync          |
| `axios`                 | ^1.x  | HTTP client, interceptor, error handling global |
| `zustand`               | ^5.x  | Global client state (auth, theme, settings)     |

### UI & Styling

| Library                   | Versi | Fungsi                                       |
| ------------------------- | ----- | -------------------------------------------- |
| `nativewind`              | ^4.x  | Tailwind CSS syntax untuk React Native       |
| `tailwindcss`             | ^3.x  | Peer dependency NativeWind                   |
| `@expo/vector-icons`      | ^14.x | Ikon (Ionicons, MaterialIcons, Feather, dll) |
| `react-native-reanimated` | ~3.x  | Animasi performan (60fps)                    |

### Forms & Validation

| Library               | Versi | Fungsi                            |
| --------------------- | ----- | --------------------------------- |
| `react-hook-form`     | ^7.x  | Form state, uncontrolled inputs   |
| `zod`                 | ^3.x  | Schema validation, type inference |
| `@hookform/resolvers` | ^3.x  | Jembatan RHF ↔ Zod                |

### Storage

| Library                                     | Versi | Fungsi                                     |
| ------------------------------------------- | ----- | ------------------------------------------ |
| `react-native-mmkv`                         | ^3.x  | Key-value storage cepat (10× AsyncStorage) |
| `@react-native-async-storage/async-storage` | ^2.x  | Fallback / data non-sensitif               |

### Auth & Platform

| Library              | Versi   | Fungsi                                         |
| -------------------- | ------- | ---------------------------------------------- |
| `expo-auth-session`  | ~5.x    | OAuth2, Google/Apple login                     |
| `expo-secure-store`  | ~13.x   | Penyimpanan token sensitif (Keychain/Keystore) |
| `expo-notifications` | ~0.29.x | Push notification & local notification         |
| `expo-constants`     | ~17.x   | Akses `app.json` config di runtime             |

### Dev & Testing

| Library                         | Versi  | Fungsi                         |
| ------------------------------- | ------ | ------------------------------ |
| `jest`                          | ^29.x  | Test runner                    |
| `@testing-library/react-native` | ^12.x  | Komponen & integration testing |
| `eslint`                        | ^9.x   | Linting                        |
| `eslint-config-expo`            | latest | Config ESLint khusus Expo      |
| `prettier`                      | ^3.x   | Code formatting                |

---

## Setup & Installation

### 1. Buat Project Baru

```bash
npx create-expo-app@latest my-app --template tabs
cd my-app
```

### 2. Install Library

```bash
# Core libraries
npx expo install @tanstack/react-query axios zustand

# Forms & validation
npm install react-hook-form zod @hookform/resolvers

# Styling
npm install nativewind tailwindcss
npx expo install react-native-reanimated

# Storage & auth
npx expo install react-native-mmkv expo-secure-store \
  expo-auth-session expo-notifications expo-constants

# Dev dependencies
npm install -D @testing-library/react-native jest \
  eslint prettier eslint-config-expo
```

### 3. Setup Alias Path (tsconfig.json)

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@features/*": ["src/features/*"],
      "@shared/*": ["src/shared/*"],
      "@assets/*": ["assets/*"]
    }
  }
}
```

### 4. Setup Babel (babel.config.js)

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }]],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@features": "./src/features",
            "@shared": "./src/shared",
          },
        },
      ],
    ],
  };
};
```

### 5. Setup TanStack Query (src/shared/lib/queryClient.ts)

```typescript
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 menit
      retry: 2,
    },
  },
});
```

### 6. Setup Axios Client (src/shared/services/apiClient.ts)

```typescript
import axios from "axios";
import { tokenStorage } from "@shared/lib/tokenStorage";
import { ENV } from "@shared/config/env";

export const apiClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 10_000,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor — attach token
apiClient.interceptors.request.use(async (config) => {
  const token = await tokenStorage.get();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response interceptor — handle 401
apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      // Handle logout / refresh token
    }
    return Promise.reject(error);
  },
);
```

---

> **Catatan:** Dokumen ini harus diperbarui setiap kali ada perubahan arsitektur, library baru yang ditambahkan, atau konvensi baru yang disepakati tim.
