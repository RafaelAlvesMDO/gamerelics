import { colorsPalette } from '@/src/themes/colorsPalette';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colorsPalette.background,
  },

  topContainer: {
    height: 220,
    overflow: "hidden",
  },

  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.3,
  },

  gradient: {
    ...StyleSheet.absoluteFillObject,
  },

  topContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 24,
  },

  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: "#7c3aed1a", // CHANGE TO SECONDARY COLOR [TO DECIDE] 
    borderWidth: 1,
    borderColor: "#7c3aed4d", // CHANGE TO SECONDARY COLOR [TO DECIDE] 
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  topTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colorsPalette.textPrimary,
  },

  topSubtitle: {
    fontSize: 14,
    color: colorsPalette.textSecondary,
    marginTop: 4,
  },

  form: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  formTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: colorsPalette.textPrimary,
    marginBottom: 4,
  },

  formSubtitle: {
    fontSize: 14,
    color: colorsPalette.textSecondary,
    marginBottom: 24,
  },

  inputGroup: {
    marginBottom: 16,
  },

  label: {
    color: colorsPalette.textSecondary,
    marginBottom: 6,
  },

  inputWrapper: {
    backgroundColor: "#ffffff0d", // TO DECIDE [WHEN CREATE THE INPUT COMPONENT]
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2a2a2a", // TO DECIDE [WHEN CREATE THE INPUT COMPONENT]
    height: 48,
    justifyContent: "center",
  },

  input: {
    color: colorsPalette.textPrimary,
    paddingLeft: 36,
    paddingRight: 12,
  },

  iconLeft: {
    position: "absolute",
    left: 10,
  },

  iconRight: {
    position: "absolute",
    right: 10,
  },

  forgot: {
    color: colorsPalette.primary,
    alignSelf: "flex-end",
    marginBottom: 12,
  },

  button: {
    height: 48,
    backgroundColor: colorsPalette.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: colorsPalette.textPrimary,
    fontWeight: "600",
    fontSize: 16,
  },

  authTextRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 40,
  },

  authText: {
    color: "#a1a1aa",
    marginRight: 4,
  },

  authLink: {
    color: colorsPalette.primary,
    fontWeight: "600",
  },
});