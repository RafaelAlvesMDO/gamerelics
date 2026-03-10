import { StyleSheet } from 'react-native';
import { colorsPalette } from '../themes/colorsPalette';
import { typography } from '../themes/typhography';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colorsPalette.background,
  },

  header: {
    height: 200,
    overflow: "hidden",
  },

  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    opacity: 0.4,
  },

  headerContent: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  title: {
    fontSize: typography.title,
    fontWeight: "bold",
    color: colorsPalette.textPrimary,
  },

  subtitle: {
    fontSize: typography.normalText,
    color: colorsPalette.textSecondary,
    marginTop: 4,
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },

  statCard: {
    flex: 1,
    backgroundColor: colorsPalette.card,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
  },

  statNumber: {
    fontSize: typography.title,
    fontWeight: "bold",
    color: colorsPalette.textPrimary,
  },

  statLabel: {
    fontSize: typography.subtitles,
    color: colorsPalette.textSecondary,
    textTransform: "uppercase",
  },

  main: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 90,
  },

  category: {
    marginBottom: 24,
  },

  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 10,
  },

  categoryTitle: {
    fontSize: typography.normalText,
    fontWeight: "bold",
    color: colorsPalette.textPrimary,
  },

  categoryCount: {
    fontSize: typography.normalText,
    color: colorsPalette.textSecondary,
    marginLeft: 4,
  },

  gamesRow: {
    flexDirection: "row",
    gap: 10,
  },

  gameCover: {
    width: 100,
    height: 140,
    borderRadius: 8,
  },

  emptyText: {
    color: colorsPalette.textSecondary,
    fontSize: typography.normalText,
  },

});