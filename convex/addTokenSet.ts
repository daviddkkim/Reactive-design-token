import { mutation } from "./_generated/server";

export default mutation(async ({ db }) => {

    const tokenSet = {
        lastUpdated: Date.now(),
        tokenSet: [
            {
                theme: 'playground',
                tokens: {
                    textPrimary: 'orange',
                    textSecondary: 'purple',
                    textMuted: '',
                    bgPrimary: 'blue',
                    bgSecondary: '',
                    fg: 'pink',
                    fgHover: '',
                    fgBorder: '',
                    fgBorderHover: '',
                    fgHoverStrong: '',
                    fgText: '',
                    fgActive: '',
                    separator: '',
                    fgAccent: '',
                    fgAccentActive: '',
                    fgAccentHover: '',
                    fgAccentBorder: '',
                    fgAccentBorderHover: '',
                    focusBorder: '',
                    focusShadow: '',
                    fgAccentText: '',
                }
            }
        ]
    }
    await db.insert("designTokens", tokenSet)
});
