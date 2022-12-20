import { mutation } from "./_generated/server";

export default mutation(async ({ db }) => {

    const tokenSet = {
        lastUpdated: Date.now(),
        tokenSet: [
            {
                theme: 'playground',
                tokens: {
                    textPrimary: '#ededec',
                    textSecondary: '#a1a09a',
                    textMuted: '#717069',
                    textAccent: '#f76808',
                    bgPrimary: '#161615',
                    bgSecondary: '#1c1c1a',
                    fg: '#232320',
                    fgHover: '#282826',
                    fgBorder: '#3e3e3a',
                    fgBorderHover: '#51504b',
                    fgHoverStrong: '#2e2e2b',
                    fgText: '#ededec',
                    fgActive: '#2e2e2b',
                    separator: '#353431',
                    fgAccent: '#391a03',
                    fgAccentActive: '#4f2305',
                    fgAccentHover: '#441f04',
                    fgAccentBorder: '#763205',
                    fgAccentBorderHover: '#943e00',
                    focusBorder: '#594a05',
                    focusShadow: '#3e3000',
                    fgAccentText: '#feeadd',
                }
            }
        ]
    }
    await db.insert("designTokens", tokenSet)
});

/* 
const orangeDark = {
    orange1: '#1f1206',
    orange2: '#2b1400',
    orange3: '#391a03',
    orange4: '#441f04',
    orange5: '#4f2305',
    orange6: '#5f2a06',
    orange7: '#763205',
    orange8: '#943e00',
    orange9: '#f76808',
    orange10: '#ff802b',
    orange11: '#ff8b3e',
    orange12: '#feeadd',
  }

  const sandDark = {
    sand1: '#161615',
    sand2: '#1c1c1a',
    sand3: '#232320',
    sand4: '#282826',
    sand5: '#2e2e2b',
    sand6: '#353431',
    sand7: '#3e3e3a',
    sand8: '#51504b',
    sand9: '#717069',
    sand10: '#7f7e77',
    sand11: '#a1a09a',
    sand12: '#ededec',
  }

  const yellowDark = {
    yellow1: '#1c1500',
    yellow2: '#221a00',
    yellow3: '#2c2100',
    yellow4: '#352800',
    yellow5: '#3e3000',
    yellow6: '#493c00',
    yellow7: '#594a05',
    yellow8: '#705e00',
    yellow9: '#f5d90a',
    yellow10: '#ffef5c',
    yellow11: '#f0c000',
    yellow12: '#fffad1',
  } */