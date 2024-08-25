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
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

type Props = {
  name: string
  code: string
}

function CardCupcake({ name }: Props) {

  return (
    <Card
      sx={{
        width: 275,
        height: 368,
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

          <Grid item xs={12}>
            <Typography variant="body2" component="div" sx={{ textAlign: 'left' }}>
              {name.length > 30 ? `${name.slice(0, 30)}...` : name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" component="div" sx={{ textAlign: 'left' }}>
              R$ 6,00
            </Typography>
          </Grid>

          <Grid item xs={12} >
            <Grid container spacing={1}
              alignItems={'center'}
              justifyContent="center">
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      width: 23,
                      height: 36,
                      minWidth: 'unset',
                    }}
                  >
                    -
                  </Button>

                  <Typography variant="body2" component="div">
                    1
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      width: 23,
                      height: 36,
                      minWidth: 'unset',
                    }}
                  >
                    +
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ width: 120 }}
                  startIcon={<ShoppingCartOutlinedIcon />}
                >
                  Adicionar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardCupcake
