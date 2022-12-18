import { defineSchema, defineTable, s } from 'convex/schema'

export default defineSchema({
  designTokens: defineTable({
    tokenSet: s.array(
      s.object({
        theme: s.string(),
        tokens: s.object({
          textPrimary: s.string(),
          textSecondary: s.string(),
          textMuted: s.string(),
          bgPrimary: s.string(),
          bgSecondary: s.string(),
          fg: s.string(),
          fgHover: s.string(),
          fgBorder: s.string(),
          fgBorderHover: s.string(),
          fgHoverStrong: s.string(),
          fgText: s.string(),
          fgActive: s.string(),
          separator: s.string(),
          fgAccent: s.string(),
          fgAccentActive: s.string(),
          fgAccentHover: s.string(),
          fgAccentBorder: s.string(),
          fgAccentBorderHover: s.string(),
          focusBorder: s.string(),
          focusShadow: s.string(),
          fgAccentText: s.string(),
        })
      })
    ),
    lastUpdated: s.number(),
  }),
})