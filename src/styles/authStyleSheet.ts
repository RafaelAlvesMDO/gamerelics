import { colorsPalette } from '@/src/themes/colorsPalette';
import { StyleSheet } from 'react-native';
import { typography } from '../themes/typhography';

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
    backgroundColor: "#7c3aed1a",
    borderWidth: 1,
    borderColor: "#7c3aed4d", 
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  topTitle: {
    fontSize: typography.title,
    fontWeight: "bold",
    color: colorsPalette.textPrimary,
  },

  topSubtitle: {
    fontSize: typography.normalText,
    color: colorsPalette.textSecondary,
    marginTop: 4,
  },

  form: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  formTitle: {
    fontSize: typography.title,
    fontWeight: "600",
    color: colorsPalette.textPrimary,
    marginBottom: 4,
  },

  formSubtitle: {
    fontSize: typography.normalText,
    color: colorsPalette.textSecondary,
    marginBottom: 24,
  },

  forgot: {
    color: colorsPalette.primary,
    alignSelf: "flex-end",
    marginBottom: 12,
    fontSize: typography.normalText,
  },

  authTextRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
  },

  authText: {
    color: "#a1a1aa",
    marginRight: 4,
    fontSize: typography.normalText,
  },

  authLink: {
    color: colorsPalette.primary,
    fontWeight: "600",
    fontSize: typography.normalText,
  },

  containerFeedback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titleFeedback: {
    color: colorsPalette.textSecondary,
    fontSize: typography.normalText,
    fontWeight: "bold",
    marginBottom: 20,
  },

  iconsContainer: {
    color: colorsPalette.primary,
    flexDirection: "row",
    gap: 10,
  },

  iconButton: {
    padding: 12,
  },
});