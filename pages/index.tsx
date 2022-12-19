import { useMutation, useQuery } from '../convex/_generated/react'
import { DropdownMenu, Button, SideNav, Toggle } from '../components'
import { styled } from '../stitches.config'
import { MagicWandIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

const Title = styled('span', {
  color: 'var(--colors-textPrimary)'
})

const Main = styled('main', {
  display: 'flex',
});

const Box = styled('div', {
  display: 'flex'
})

export default function Home() {

  const tokenSet = useQuery("getTokenSet");
  const addTokenSet = useMutation("addTokenSet");
  const [editMode, setEditMode] = useState(false)

  const parseTokenToCSS = (tokenSet: {
    textPrimary: string,
    textSecondary: string,
    textMuted: string,
    bgPrimary: string,
    bgSecondary: string,
    fg: string,
    fgHover: string,
    fgBorder: string,
    fgBorderHover: string,
    fgHoverStrong: string,
    fgText: string,
    fgActive: string,
    separator: string,
    fgAccent: string,
    fgAccentActive: string,
    fgAccentHover: string,
    fgAccentBorder: string,
    fgAccentBorderHover: string,
    focusBorder: string,
    focusShadow: string,
    fgAccentText: string,
  }) => {

    if (!editMode) return undefined;

    const token = {
      '--colors-textPrimary': tokenSet.textPrimary,
      '--colors-textSecondary': tokenSet.textSecondary,
      '--colors-textMuted': tokenSet.textMuted,
      '--colors-bgPrimary': tokenSet.bgPrimary,
      '--colors-bgSecondary': tokenSet.bgSecondary,
      '--colors-fg': tokenSet.fg,
      '--colors-fgHover': tokenSet.fgHover,
      '--colors-fgBorder': tokenSet.fgBorder,
      '--colors-fgBorderHover': tokenSet.fgBorderHover,
      '--colors-fgText': tokenSet.fgText,
      '--colors-fgActive': tokenSet.fgActive,
      '--colors-separator': tokenSet.separator,
      '--colors-fgAccent': tokenSet.fgAccent,
      '--colors-fgActiveAccent': tokenSet.fgAccentActive,
      '--colors-fgAccentBorder': tokenSet.fgAccentBorder,
      '--colors-fgAccentBorderHover': tokenSet.fgAccentBorderHover,
      '--colors-focusBorder': tokenSet.focusBorder,
      '--colors-focusShadow': tokenSet.focusShadow,
      '--colors-fgAccentText': tokenSet.fgAccentText,
    }
    return token;
  }


  return (
    <Main css={
      tokenSet ? parseTokenToCSS(tokenSet.tokenSet[0].tokens) : {}
    }>
      <SideNav />
      <Box css={{
        flexDirection: 'column',
        gap: '$6',
        margin: '$6',
        width: '100%'
      }}>
        <Box css={{
          width: '100%',
          justifyContent: 'space-between'
        }}>
          <Title css={{
          }} >
            App
          </Title>
          <Button variant={'primary'} onClick={() => {
            addTokenSet()
          }}>Add token set</Button>
        </Box>
      </Box>
      <Toggle css={{
        position: 'absolute',
        right: '$5',
        bottom: '$5'
      }}
        onPressedChange={setEditMode}
      >
        <MagicWandIcon />
      </Toggle>
    </Main >
  )
}
