import React from 'react'

import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import WallpaperRoundedIcon from '@mui/icons-material/WallpaperRounded'
import Button from '@mui/material/Button'

type Props = {
  name: string
  code: string
}

function CardOrganization({ name }: Props) {

  return (
    <Card
      sx={{
        width: 251,
        height: 270,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"

        >
          <Grid item xs={12} >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Badge>
                <Avatar
                  style={{
                    backgroundColor: '#EBEBEB',
                    width: 120,
                    height: 120,
                  }}
                >
                  <WallpaperRoundedIcon
                    style={{ fontSize: 50, color: '#A4AABF' }}
                  />
                </Avatar>
              </Badge>
            </Box>
          </Grid>

          <Grid item xs={12} textAlign={'center'} >
            <Typography variant="body2" component="div">
              {name.length > 30 ? `${name.slice(0, 30)}...` : name}
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography variant="subtitle2" component="div">
              CNPJ: 11.***.***/****-82
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ my: 1.8 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{ width: 157 }}
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardOrganization
