import React from 'react'

import Image from 'next/image'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type Props = {
  withButton?: boolean
  button?: React.ReactNode
  title?: string
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2'
  subtitle?: string
  subtitleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2'
  image: string
  width: number
  height: number
}

function EmptyState({
  withButton = false,
  button,
  title,
  titleVariant = 'h6',
  subtitle,
  subtitleVariant = 'body2',
  image,
  width,
  height,
}: Props) {
  return (
    <>
      <Stack
        sx={{
          alignItems: 'center',
        }}
        direction="column"
      >
        <Image
          src={image}
          alt="Logo"
          width={width}
          height={height}
          style={{ marginBottom: 42, marginTop: 88 }}
        />
        {title && title.trim() !== '' && (
          <Typography
            sx={{ textAlign: 'center' }}
            variant={titleVariant}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {subtitle && subtitle.trim() !== '' && (
          <Typography
            sx={{ textAlign: 'center' }}
            variant={subtitleVariant}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
        {withButton && (
          button
        )}
      </Stack>
    </>
  )
}

export default EmptyState
