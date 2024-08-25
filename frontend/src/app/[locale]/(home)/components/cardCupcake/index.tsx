import React from 'react'

import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import WallpaperRoundedIcon from '@mui/icons-material/WallpaperRounded'

type Props = {
  name: string
  code: string
}

function CardCupcake({ name }: Props) {

  return (
    <Card
      sx={{
        width: 275,
        height: 411,
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
            <Box>
              <Badge>
                <Avatar
                  variant="rounded"
                  style={{
                    backgroundColor: '#EBEBEB',
                    width: 257,
                    height: 233,
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

export default CardCupcake
