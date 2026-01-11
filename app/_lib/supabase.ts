import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

const isBrowser = typeof window !== "undefined";

// ✅ Prevent “window is not defined” on web/SSR-ish contexts
const safeStorage = isBrowser
  ? AsyncStorage
  : {
      getItem: async () => null,
      setItem: async () => {},
      removeItem: async () => {},
    };

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: safeStorage as any,
    persistSession: true,
    autoRefreshToken: true,
    // ✅ We handle the redirect in /auth/callback ourselves
    detectSessionInUrl: false,
  },
});
