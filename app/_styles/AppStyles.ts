import { StyleSheet } from "react-native";

/** ========== TOKENS ========== */
export const Colors = {
  textPrimary: "rgba(0,0,0,0.82)",
  textSecondary: "rgba(0,0,0,0.55)",
  textKicker: "rgba(0,0,0,0.45)",

  glassBg: "rgba(255,255,255,0.22)",
  glassBgSoft: "rgba(255,255,255,0.16)",
  glassBorder: "rgba(255,255,255,0.30)",

  btnBg: "rgba(255,255,255,0.20)",
  btnBgStrong: "rgba(255,255,255,0.26)",
  btnBorder: "rgba(255,255,255,0.32)",

  tabBg: "rgba(255,255,255,0.88)",
  tabBorder: "rgba(0,0,0,0.06)",

  // NEW: header strip behind logo
  headerBg: "rgba(255,255,255,0.55)",
  headerBorder: "rgba(255,255,255,0.35)",
};

export const Metrics = {
  maxWidth: 520,

  pagePadH: 18,
  pagePadTop: 16,
  pagePadBottom: 34,

  gapScreen: 19,
  gapSection: 12,

  radiusXL: 28,
  radiusLG: 24,
  radiusMD: 20,
  radiusSM: 16,

  cardPadV: 12,
  cardPadH: 14,
  panelPad: 16,

  // Header sizing (keep display size reasonable)
  logoMaxWidth:740,   // ⬅️ this is the real control
  logoAspect: 400 / 112,
  headerPadV: 1,
  headerPadH: 1,
  logoMaxW: 290,     // ✅ display width (not asset size)
  logoH: 164,         // ✅ display height
};

export const Layout = StyleSheet.create({
  root: { flex: 1, width: "100%" },

  scroll: { flex: 1, backgroundColor: "transparent" },

  scrollContent: {
    paddingHorizontal: Metrics.pagePadH,
    paddingTop: Metrics.pagePadTop,
    paddingBottom: Metrics.pagePadBottom,
    alignItems: "center",
  },

  container: {
    width: "100%",
    maxWidth: Metrics.maxWidth,
    alignSelf: "center",
  },

  // full-bleed row (spans edge-to-edge even inside padded scroll content)
  fullBleedRow: {
    alignSelf: "stretch",
    marginLeft: -Metrics.pagePadH,
    marginRight: -Metrics.pagePadH,
    paddingLeft: Metrics.pagePadH,
    paddingRight: Metrics.pagePadH,
  },

  screen: { gap: Metrics.gapScreen },
  section: { gap: Metrics.gapSection },
  center: { alignItems: "center", justifyContent: "center" },
});

export const Typography = StyleSheet.create({
  bigName: { fontSize: 36, fontWeight: "600", color: Colors.textPrimary },
  centerText: { textAlign: "center" },

  title: { fontSize: 28, fontWeight: "800", color: Colors.textPrimary, letterSpacing: 0.2 },
  subtitle: { fontSize: 14, color: Colors.textSecondary, lineHeight: 20 },

  kicker: { fontSize: 12, letterSpacing: 3, fontWeight: "800", color: Colors.textKicker },

  cardTitle: { fontSize: 16, fontWeight: "800", color: Colors.textPrimary },
  cardSub: { fontSize: 13, color: Colors.textSecondary, marginTop: 2, lineHeight: 18 },
});

export const Glass = StyleSheet.create({
  panel: {
    borderRadius: Metrics.radiusLG,
    backgroundColor: Colors.glassBg,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    padding: Metrics.panelPad,
    gap: 12,
  },
  card: {
    borderRadius: Metrics.radiusSM,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
    paddingVertical: Metrics.cardPadV,
    paddingHorizontal: Metrics.cardPadH,
  },
  panelSoft: { backgroundColor: Colors.glassBgSoft },
});

export const Buttons = StyleSheet.create({
  base: {
    borderRadius: Metrics.radiusMD,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: Colors.btnBg,
    borderWidth: 1,
    borderColor: Colors.btnBorder,
  },
  strong: { backgroundColor: Colors.btnBgStrong },
  ghost: { backgroundColor: "rgba(255,255,255,0.14)" },

  title: { fontSize: 16, fontWeight: "800", color: Colors.textPrimary },
  sub: { marginTop: 3, fontSize: 13, color: Colors.textSecondary, lineHeight: 18 },

  center: { alignItems: "center" },
});

export const Practice = StyleSheet.create({
  ring: {
    alignSelf: "center",
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.62)",
  },
  ringCenter: {
    alignSelf: "center",
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.62)",
    alignItems: "center",
    justifyContent: "center",
  },
  time: { fontSize: 32, color: Colors.textPrimary },
});

/**
 * Expo Router sometimes treats /app files as routes and expects default export.
 * Keep this shim to silence “missing default export” warnings.
 */
export default function _AppStylesRouteShim() {
  return null;
}
